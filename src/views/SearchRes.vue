<template>
    <div ref="Box" class="SearchRes" v-infinite-scroll="load" infinite-scroll-disabled="disabled"
         infinite-scroll-distance="100">
        <div class="PageHeaderBar1">
            <PageHeader style="z-index: 10;position: fixed" v-bind:visible="false"
                        v-bind:bg-visible="bgV" isible=""></PageHeader>
        </div>
        <img style="height: 200px;z-index: 0;width: 100%;left: 0" :src="src1"/>
        <div style="position: relative;bottom: 100px">
            <SearchBar v-bind:movie="searchMovieName"></SearchBar>
        </div>
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
                            <h3 v-for="(item,index1) in FilterContent[index]" v-bind:key="vle+(index1-1)"
                                class="targetitem"
                                v-bind:class="{targetitem: isActive, HighLight:ifTarget(item, index1, vle)}" @click="chooseType(vle,index1-1)">{{item}}</h3>
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
                                     v-bind:movie-source="'http://120.79.240.163:8000'+item.movieimgurl"
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
    import SearchBar from "../components/SearchBar";
    var types = ['类型', '地区'];
    var args = {"type": -1, "field": -1, "start": 0};
    export default {
        name: "SearchRes",
        components: {SearchBar, PageHeader, SingleMovieCard},
        data() {
            return {
                src1: require("../assets/Movie_Background1.png"),
                movietypes: types,
                isActive: true,
                showingMovies: [],      // 渲染电影
                loading: false,         // 判断是否正在请求中
                num: 0,                  // 已经渲染电影个数
                filterType: [],          // 类型可选项
                filterArea: [],          // 地区可选项
                modelv: args,            // 类型地区等选择结果
                nomore: false,          // 判断是否结束加载
                search: 0,               // 判断是否是搜索电影的要求
                searchMovieName: '',     // 搜索电影名
                searchStart: 0,          // 搜索结果起始
                bgV: false,               //顶栏背景,
                targetFilter: [{"name":"全部","index":0, "type":"类型"},{"name":"全部","index":0, "type":"地区"}]
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll, true)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll)
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                // 通过 `vm` 访问组件实例
                //window.console.log(to,from);
                window.console.log("res", vm.$route.query.search, vm.$route.query.moviename, vm.$route.query.start)
                if (vm.$route.query.search === undefined) {
                    vm.search = 0;
                } else {
                    vm.search = Number(vm.$route.query.search);
                }
                if (vm.$route.query.moviename === undefined) {
                    vm.searchMovieName = '';
                } else {
                    vm.searchMovieName = vm.$route.query.moviename;
                }
                if (vm.$route.query.start === undefined) {
                    vm.searchStart = 0;
                } else {
                    vm.searchStart = Number(vm.$route.query.start);
                }
                window.console.log(vm.search, vm.searchMovieName, vm.searchStart)
            })
        },

        beforeRouteUpdate (to, from, next) {
            window.console.log("route update", to, from);
            window.console.log(to.query.moviename);
            // 刷新参数内容
            if (to.query.search === undefined) {
                this.search = 0;
            } else {
                this.search = Number(to.query.search);
            }
            if (to.query.moviename === undefined) {
                this.searchMovieName = '';
            } else {
                this.searchMovieName = to.query.moviename;
            }
            if (to.query.start === undefined) {
                this.searchStart = 0;
            } else {
                this.searchStart = Number(to.query.start);
            }
            window.console.log(this.search,this.searchMovieName);
            // 重新加载
            if (this.search === 1) {
                this.resetCntField();
                this.load();
            }
            next();
        },

        created() {
            window.console.log("res1", this.$route.query.search, this.$route.query.moviename, this.$route.query.start)
            if (this.$route.query.search === undefined) {
                this.search = 0;
            } else {
                this.search = Number(this.$route.query.search);
            }
            if (this.$route.query.moviename === undefined) {
                this.searchMovieName = '';
            } else {
                this.searchMovieName = this.$route.query.moviename;
            }
            if (this.$route.query.start === undefined) {
                this.searchStart = 0;
            } else {
                this.searchStart = Number(this.$route.query.start);
            }
            this.getFilters();
        },
        computed: {
            noMore() {
                return this.nomore;
            },
            disabled() {
                return this.loading || this.noMore
            },
            FilterContent() {
                let tmp = [];
                tmp.push(this.filterType);
                tmp.push(this.filterArea);
                return tmp;
            },
            ifTarget() {
                return function (name, index, type) {
                    return this.targetFilter[0].type === type && this.targetFilter[0].index === index ||
                        this.targetFilter[1].type === type && this.targetFilter[1].index === index;
                }
            }
        },
        methods: {
            // 无限滚动load函数.
            load() {
                window.console.log("loading?:", this.loading, this.search === '1', this.search === 1, this.modelv.start);
                if (!this.loading) {
                    // if (this.search === 1) {
                    //     this.loading = true;
                    //     this.searchMovie();
                    // } else {
                    //     this.loading = true;
                    //     this.immediateReq();
                    // }
                    this.loading = true;
                    this.searchMov()
                }
                //this.loading = false
            },
            // 获取筛选的类型
            getFilters() {
                let url = "http://120.79.240.163:8000/showmovie/";
                this.$axios.get(url, {}).then(res => {
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
                if (!this.loading) {
                    this.loading = true;
                }
                if (filter === "类型") {
                    this.modelv.type = index;
                    this.targetFilter[0].index = index+1;
                } else if (filter === "地区") {
                    this.modelv.field = index;
                    this.targetFilter[1].index = index+1;
                }
                window.console.log(this.targetFilter)
                this.search = 0;
                this.resetCntField();
                //立即发请求
                this.searchMov();
            },
            // 获取电影的立即请求
            immediateReq() {
                if (!this.loading) {
                    this.loading = true;
                }
                let url0 = "http://120.79.240.163:8000/showmovie/search?";
                let tmp = [];
                if (this.modelv.type !== -1) {
                    tmp.push("type=" + this.modelv.type);
                }
                if (this.modelv.field !== -1) {
                    tmp.push("field=" + this.modelv.field);
                }
                tmp.push("start=" + this.modelv.start);
                let param = tmp.join("&");
                let url = url0 + param;
                window.console.log("immediateReq url:", url);
                this.$axios.get(url, {}).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        this.$router.push({
                            name: 'showmovie',
                            query: {type: this.modelv.type, field: this.modelv.field}
                        });
                        for (let t = 0; t < res.data.data.allmovies.length; t++) {
                            this.showingMovies.push(res.data.data.allmovies[t]);
                            this.num += 1;
                        }
                        window.console.log("num: ", this.num);
                        this.modelv.start = this.num;
                    } else {
                        window.console.log("no res");
                        this.nomore = true;
                    }
                    window.console.log("loading: ", this.loading);
                    window.console.log("nomore", this.nomore);
                    this.loading = false;
                })
            },
            // 搜索电影的请求
            searchMovie() {
                this.resetCntField();
                let url = "http://120.79.240.163:8000/showmovie/search?moviename=" + this.searchMovieName + "&start=" + this.searchStart;
                window.console.log("serach url:", url);
                this.$axios.get(url, {}).then(res => {
                    window.console.log("search movie: ", res);
                    if (res.data.data.allmovies.length < 20) {
                        this.nomore = true;
                    }
                    for (let t = 0; t < res.data.data.allmovies.length; t++) {
                        this.showingMovies.push(res.data.data.allmovies[t]);
                        this.num += 1;
                        this.searchStart += 1;
                    }
                    if (this.loading) {
                        this.loading = false;
                    }
                    // this.loading = false;
                })
            },
            // 重置内容
            resetCntField() {
                this.modelv.start = 0;
                this.num = 0;
                this.nomore = false;
                this.showingMovies = [];
                this.searchStart = 0;
            },
            searchMov() {
                //this.resetCntField();
                let params = [];
                let url0 = "http://120.79.240.163:8000/showmovie/search?";
                params.push("type=" + this.modelv.type);
                params.push("field=" + this.modelv.field);
                if (this.searchMovieName !== '') {
                    params.push("moviename=" + this.searchMovieName);
                }
                params.push("start=" + this.searchStart);
                let param = params.join("&");
                let url = url0 + param;
                window.console.log(url);
                this.$axios.get(url, {}).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        if (res.data.data.allmovies.length < 20) {
                            this.nomore = true;
                        }
                        for (let t = 0; t < res.data.data.allmovies.length; t++) {
                            this.showingMovies.push(res.data.data.allmovies[t]);
                            this.num += 1;
                            this.searchStart += 1;
                        }
                    } else {
                        this.nomore = true;
                    }

                    if (this.loading) {
                        this.loading = false;
                    }
                })
            },
            handleScroll() {
                // this.$mount();
                let scrollTop = this.$refs.Box.scrollTop
                // window.console.log(scrollTop)
                if (scrollTop >= 200) {
                    this.bgV = true
                } else {
                    this.bgV = false
                }
            }
        }
    }
</script>

<style>


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
    .el-row {
        margin-bottom: 20px;
    }

    .SearchRes {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
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

    .HighLight {
        color: #00A1D6;
    }
</style>