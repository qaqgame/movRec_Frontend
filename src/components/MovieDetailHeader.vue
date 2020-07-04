<!--<template>-->
    <!--<div class="MovieDetailHeader">-->
        <!--<el-row>-->
            <!--<el-col v-bind:span="18" :offset="3" v-bind:style="{height:hei}" style="display: flex; flex-direction: column; justify-content: center">-->
                <!--<el-row type="flex" align="middle" style="width: 100%;height: 200px">-->
                    <!--<el-col :span="6">-->
                        <!--<el-image class="movieImg" :src="initialMovieData.coverurl === '' ? src : 'http://127.0.0.1:8000'+initialMovieData.coverurl"></el-image>-->
                    <!--</el-col>-->
                    <!--<el-col :span="9" :offset="1" class="movieInfo">-->
                        <!--<el-row>-->
                            <!--<h2>{{movieName}}</h2>-->
                        <!--</el-row>-->
                        <!--<el-row>-->
                            <!--<h3>时间:{{initialMovieData.movtime === "" ? defaultInfo.movtime : initialMovieData.movtime}}</h3>-->
                        <!--</el-row>-->
                        <!--<el-row>-->
                            <!--<h3>地区:{{getAreas === ""? "暂无" : getAreas}}</h3>-->
                        <!--</el-row>-->
                        <!--<el-row>-->
                            <!--<h3>类型:{{getTypes === "" ? "暂无" : getTypes}}</h3>-->
                        <!--</el-row>-->
                        <!--<el-row>-->
                            <!--<h3>导演:{{initialMovieData.director === "" ? defaultInfo.director : initialMovieData.director}}</h3>-->
                        <!--</el-row>-->
                        <!--<el-row>-->
                            <!--<h3>演员:{{getActors === "" ? "暂无" : getActors}}</h3>-->
                        <!--</el-row>-->
                        <!--<el-row>-->
                            <!--<h3>时长:{{initialMovieData.lastfor === 0 ? defaultInfo.lastfor : initialMovieData.lastfor}}</h3>-->
                        <!--</el-row>-->
                    <!--</el-col>-->
                    <!--<el-col style="height: 100%" :span="9">-->
                        <!--<el-row type="flex" align="top" style="height: 100%; width: 100%">-->
                            <!--<el-col class="movieInfo">-->
                                <!--<el-row>-->
                                    <!--<h3>评分：<el-rate style="display: inline-block"-->
                                                   <!--v-model="value"-->
                                                   <!--disabled-->
                                                   <!--show-score-->
                                                   <!--text-color="#ff9900"-->
                                                   <!--score-template="{value}">-->
                                            <!--</el-rate>-->
                                    <!--</h3>-->
                                <!--</el-row>-->
                                <!--<el-row style="margin-top: 20px">-->
                                    <!--<h3>语言:{{initialMovieData.lang === "" ? defaultInfo.lang : initialMovieData.lang}}</h3>-->
                                <!--</el-row>-->
                            <!--</el-col>-->
                        <!--</el-row>-->
                    <!--</el-col>-->


<!--<template>-->
<!--    <div class="MovieDetailHeader">-->
<!--        <el-row>-->
<!--            <el-col v-bind:span="18" :offset="3" v-bind:style="{height:hei}" style="display: flex; flex-direction: column; justify-content: center">-->
<!--                <el-row type="flex" align="middle" style="width: 100%;height: 200px">-->
<!--                    <el-col :span="6">-->
<!--                        <el-image class="movieImg" :src="src"></el-image>-->
<!--                    </el-col>-->
<!--                    <el-col :span="9" :offset="1" class="movieInfo">-->
<!--                        <el-row>-->
<!--                            <h2>{{movieName}}</h2>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <h3>时间</h3>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <h3>地区</h3>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <h3>类型</h3>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <h3>导演</h3>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <h3>演员</h3>-->
<!--                        </el-row>-->
<!--                        <el-row>-->
<!--                            <h3>时长</h3>-->
<!--                        </el-row>-->
<!--                    </el-col>-->
<!--                    <el-col style="height: 100%" :span="9">-->
<!--                        <el-row type="flex" align="top" style="height: 100%; width: 100%">-->
<!--                            <el-col class="movieInfo">-->
<!--                                <el-row>-->
<!--                                    <h3>评分：<el-rate style="display: inline-block"-->
<!--                                                   v-model="value"-->
<!--                                                   disabled-->
<!--                                                   show-score-->
<!--                                                   text-color="#ff9900"-->
<!--                                                   score-template="{value}">-->
<!--                                            </el-rate>-->
<!--                                    </h3>-->
<!--                                </el-row>-->
<!--                                <el-row style="margin-top: 20px">-->
<!--                                    <h3>语言</h3>-->
<!--                                </el-row>-->
<!--                            </el-col>-->
<!--                        </el-row>-->
<!--                    </el-col>-->


<!--                </el-row>-->
<!--            </el-col>-->
<!--        </el-row>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "MovieDetailHeader",-->
<!--        data() {-->
<!--            return {-->
<!--                hei: '300px',-->
<!--                src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',-->
<!--                value:4.1-->
<!--            }-->
<!--        },-->
<!--        props:['movieName']-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    .movieImg >>> .el-image__inner {-->
<!--        height: 200px;-->
<!--        width: auto;-->
<!--    }-->

<!--    .movieInfo >>> h2 {-->
<!--        color: white;-->
<!--        text-align: left;-->
<!--        font-size: 40px;-->
<!--    }-->

<!--    .movieInfo >>> h3 {-->
<!--        color: white;-->
<!--        text-align: left;-->
<!--    }-->
<!--</style>-->


<!--测试按钮代码-->
<template>
    <div class="MovieDetailHeader">
        <!--与顶栏开一部分距离-->
        <!--<el-row><br/></el-row>-->
        <el-row type="flex" justify="start" align="top">
            <el-col v-bind:span="6" :offset="0" v-bind:style="{height:hei}">
                <el-row><br/></el-row>
                <el-image class="movieImg" :src="initialMovieData.coverurl === '' ? src : 'http://127.0.0.1:8000'+initialMovieData.coverurl"></el-image>
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
                    <el-button class="button-ops" type="primary" icon="el-icon-star-off">收藏</el-button>
                    <el-button class="button-ops" @click="dialogFormVisible = true" type="primary"
                               icon="el-icon-edit">评论
                    </el-button>
                </el-row>
            </el-col>
        </el-row>
        <!--todo:评论？？？-->
        <el-dialog title="我来评论" :visible.sync="dialogFormVisible">
            <el-row style="display: flex; flex-direction: row;flex-wrap: nowrap; height: 150px">
                <el-col style="height: 150px">
                    <el-image style="height: 150px; width: 225px" class="movieImg1" :src="src"></el-image>
                </el-col>
                <el-col style="display: flex; flex-direction: column; justify-content: space-around; height: 150px;margin-left: 30px">
                    <div>
                        <h2 class="comment-title" style="text-align: left">11111111</h2>
                    </div>
                    <div>
                        <el-row type="flex" justify="start" align="middle">
                            <h2>评分：</h2>
                            <el-rate
                                    v-model="value2"
                                    :colors="colors">
                            </el-rate>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row><br/></el-row>
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
        "coverurl":'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
                colors: ['#99A9BF', '#F7BA2A', '#FF9900']
            }
        },
        props:['movieName','movieData'],
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