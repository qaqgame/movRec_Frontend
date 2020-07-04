<template>
    <div class="SearchRes" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
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
                    <el-col :span="3">
                        <h3>{{vle}}</h3>
                    </el-col>
                    <el-col>
                        <el-row type="flex" justify="start" style="flex-wrap: wrap">
                            <h3 v-for="(item,index1) in FilterContent[index]" v-bind:key="vle+(index1-1)" class="targetitem"
                                v-bind:class="{targetitem: isActive}" @click="chooseType(vle,index1-1)">{{item}}</h3>
                        </el-row>
                    </el-col>
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
                <div style="overflow-y: auto;display: flex; flex-wrap: wrap;justify-content: space-between">
                    <SingleMovieCard style=";width: 165px;margin-top: 20px" v-for="item in showingMovies"
                                     v-bind:movie-name="item.moviename"
                                     v-bind:movie-source="'http://127.0.0.1:8000'+item.movieimgurl"
                                     v-bind:movie-time="item.extroinfo"
                                     v-bind:key="item.movieId"></SingleMovieCard>
                </div>
            </el-col>
        </el-row>

        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
    </div>
</template>

<script>
    import PageHeader from "../components/PageHeader";
    import SingleMovieCard from "../components/SingleMovieCard";

    var types = ['类型', '地区'];
    var args = {"type":-1,"field":-1,"start":0};
    export default {
        name: "SearchRes",
        components: {PageHeader, SingleMovieCard},
        data() {
            return {
                src1: require("../assets/Movie_Background1.png"),
                movietypes: types,
                filtercontent: [],
                isActive: true,
                showingMovies: [],
                loading: false,
                num:0,
                filterType:[],
                filterArea:[],
                modelv:args,
                nomore: false,
            }
        },

        created() {
            this.getFilters();
        },
        computed: {
            noMore () {
                return this.nomore;
            },
            disabled () {
                return this.loading || this.noMore
            },
            FilterContent() {
                let tmp = [];
                tmp.push(this.filterType);
                tmp.push(this.filterArea);
                return tmp;
            }
        },
        methods: {
            load() {
                window.console.log(this.loading);
                if (!this.loading) {
                    this.loading = true;
                    this.immediateReq();
                }
                //this.loading = false
            },
            getFilters() {
                let url = "http://127.0.0.1:8000/showmovie/";
                this.$axios.get(url,{}).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        this.filterType = res.data.data.typeList;
                        this.filterArea = res.data.data.regionList;
                        this.filterType.unshift("全部");
                        this.filterArea.unshift("全部");
                    }
                })
            },
            chooseType(filter, index) {
                window.console.log(filter,index);
                if (filter === "类型") {
                    this.modelv.type = index
                } else if (filter === "地区") {
                    this.modelv.field = index
                }
                this.modelv.start=0;
                this.num = 0;
                this.nomore = false;
                this.showingMovies = [];
                //todo-立即发请求
                this.immediateReq();
            },
            immediateReq() {
                if (!this.loading) {
                    this.loading = true;
                }
                let url0 = "http://127.0.0.1:8000/showmovie/search?";
                let tmp = [];
                if (this.modelv.type !== -1) {
                    tmp.push("type="+this.modelv.type);
                }
                if (this.modelv.field !== -1) {
                    tmp.push("field="+this.modelv.field);
                }
                tmp.push("start="+this.modelv.start);
                let param = tmp.join("&");
                let url = url0+param;
                window.console.log(url);
                this.$axios.get(url,{}).then(res => {
                    if (res.data.result === "success") {
                        window.console.log(res.data);
                        for (let t = 0; t < res.data.data.allmovies.length; t++) {
                            this.showingMovies.push(res.data.data.allmovies[t]);
                            this.num += 1;
                        }
                        window.console.log(this.num);
                        this.modelv.start = this.num;
                    }  else {
                        window.console.log("no res");
                        this.nomore = true;
                    }
                    if (this.loading) {
                        this.loading = false;
                    }
                })
            }
        }
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
    .SearchRes {
        width: 100%;
        height: 100vh;
        position: absolute;
        top:0;
        overflow-y: auto;
    }

    .PageHeaderBar1 >>> .el-row {
        position: fixed;
        width: 100%;
        z-index: 1;
    }

    .targetitem {
        font-weight: 500;
        margin-left: 30px;
        padding-bottom: 5px;
        cursor: pointer;
    }
</style>