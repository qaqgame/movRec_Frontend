<template>
    <div class="MovieDetailHeader">
        <el-row>
            <el-col v-bind:span="18" :offset="3" v-bind:style="{height:hei}" style="display: flex; flex-direction: column; justify-content: center">
                <el-row type="flex" align="middle" style="width: 100%;height: 200px">
                    <el-col :span="6">
                        <el-image class="movieImg" :src="initialMovieData.coverurl === '' ? src : 'http://127.0.0.1:8000'+initialMovieData.coverurl"></el-image>
                    </el-col>
                    <el-col :span="9" :offset="1" class="movieInfo">
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
                    <el-col style="height: 100%" :span="9">
                        <el-row type="flex" align="top" style="height: 100%; width: 100%">
                            <el-col class="movieInfo">
                                <el-row>
                                    <h3>评分：<el-rate style="display: inline-block"
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
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
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