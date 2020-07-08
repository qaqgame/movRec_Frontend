<template>
    <div class="home" style="min-width: 1340px">
        <div class="PageHeaderBar">
            <PageHeader ref="pageheaderref" v-on:getpos="toPos" v-bind:visible="true"></PageHeader>
        </div>
        <el-row style="position: fixed!important;top: 14%;z-index: 10;width: 100%">
            <el-col :span="24">
                <search-bar></search-bar>
            </el-col>

        </el-row>

        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section" v-bind:style="{backgroundImage:bgImg1}">
                <DivideBar v-bind:part-title="'全部电影推荐'" v-bind:index-of-part="0" v-on:partindex="getindex"></DivideBar>
                <el-row>
                    <el-col :span="16" :offset="4">
                        <MovieCard v-bind:show-num="movieShow" v-bind:movie-items="getMovies(0)"></MovieCard>
                    </el-col>
                </el-row>
            </div>
            <div class="section" v-bind:style="{backgroundImage:bgImg2}">
                <div class="slide"  v-for="(item, index) in alltypes()" v-bind:key="index">
                    <DivideBar v-bind:part-title="item+'电影推荐'" v-bind:index-of-part="index+1"  v-on:partindex="getindex"></DivideBar>
                    <el-row>
                        <el-col :span="16" :offset="4">
                            <MovieCard v-bind:show-num="movieShow" v-bind:movie-items="getMovies(index+1)"></MovieCard>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </full-page>
    </div>
</template>

<script>
    // @ is an alias to /src
    import PageHeader from '../components/PageHeader.vue'
    import DivideBar from '../components/DivideBar'
    import MovieCard from '../components/MovieCard'
    import SearchBar from "../components/SearchBar"

    var testMovie = [{
        moviename: "测试电影名1",
        extrainfo: 1,
        movieId: "test1",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名2",
        extrainfo: 1,
        movieId: "test2",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名3",
        extrainfo: 1,
        movieId: "test3",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名4",
        extrainfo: 1,
        movieId: "test4",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名5",
        extrainfo: 1,
        movieId: "test5",
        movieimgurl: "/static/cover/default_cover.png"
    },{
        moviename: "测试电影名6",
        extrainfo: 1,
        movieId: "test6",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名7",
        extrainfo: 1,
        movieId: "test7",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名8",
        extrainfo: 1,
        movieId: "test8",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名9",
        extrainfo: 1,
        movieId: "test9",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名10",
        extrainfo: 1,
        movieId: "test10",
        movieimgurl: "/static/cover/default_cover.png"
    },{
        moviename: "测试电影名11",
        extrainfo: 1,
        movieId: "test11",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名12",
        extrainfo: 1,
        movieId: "test12",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名13",
        extrainfo: 1,
        movieId: "test13",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名14",
        extrainfo: 1,
        movieId: "test14",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名15",
        extrainfo: 1,
        movieId: "test15",
        movieimgurl: "/static/cover/default_cover.png"
    },{
        moviename: "测试电影名16",
        extrainfo: 1,
        movieId: "test16",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名17",
        extrainfo: 1,
        movieId: "test17",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名18",
        extrainfo: 1,
        movieId: "test18",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名19",
        extrainfo: 1,
        movieId: "test19",
        movieimgurl: "/static/cover/default_cover.png"
    }, {
        moviename: "测试电影名20",
        extrainfo: 1,
        movieId: "test20",
        movieimgurl: "/static/cover/default_cover.png"
    }];

    var movietypes = [['动画类','犯罪类','恐怖类','科幻类'],['惊悚类','爱情类','动作类','西部类'],['音乐类','灾难类','喜剧类','剧情类']];
    var allMovieKey = ['alltypemovie','动画','犯罪','恐怖','科幻','惊悚','爱情','动作','西部','音乐','灾难','喜剧','剧情'];
    //var allIndex = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    export default {
        name: 'home',
        data() {
            return {
                options: {
                    licenseKey: null,
                    afterLoad: this.afterLoad,
                    scrollOverflow: true,
                    scrollBar: false,
                    menu: '#menu',
                    controlArrows: false,
                    navigation: true,
                    anchors: ['index', 'index2'],
                    slidesNavigation:true,
                },
                bgImg1: 'url(' + require('../assets/Movie_Background1.png') + ')',
                bgImg2: 'url(' + require('../assets/Movie_Background3.png') + ')',
                testInfo: testMovie,
                movieShow: 5,
                movieTypes: movietypes,
                allMovieData:[testMovie,testMovie,testMovie,testMovie,testMovie,testMovie,testMovie,testMovie,testMovie,testMovie,testMovie,testMovie,testMovie],
                allIndex : [0,0,0,0,0,0,0,0,0,0,0,0,0],
            }
        },
        components: {
            SearchBar,
            DivideBar,
            PageHeader,
            MovieCard
        },
        created: function () {
            window.console.log("!1");
            //todo: 向后台发请求
            this.getRecomData();
        },
        computed: {
            getMovies () {
                window.console.log("recal");
                // window.console.log(partindex,this.allMovieData[partindex]);
                return function(data) {
                    let tmp = this.allIndex[data];
                    // window.console.log(this.allMovieData[data].slice(tmp, tmp+5));
                    return this.allMovieData[data].slice(tmp, tmp+5)
                };
            }
        },
        methods: {
            afterLoad() {
                window.console.log('After load')
            },
            alltypes: function () {
                return movietypes.flat();
            },
            toPos: function (pos) {
                this.$refs.fullpage.api.moveTo(pos.param1, pos.param2);
            },
            getRecomData: function () {
                let url = "http://localhost:8000/recom/";
                this.$axios.get(url,{}).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        for (let i = 0; i < allMovieKey.length ; i++) {
                            //this.allMovieData[i-1] = res.data.data[allMovieKey[i-1]];
                            if (res.data.data[allMovieKey[i]].length !== 0) {
                                this.$set(this.allMovieData, i, res.data.data[allMovieKey[i]])
                            } else {
                                window.console.log(i,"null")
                            }
                            //this.allMovieData.push(res.data.data[allMovieKey[i-1]])
                        }
                    }
                })
            },
            changeBat: function (index) {
                let tmp = this.allIndex[index];
                this.$set(this.allIndex, index, (tmp+5)%20);
                // this.allIndex[index] += 5;
                // this.allIndex[index] %= 20;
            },
            getindex: function (index) {
                window.console.log("outter",index);
                this.changeBat(index);
                window.console.log(this.allIndex)
            },

        }
    }
</script>

<style scoped>
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        font-size: 100%;
        margin: 0;
        padding: 0;
    }

    h3{
        font-size: 5em;
        text-align: center;
        color: #fff;
        font-weight: bold;
    }

    /* Actions buttons
 * --------------------------------------- */
    .actions{
        position: fixed;
        bottom: 2%;
        margin: 0 auto;
        z-index: 99;
        left: 0;
        right: 0;
        text-align: center;
    }
    .actions li{
        display: inline-block;
        margin: 0.3em 0.3em;
    }
    .actions-button{
        padding: 0.73em 1.47em;
        background: rgba(53, 73, 94, 0.47);
        border-radius: 5px;
        display: block;
        color: #fff;
        cursor: pointer;
    }


</style>

<style>
    @import "../assets/css/fullpage.min.css";

    /* Reset CSS
     * --------------------------------------- */
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre,
    form, fieldset, input, textarea, p, blockquote, th, td {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    table {
        border-spacing: 0;
    }

    fieldset, img {
        border: 0;
    }

    address, caption, cite, code, dfn, em, strong, th, var {
        font-weight: normal;
        font-style: normal;
    }

    strong {
        font-weight: bold;
    }

    ol, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    caption, th {
        text-align: left;

    }

    q:before, q:after {
        content: '';
    }

    abbr, acronym {
        border: 0;
    }

    * {
        -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
        -moz-box-sizing: border-box; /* <=28 */
        box-sizing: border-box;
    }

    /* Custom
     * --------------------------------------- */
    body {
        font-family: arial, helvetica;
    }

    .section {
        position: relative;
        text-align: center;
    }

    #section-1 h2 {
        color: #fff;
        font-size: 10em;
        font-weight: 900;
    }

    #section-1 h1 {
        font-size: 2em;
        font-weight: 100;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        margin: 1.5em auto 1em auto;
        color: #35495e;
        padding-right: 30px;
        padding-left: 30px;
    }

    #section-1 li {
        display: inline-block;
        margin: 1.25em 0.3em;
    }

    .section-1-button {
        padding: 0.93em 1.87em;
        background: #35495e;
        border-radius: 5px;
        display: block;
        color: #fff;
    }

    #logo{
        position: fixed;
        top: 20px;
        left: 20px;
        color: #fff;
        font-weight: bold;
        z-index: 99;
        font-size: 1.9em;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
    }

    .PageHeaderBar {
        position: fixed;
        width: 100%;
        z-index: 1;
    }

    /*a {*/
        /*color: #42b983;*/
    /*}*/

    .section {
        background-size: cover;
    }
</style>
