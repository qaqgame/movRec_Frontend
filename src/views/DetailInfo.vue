<template>
    <div class="DetailInfo">
        <img style="position: absolute;height: 360px;z-index: 0;width: 100%;left: 0" :src="src1"/>
        <PageHeader style="z-index: 10;" class="myHeader"
                    v-bind:visible="false" v-on:checklogined="listenLogin"></PageHeader>
        <MovieDetailHeader v-bind:movie-name="movName"
                           v-bind:movie-data="movieDetailInfo"
                           v-on:commovie="listenCom"
                           v-bind:mov-id="name"
                           v-bind:if-login="logined"></MovieDetailHeader>
        <el-row class="devider">
            <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row  class="devider">
            <el-col :span="18" :offset="3">
                <el-row type="flex" justify="space-between">
                    <el-col :span="15">
                        <el-row type="flex" justify="start" align="top">
                            <h2>简介：</h2>
                        </el-row>
                        <el-row type="flex" justify="start" align="top">
                            <p style="text-align: left">{{movieDetailInfo === null ? "暂无" : movieDetailInfo.description}}</p>
                        </el-row>
                    </el-col>
                    <el-col :span="7">
                        <el-row type="flex" justify="start" style="flex-wrap: wrap;">
                            <el-tag
                                    v-for="tag in getAllTags"
                                    v-bind:key="tag.tagid"
                                    :disable-transitions="false"
                                    @close="handleClose(tag)">
                                {{tag.tagcontent}}<i class="iconfont pointer"
                                                     v-bind:class="{'icon-dianzan1':!tag.agreed,'icon-dianzan2':tag.agreed}"
                                                     style="color: #00A1D6" @click="agreeTag(tag)"></i>{{tag.agree}}
                            </el-tag>
                            <el-input
                                    class="input-new-tag"
                                    v-if="inputVisible"
                                    v-model="inputValue"
                                    ref="saveTagInput"
                                    size="small"
                                    @keyup.enter.native="handleInputConfirm"
                            >
                            </el-input>
                            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row  class="devider">
            <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="18" :offset="3">
                <el-row type="flex" justify="space-between">
                    <el-col :span="24">
                        <el-row type="flex" justify="start" align="top">
                            <h2>评论：</h2>
                        </el-row>
                        <SingleComment v-for="reply in replies" v-bind:reply-data="reply"
                                       v-bind:key="reply.replyid"
                                       v-bind:head-size="'medium'"
                                       v-bind:moviename="name"
                                       v-bind:mov-id="name"
                                       v-bind:has-login="logined"></SingleComment>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <el-row style="margin: 20px">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :hide-on-single-page="ifhidden"
                    :current-page.sync="currentPage1"
                    :total="total">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    import PageHeader from "../components/PageHeader";
    import MovieDetailHeader from "../components/MovieDetailHeader";
    import SingleComment from "../components/SingleComment";

    export default {
        name: "DetailInfo",
        components: {SingleComment, MovieDetailHeader, PageHeader},
        props:['name'],
        data() {
            return {
                src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                src1:require("../assets/UserSpace_Background2.png"),
                dialogFormVisible: false,
                isActive:true,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                value2: null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                movieDetailInfo:null,
                replies:[],
                currentPage1:1,
                starter:10,
                counter:10,
                total:0,
                logined: false,
                movName:'加载中...',
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: '',
                tmpUserLevel: 1,
                ifhidden:true,
            }
        },
        created() {
            //获取数据
            this.fetchData(this.name);
            this.getAllComment(this.name,this.currentPage1-1,this.counter);
        },
        computed:{
            getAllTags() {
                if (this.movieDetailInfo !== null) {
                    return this.movieDetailInfo.tags;
                } else {
                    return [];
                }
            }
        },
        methods:{
            fetchData(mn) {
                window.console.log("get");
                let url = "http://127.0.0.1:8000/movie/"+mn;
                window.console.log(url);
                this.$axios.get(url,{}).then(res => {
                    window.console.log(res);
                    this.setData(res.data.data);
                    this.movName = res.data.data.movieinfo.name;
                })
            },
            setData(data) {
                this.movieDetailInfo = data.movieinfo;
            },
            getAllComment(data, start, count) {
                start = start * this.starter;
                let url = "http://127.0.0.1:8000/getreply?movid="+data+"&start="+start+"&count="+count;
                window.console.log(url);
                this.$axios.get(url,{}).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        this.replies = res.data.data.replylist;
                        this.total = Math.ceil(res.data.data.count/this.counter)*10;
                        window.console.log(this.total)
                    }
                })
            },
            listenCom:function (data) {
                this.total = Math.ceil(data.count/this.counter)*10;
                window.console.log("sendmovcom: ",data.count, this.total)
                this.replies.push(data);
            },
            handleCurrentChange() {
                window.console.log("current page: ",this.currentPage1);
                this.getAllComment(this.name, this.currentPage1-1,this.counter);
            },
            listenLogin:function (data) {
                this.logined = data.logined;
                this.tmpUserLevel = data.level;
                window.console.log("if logined: ",this.logined)
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(() => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                if (!this.logined) {
                    this.$router.push({path:'/'});
                    // todo: notify:请先登录
                    this.$notify({
                        title: '无法添加标签',
                        message: '请先登录',
                        type: 'warning'
                    });
                    return;
                }
                if (this.tmpUserLevel < 6) {
                    this.$notify({
                        title: '无法添加Tag',
                        message: '您目前的等级为'+this.tmpUserLevel+',需要达到6级才能为电影添加Tag',
                        type: 'warning'
                    });
                    this.inputVisible = false;
                    this.inputValue = '';
                    return;
                }
                let inputValue = this.inputValue;
                if (inputValue) {
                    let url = "http://127.0.0.1:8000/addtag/";
                    let params = {
                        "movid":this.name,
                        "content":inputValue
                    };

                    this.$axios.post(url,params).then(res => {
                        if (res.data.result === "success") {
                            this.movieDetailInfo.tags.push(res.data.data);
                        } else {
                            //todo: notify添加失败
                        }
                    })
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            agreeTag(data){
                if (!this.logined) {
                    this.$router.push({path:'/'});
                    // todo: notify:请先登录
                    this.$notify({
                        title: '无法点赞',
                        message: '请先登录',
                        type: 'warning'
                    });
                    return;
                }
                let url;
                if (data.agreed) {
                    url = "http://127.0.0.1:8000/cancelagree";
                } else  {
                    url = "http://127.0.0.1:8000/agree";
                }
                let param = {
                    "movid":this.name,
                    "target":data.tagid,
                    "type":"Tag"
                };
                this.$axios.get(url,{
                    params:param
                }).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        data.agreed = !data.agreed;
                        data.agree = res.data.data.agreecount;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }

    .PageHeaderBar {
        position: fixed;
        width: 100%;
        z-index: 1;
    }
    .devider {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .button-ops >>> .el-button {
        margin-left: 40px;
    }

    .comment-title >>> h2 {
        color: black;
        font-size: 30px;
        text-align: left;
    }

    /*.line >>> .el-row {*/
        /*width: 100%;*/
    /*}*/

    .movieImg1 >>> .el-image__inner {
        height: 150px;
        width: auto;
    }

    .line >>> .el-row {
        height: 100%;
    }

    .flex-column >>> .el-row {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .el-tag {
        margin-right: 10px;
        margin-top: 10px;
    }
    .button-new-tag {
        margin-right: 10px;
        margin-top: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-right: 10px;
        vertical-align: bottom;
        margin-top: 10px;
    }
</style>