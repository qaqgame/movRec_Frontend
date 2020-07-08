<!--测试按钮代码-->
<template>
    <div class="MovieDetailHeader">
        <!--与顶栏开一部分距离-->
        <!--<el-row><br/></el-row>-->
        <el-row type="flex" justify="start" align="top">
            <el-col v-bind:span="6" :offset="0" v-bind:style="{height:hei}">
                <el-row><br/></el-row>
                <el-image class="movieImg" :src="initialMovieData.coverurl === '' ? src : 'http://120.79.240.163:8000'+initialMovieData.coverurl"></el-image>
            </el-col>
            <el-col :span="6" :offset="0" class="movieInfo">
                <el-row><br></el-row>
                <!--                <el-row><br></el-row>-->
                <el-row>
                    <h2>{{movieName}}</h2>
                </el-row>
                <el-row>
                    <h3>时间:{{initialMovieData.movtime === "" ? defaultInfo.movtime : initialMovieData.movtime}}</h3>
                </el-row>
                <el-row>
                    <h3>地区:{{getAreas === ""? "暂无" : getAreas}}</h3>
                </el-row>
                <el-row>
                    <h3>类型:{{getTypes === "" ? "暂无" : getTypes}}</h3>
                </el-row>
                <el-row>
                    <h3>导演:{{initialMovieData.director === "" ? defaultInfo.director : initialMovieData.director}}</h3>
                </el-row>
                <el-row>
                    <h3>演员:{{getActors === "" ? "暂无" : getActors}}</h3>
                </el-row>
                <el-row>
                    <h3>时长:{{initialMovieData.lastfor === 0 ? defaultInfo.lastfor : initialMovieData.lastfor}}</h3>
                </el-row>
            </el-col>
            <el-col :span="6" class="movieInfo" style="height: 100%">
                <el-row><br></el-row>
                <!--                <el-row><br></el-row>-->
                <!--                <el-row><br></el-row>-->
                <el-row type="flex" align="top" style="height: 100%; width: 100%">
                    <h3>评分：
                        <el-rate style="display: inline-block"
                                 v-model="value"
                                 disabled
                                 show-score
                                 text-color="#ff9900"
                                 score-template="{value}">
                        </el-rate>
                    </h3>
                </el-row>
                <el-row style="margin-top: 20px">
                    <h3>语言:{{initialMovieData.lang === "" ? defaultInfo.lang : initialMovieData.lang}}</h3>
                </el-row>
                <!--调整距离用-->
                <el-row><br></el-row>
                <el-row><br></el-row>
                <el-row><br></el-row>
                <el-row><br></el-row>
                <el-row><br></el-row>
                <el-row type="flex" align="bottom" style="height: 100%; width: 100%;">
                    <el-button class="button-ops" type="primary" icon="el-icon-star-off" v-bind:disabled="this.initialMovieData.ifKeeped" @click="keepMovie()">{{this.initialMovieData.ifKeeped === true ? "已收藏":"收藏"}}</el-button>
                    <el-button class="button-ops" @click="dialogFormVisible = true" type="primary"
                               icon="el-icon-edit">评论
                    </el-button>
                </el-row>
            </el-col>
        </el-row>
        <!--todo:评论？？？-->
        <el-dialog title="我来评论" :visible.sync="dialogFormVisible">
            <el-row style="display: flex; flex-direction: row;flex-wrap: nowrap">
                <el-col >
                    <el-image  class="movieImg" :src="initialMovieData.coverurl === '' ? defaultInfo.coverurl : 'http://120.79.240.163:8000'+initialMovieData.coverurl"></el-image>
                </el-col>
                <el-col style="display: flex; flex-direction: column; justify-content: space-around; height: 150px;margin-left: 30px">
                    <div>
                        <h2 class="comment-title" style="text-align: left">{{movieName}}</h2>
                    </div>
                    <div>
                        <el-row type="flex" justify="start" align="middle">
                            <h2>评分：</h2>
                            <el-rate
                                    v-model="value2"
                                    show-score
                                    :colors="colors">
                            </el-rate>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row><br/></el-row>
            <el-form>
                <el-row>
                    <el-col :span="20" :offset="2">
                        <el-input
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 6}"
                                placeholder="请输入内容"
                                v-model="textarea1">
                        </el-input>
                    </el-col>
                </el-row>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="sendMovieCom()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    var defaultInfo = {
        "movtime":"暂无",
        "area":[],
        "director":"暂无",
        "lastfor":"暂无",
        "lang":"暂无",
        "type":[],
        "actors":[],
        "coverurl":'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        "ifKeeped":false,
    }

    export default {
        name: "MovieDetailHeader",
        data() {
            return {
                hei: '300px',
                src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                value:4.1,
                defaultInfo: defaultInfo,
                initialMovieData: defaultInfo,
                dialogFormVisible: false,
                textarea1:'',
                formLabelWidth: '120px',
                value2: 0,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                logined:this.ifLogin,
            }
        },
        props:['movieName','movieData','ifLogin'],
        computed: {
            getTypes: function () {
                let strTypes = "";
                this.initialMovieData.type.forEach(function (item) {
                    strTypes += item;
                    strTypes += " ";
                });
                window.console.log(strTypes);
                return strTypes;
            },
            getActors: function () {
                let strActors = "";
                this.initialMovieData.actors.forEach(function (item) {
                    strActors += item;
                    strActors += " ";
                });
                return strActors;
            },
            getAreas: function () {
                let strAreas = "";
                this.initialMovieData.area.forEach(function (item) {
                    strAreas += item;
                    strAreas += " ";
                });
                return strAreas;
            }
        },
        watch: {
            movieData: function () {
                this.initialMovieData = this.movieData;
                window.console.log("moviedetail: ",this.initialMovieData)
            },
            ifLogin: function () {
                this.logined = this.ifLogin;
            }
        },
        methods: {
            keepMovie() {
                let url = "http://120.79.240.163:8000/keepMovie?moviename="+this.movieName;
                window.console.log(url);
                this.$axios.get(url,{}).then(res => {
                    window.console.log(res);
                    // todo:验证该接口的正确性
                    if (res.data.result === "success") {
                        this.dis = true;
                    }
                    this.notifyKeepSuccess(res.data.result);
                })
            },
            notifyKeepSuccess(res) {
                if (res === "success") {
                    this.$notify({
                        title: '收藏成功',
                        message: '已成功收藏电影：'+this.movieName,
                        type: 'success'
                    });
                } else if (res === "failed") {
                    this.$notify({
                        title: '收藏失败',
                        message: '电影收藏失败：'+this.movieName,
                        type: 'error'
                    });
                }
            },
            sendMovieCom() {
                window.console.log("logined in movie?",this.logined);
                if (!this.logined) {
                    this.$router.push({path:'/'});
                    // todo: notify:请先登录
                    return;
                }
                let url = "http://120.79.240.163:8000/createreply/";
                let params = {
                    "type":"movie",
                    "content": this.textarea1,
                    "grade": Number(this.value2),
                    "moviename": this.movieName
                };
                window.console.log(url,params);
                this.$axios.post(url,params).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        this.dialogFormVisible = false;
                        this.textarea1='';
                        this.$emit("commovie",res.data.data);
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .button-ops >>> .el-button {
        margin-left: 40px;
    }

    .movieImg >>> .el-image__inner {
        height: 200px;
        width: auto;
    }

    .movieInfo >>> h2 {
        color: white;
        text-align: left;
        font-size: 40px;
    }

    .movieInfo >>> h3 {
        color: white;
        text-align: left;
    }
</style>