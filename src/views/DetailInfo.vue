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
                <el-row type="flex" justify="start" align="top">
                    <h2>简介：</h2>
                </el-row>
                <el-row type="flex" justify="start" align="top">
                    <p style="text-align: left">{{movieDetailInfo === null ? "暂无" : movieDetailInfo.description}}</p>
                </el-row>
            </el-col>
        </el-row>
        <el-row  class="devider">
            <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="18" :offset="3">
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
        <el-row style="margin: 20px">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
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
            }
        },
        created() {
            //获取数据
            this.fetchData(this.name);
            this.getAllComment(this.name,this.currentPage1-1,this.counter);
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
                window.console.log("if logined: ",this.logined)
            }
        }
    }
</script>

<style scoped>
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

</style>