<template>
    <div class="UserSpaceMenuField">
        <el-row class="UserHeader">
            <el-col v-bind:span="18" v-bind:offset="3" v-bind:style="{height:hei}">
                <el-row class="myheader" style="height: 100%;display: flex;flex-direction: column;justify-content: flex-end" v-bind:style="{backgroundImage:bg1,backgroundSize:size1}">
                    <el-row style="padding-bottom: 100px"><h2 style="text-align: right;padding-right: 50px">欢迎来到{{userId}}的个人空间</h2></el-row>
                    <el-row v-bind:gutter="10" style="width: 100%;padding-bottom: 15px">
                        <el-col :span="2" :offset="0">
                            <el-avatar :size="50" :src="circleUrl"></el-avatar>
                        </el-col>
                        <el-col :lg="{span:7,offset:0}" :md="{span:8,offset:0}" :sm="{span:10,offset:1}" :xs="{span:12, offset:2}" :span="6" align="middle">
                            <h2 class="alignLeft">{{userId}}
                                <el-tag
                                    :key="itemlabel"
                                    :type="itemtype"
                                    effect="dark">
                                {{ itemlabel }}
                            </el-tag></h2>
                            <el-progress class="alignLeft" :percentage="0"></el-progress>
                        </el-col>
                    </el-row>
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col v-bind:span="18" v-bind:offset="3">
                <el-row type="flex" justify="start">
                    <el-tabs class="tabs" v-model="activeName" style="width: 100%" @tab-click="handleClick">
                        <el-tab-pane v-bind:name="operations[0].name">
                            <span slot="label">
                                <i class="icon iconfont" v-bind:class="operations[0].iconclass"></i>
                                {{operations[0].label}}</span>
                            <TimeLine></TimeLine>
                        </el-tab-pane>
                        <el-tab-pane v-bind:name="operations[1].name">
                            <span slot="label">
                                <i class="icon iconfont" v-bind:class="operations[1].iconclass"></i>
                                {{operations[1].label}}</span>
                            <HistoryRecord></HistoryRecord>
                        </el-tab-pane>
                        <el-tab-pane v-bind:name="operations[2].name">
                            <span slot="label">
                                <i class="icon iconfont" v-bind:class="operations[2].iconclass"></i>
                                {{operations[2].label}}</span>
                            <Keep></Keep>
                        </el-tab-pane>
                        <el-tab-pane v-bind:name="operations[3].name">
                            <span slot="label">
                                <i class="icon iconfont" v-bind:class="operations[3].iconclass"></i>
                                {{operations[3].label}}</span>
                            <Command></Command>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import TimeLine from "./TimeLine";
    import HistoryRecord from "./HistoryRecord";
    import Keep from "./Keep";
    import Command from "./Command";

    export default {
        name: "UserSpaceMenuField",
        components: {Command, Keep, HistoryRecord, TimeLine},
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                hei:'240px',
                bg1:'url('+require('../assets/UserSpace_Background2.png')+')',
                size1:'cover',
                itemlabel:'LV1',
                itemtype:'',
                operations:[
                    {icon:'&#xe6c0;',label:'时间线',name:'first',url:'timeline', iconclass:'icon-timeline'},
                    {icon:'&#xe693;',label:'浏览记录',name:'second', iconclass:'icon-liulanjilu'},
                    {icon:'&#xe60d;',label:'收藏',name:'third',url:'keep',iconclass:'icon-collection-b'},
                    {icon:'&#xe65b;',label:'评价记录',name:'fourth',url:'command',iconclass:'icon-ico_home_appraise'},
                ],
                activeName: 'first'
            }
        },
        props:['userId'],
        methods: {
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%`;
            },
            handleClick(tab, event) {
                window.console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    .alignLeft {
        text-align: left!important;
    }
    h2 {
        color: white;
    }

    li {
        display: block!important;
    }
    .tabs >>> .el-tabs__header {
        height: 50px;
        line-height: 50px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        margin-top: 10px;
    }

    .tabs >>> .el-tabs__item {
        font-size: 16px;
    }

    .tabs >>> .el-tabs__content {
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }

    .myheader {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }

    .icon {
        font-size: 16px;
        padding-left: 5px;
    }
</style>