<template>
    <div class="PageHeader">
        <el-row v-bind:class="{scroll_bg:bgVisible}">
            <div>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo MenuBar"
                            mode="horizontal"
                            @select="handleSelect"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item>Logo</el-menu-item>
                        <el-menu-item index="2" @click="toHref('/showmovie')">片库</el-menu-item>
                        <el-menu-item></el-menu-item>
                        <el-menu-item data-menuanchor="index" class="MoveTypeTitle" index="4" @click="toIndex(1,0)">全部电影推荐
                        </el-menu-item>
                        <el-submenu data-menuanchor="index2" class="MoveTypeTitle" index="5" v-show="visible">
                            <template slot="title">各类型电影推荐</template>
                            <div v-for="(items,index) in movieTypes" v-bind:key="2-index">
                                <el-menu-item v-for="(item,index1) in items" v-bind:key="2-index-index1" :index="item"
                                              @click="toIndex(2,index*4+index1)">{{item}}
                                </el-menu-item>
                            </div>
                        </el-submenu>
                        <el-submenu class="Personal" v-bind:class="{scroll_bg:bgVisible}"  index="7">
                            <template slot="title">
                                <el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar>
                            </template>
                            <el-menu-item v-bind:class="{scroll_bg:bgVisible}" index="2-1" @click="toHref(link)">{{username}}</el-menu-item>
                            <el-menu-item v-bind:class="{scroll_bg:bgVisible}" index="2-2" @click="logout()">登出</el-menu-item>
                        </el-submenu>
                        <div style="clear: both"></div>
                    </el-menu>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    var movietypes = [['动画类', '犯罪类', '恐怖类', '科幻类'], ['惊悚类', '爱情类', '动作类', '西部类'], ['音乐类', '灾难类', '喜剧类', '剧情类']];
    export default {
        name: "PageHeader",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                selfstyle: {
                    background: "none !important"
                },
                movieTypes: movietypes,
                username:'前往登录',
                link:'/',
                // bgVisible: false //顶栏背景设置（透明或特定颜色）
            };
        },
        created() {
            this.getLoginInfo();
        },
        methods: {
            handleSelect(key, keyPath) {
                window.console.log(key, keyPath);
            },
            getLoginInfo() {
                this.$axios.get("http://127.0.0.1:8000/loginVerify/",{}).then(res => {
                    window.console.log(res);
                    if (res.data.result === "success") {
                        this.username = res.data.data.user;
                        this.link = res.data.data.link;
                    }
                })
            },
            toIndex(index1, index2) {
                window.console.log(index1, index2);
                let pos = {
                    "param1": index1,
                    "param2": index2
                };
                this.$emit('getpos', pos);
                this.$router.push({path:"/index"})
            },
            toHref(path1){
                this.$router.push({path:path1})
            },
            logout() {
                this.$axios.get("http://127.0.0.1:8000/logout",{}).then(res => {
                    window.console.log(res)
                    if (res.data.result === "success") {
                        this.$router.push({path:res.data.data.target});
                    }
                })
            }
        },
        props: ['visible','bgVisible']
    }
</script>

<style scoped>
    .scroll_bg {
        background-color: #35495e !important;
    }

    .Personal {
        float: right !important;
    }

    .MoveTypeTitle {
        font-size: medium;
    }

    h1 {
        margin: 0;
        float: left;
        font-size: 2em;
        font-weight: 400;
        padding: 10px;
    }


</style>

<style>

    a {
        color: white;
        text-decoration: none;
    }

    .el-menu {
        background: none;
        padding: 0;
        min-width: 0;
        margin-right: 20px;
    }

    .el-menu:hover {
        background: none !important;
    }

    .el-menu-item {
        background: none !important;
        font-size: larger;
        display: inline-block;
    }

    .el-menu-item:focus {
        background: none !important;
    }

    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }


    .el-submenu__title {
        background: none !important;
        font-size: medium;
    }

    .el-icon-arrow-down:before {
        color: white;
    }

    .el-menu--popup {
        background: none;
    }

    .el-menu--popup .el-menu-item {
        font-size: medium !important;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    /*li {*/
    /*display: inline-block;*/
    /*margin: 0 10px;*/
    /*}*/
</style>