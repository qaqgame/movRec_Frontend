<template>
    <div class="DetailInfo">
        <img style="position: absolute;height: 360px;z-index: 0;width: 100%;left: 0" :src="src1"/>
        <PageHeader style="z-index: 10;" class="myHeader" v-bind:visible="false"></PageHeader>
        <MovieDetailHeader v-bind:movie-name="name" v-bind:movie-data="movieDetailInfo"></MovieDetailHeader>
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
    </div>
</template>

<script>
    import PageHeader from "../components/PageHeader";
    import MovieDetailHeader from "../components/MovieDetailHeader";

    export default {
        name: "DetailInfo",
        components: {MovieDetailHeader, PageHeader},
        props:['name'],
        data() {
            return {
                src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                src1:require("../assets/UserSpace_Background2.png"),
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
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                movieDetailInfo:null,
            }
        },
        created() {
            //获取数据
            this.fetchData(this.name)
        },
        methods:{
            fetchData(mn) {
                window.console.log("get");
                let url = "http://127.0.0.1:8000/movie/"+mn;
                window.console.log(url);
                this.$axios.get(url,{}).then(res => {
                    window.console.log(res);
                    this.setData(res.data.data);
                })
            },
            setData(data) {
                this.movieDetailInfo = data.movieinfo;
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