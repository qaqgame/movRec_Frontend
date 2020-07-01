<template>
    <div class="SearchRes">
        <div class="PageHeaderBar1">
            <PageHeader style="z-index: 10;position: fixed"></PageHeader>
        </div>
        <img style="height: 200px;z-index: 0;width: 100%;left: 0" :src="src1"/>
        <el-row>
            <el-col v-bind:span="16" :offset="4">
                <el-row type="flex" justify="start"><h2 class="fliterTitle">筛选</h2></el-row>
                <el-row>
                    <el-col :span="24" class="divider1">
                        <div class="grid-content bg-purple" style="min-height: 5px"></div>
                    </el-col>
                </el-row>
                <el-row v-for="(vle,index) in movietypes" v-bind:key="vle" type="flex" justify="start">
                    <h3>{{vle}}</h3>
                    <h3 v-for="item in filtercontent[index]" v-bind:key="item" class="targetitem"
                        v-bind:class="{targetitem: isActive}">{{item}}</h3>
                </el-row>
                <el-row>
                    <el-col :span="24" class="divider1">
                        <div class="grid-content bg-purple" style="min-height: 5px"></div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col v-bind:span="16" :offset="4">
                <div style="display: flex; flex-wrap: wrap;">
                    <SingleMovieCard style="margin-left: 20px;width: 165px;margin-top: 20px" v-for="item in movies" v-bind:movie-name="item.movieName"
                                     v-bind:movie-source="item.movieSource"
                                     v-bind:movie-time="item.movieTime" v-bind:key="item.movieName"></SingleMovieCard>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import PageHeader from "../components/PageHeader";
    import SingleMovieCard from "../components/SingleMovieCard";

    var types = ['类型', '地区', '时间'];

    var filters = [['全部', '动作片', '科幻片'],['全部','中国','日本','欧美'],['全部','2020','2019']];

    export default {
        name: "SearchRes",
        components: {PageHeader,SingleMovieCard},
        data() {
            return {
                src1: require("../assets/Movie_Background1.png"),
                movietypes: types,
                filtercontent:filters,
                isActive: true,
                movies:[
                    {movieName:'test1', movieSource:'', movieTime:'test time'},
                    {movieName:'test2', movieSource:'', movieTime:'test time'},
                    {movieName:'test3', movieSource:'', movieTime:'test time'},
                    {movieName:'test4', movieSource:'', movieTime:'test time'},
                    {movieName:'test5', movieSource:'', movieTime:'test time'},
                    {movieName:'test6', movieSource:'', movieTime:'test time'},
                    {movieName:'test7', movieSource:'', movieTime:'test time'},
                    {movieName:'test8', movieSource:'', movieTime:'test time'},
                ]
            }
        },
    }
</script>

<style>
    .el-row {
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
</style>

<style scoped>
    .PageHeaderBar1 >>> .el-row {
        position: fixed;
        width: 100%;
        z-index: 1;
    }

    .targetitem {
        font-weight: 500;
        margin-left: 50px;
        cursor: pointer;
    }
</style>