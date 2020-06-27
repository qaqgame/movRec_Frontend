<template>
    <div class="home">
        <div class="PageHeaderBar">
            <PageHeader></PageHeader>
        </div>

        <full-page :options="options" id="fullpage">
            <div class="section" v-bind:style="{backgroundImage:bgImg1}">
                <DivideBar part-title="全部电影推荐"></DivideBar>
                <el-row>
                    <el-col :span="16" :offset="4">
                        <MovieCard v-bind:show-num="movieShow" v-bind:movie="testInfo"></MovieCard>
                    </el-col>
                </el-row>

            </div>
            <div class="section" v-bind:style="{backgroundImage:bgImg2}">
                <div class="slide">
                    <h3>Slide 2.1</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.2</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.3</h3>
                </div>
            </div>
            <div class="section" v-bind:style="{backgroundImage:bgImg3}">
                <h3>Section 3</h3>
            </div>
        </full-page>
    </div>
</template>

<script>
    // @ is an alias to /src
    import PageHeader from '../components/PageHeader.vue'
    import DivideBar from '../components/DivideBar'
    import MovieCard from '../components/MovieCard'

    var testMovie= [{
        name:"测试电影名1",
        time:"测试日期"
    },{
        name:"测试电影名2",
        time:"测试日期"
    },{
        name:"测试电影名3",
        time:"测试日期"
    },{
        name:"测试电影名4",
        time:"测试日期"
    },{
        name:"测试电影名5",
        time:"测试日期"
    }];

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
                    controlArrows: true,
                    navigation: true,
                    anchors: ['index#page1', 'index#page2', 'index#page3'],
                },
                bgImg1:'url('+require('../assets/Movie_Background1.png')+')',
                bgImg2:'url('+require('../assets/Movie_Background2.png')+')',
                bgImg3:'url('+require('../assets/Movie_Background3.png')+')',
                testInfo: testMovie,
                movieShow:5,
            }
        },
        components: {
            DivideBar,
            PageHeader,
            MovieCard
        },
        created: function () {
            window.console.log("!1")
            // actions here
        },
        methods: {
            afterLoad () {
                window.console.log('After load')
            },
        }
    }
</script>

<style>
    @import "../assets/css/fullpage.min.css";
    /* Reset CSS
     * --------------------------------------- */
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
    form,fieldset,input,textarea,p,blockquote,th,td {
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration:none;
    }
    table {
        border-spacing: 0;
    }
    fieldset,img {
        border: 0;
    }
    address,caption,cite,code,dfn,em,strong,th,var {
        font-weight: normal;
        font-style: normal;
    }
    strong{
        font-weight: bold;
    }
    ol,ul {
        list-style: none;
        margin:0;
        padding:0;
    }
    caption,th {
        text-align: left;

    }
    h1,h2,h3,h4,h5,h6 {
        font-weight: normal;
        font-size: 100%;
        margin:0;
        padding:0;
    }
    q:before,q:after {
        content:'';
    }
    abbr,acronym { border: 0;
    }
    *{
        -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
        -moz-box-sizing: border-box; /* <=28 */
        box-sizing: border-box;
    }

    /* Custom
     * --------------------------------------- */
    body {
        font-family: arial, helvetica;
    }
    .section{
        position: relative;
        text-align: center;
    }
    #section-1 h2{
        color: #fff;
        font-size: 10em;
        font-weight: 900;
    }
    #section-1 h1{
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
    .section-1-button{
        padding: 0.93em 1.87em;
        background: #35495e;
        border-radius: 5px;
        display: block;
        color: #fff;
    }
    h3{
        font-size: 5em;
        text-align: center;
        color: #fff;
        font-weight: bold;
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

    .el-submenu__title {
        background: none!important;
        font-size: medium;
    }

    .el-icon-arrow-down:before {
        color:white;
    }

    .el-menu--popup {
        background: none;
    }

    .el-menu--popup .el-menu-item {
        font-size: medium!important;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }

    .section {
        background-size: cover;
    }
</style>
