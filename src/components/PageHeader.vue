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
                        <el-menu-item index="1">Logo</el-menu-item>
                        <el-menu-item index="2"><a>片库</a></el-menu-item>
                        <el-menu-item index="3"></el-menu-item>
                        <el-menu-item data-menuanchor="index" class="MoveTypeTitle" index="4"><a href="#/index"
                                                                                                 @click="toIndex(1,0)">全部电影推荐</a>
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
                            <el-menu-item v-bind:class="{scroll_bg:bgVisible}" index="2-1">等级</el-menu-item>
                            <el-menu-item v-bind:class="{scroll_bg:bgVisible}" index="2-2">消息</el-menu-item>
                            <el-menu-item v-bind:class="{scroll_bg:bgVisible}" index="2-3">收藏</el-menu-item>
                            <el-menu-item v-bind:class="{scroll_bg:bgVisible}" index="2-4">时间线</el-menu-item>
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
                // bgVisible: false //顶栏背景设置（透明或特定颜色）
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                window.console.log(key, keyPath);
            },
            addEmptyLine: function (f) {
                f.innerHTML = `<br/>` + f.innerHTML
            },
            alltype() {
                return movietypes.flat()
            },
            heightInfo() {
                return document.getElementsByClassName("PageHeader")[0].style.height.toString() + 'px';
            },
            toIndex(index1, index2) {
                window.console.log(index1, index2);
                let pos = {
                    "param1": index1,
                    "param2": index2
                };
                this.$emit('getpos', pos);
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
        color: #409eff;
        text-decoration: none;
    }

    .el-menu {
        background: none;
    }

    .el-menu:hover {
        background: none !important;
    }

    .el-menu-item {
        background: none !important;
        font-size: larger;
        display: inline-block;
    }

    .el-menu-item:hover {
        /*background: none !important;*/
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