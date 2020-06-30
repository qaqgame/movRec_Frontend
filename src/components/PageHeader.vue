<template>
    <div class="PageHeader">
        <el-row>
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
                        <el-menu-item class="MoveTypeTitle" index="4"><a href="/#/index">全部电影推荐</a></el-menu-item>
                        <el-submenu class="MoveTypeTitle" index="5">
                            <template slot="title">各类型电影推荐</template>
                            <div v-for="(items,index) in movieTypes" v-bind:key="2-index">
                                <el-menu-item v-for="(item,index1) in items"  v-bind:key="2-index-index1" :index="item">{{item}}</el-menu-item>
                            </div>
                        </el-submenu>
                        <el-submenu class="Personal" index="7">
                            <template slot="title"><el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar></template>
                            <el-menu-item index="2-1">等级</el-menu-item>
                            <el-menu-item index="2-2">消息</el-menu-item>
                            <el-menu-item index="2-3">收藏</el-menu-item>
                            <el-menu-item index="2-4">时间线</el-menu-item>
                        </el-submenu>
                        <div style="clear: both"></div>
                    </el-menu>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                selfstyle:{
                    background: "none !important"
                }
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                window.console.log(key, keyPath);
            },
            addEmptyLine: function (f) {
                f.innerHTML = `<br/>`+f.innerHTML
            }
        },
        props: {
            movieTypes: Array,
        }
    }
</script>

<style scoped>
    h1 {
        margin: 0;
        float: left;
        font-size: 2em;
        font-weight: 400;
        padding: 10px;
    }
    a {
        color: #409eff;
        text-decoration: none;
    }
    .el-menu {
        background: none;
    }

    .el-menu:hover {
        background: none!important;
    }

    .el-menu-item {
        background: none !important;
        font-size: larger;
    }

    .el-menu-item:hover {
        background: none!important;
    }

    .el-menu-item:focus {
        background: none !important;
    }

    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }
    .Personal {
        float: right;
    }

    .MoveTypeTitle {
        font-size: medium;
    }
</style>