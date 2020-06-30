<template>
    <div class="UserSpaceMenuField">
        <el-row class="UserHeader">
            <el-col v-bind:span="18" v-bind:offset="3" v-bind:style="{height:hei,paddingTop:pdtop}">
                <el-row class="myheader" type="flex" align="bottom" style="height: 100%" v-bind:style="{backgroundImage:bg1,backgroundSize:size1}">
                    <el-row v-bind:gutter="10" style="width: 100%">
                        <el-col :span="2" :offset="0">
                            <el-avatar :size="50" :src="circleUrl"></el-avatar>
                        </el-col>
                        <el-col :span="6" align="middle">
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
        <!--<el-row>-->
            <!--<el-col v-bind:span="18" v-bind:offset="3">-->
                <!--<el-row type="flex" justify="start">-->
                    <!--<el-tabs class="tabs" v-model="activeName" @tab-click="handleClick" style="width: 100%">-->
                        <!--<el-tab-pane v-for="operation in operations" :label="operation.label" :name="operation.name" v-bind:key="operation.label">-->
                            <!--&lt;!&ndash;<router-view v-bind:name="operation.url"/>&ndash;&gt;-->
                        <!--</el-tab-pane>-->
                    <!--</el-tabs>-->
                <!--</el-row>-->
            <!--</el-col>-->
        <!--</el-row>-->
    </div>
</template>

<script>
    export default {
        name: "UserSpaceMenuField",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                hei:'300px',
                bg1:'url('+require('../assets/Movie_Background4.png')+')',
                size1:'cover',
                itemlabel:'LV1',
                itemtype:'',
                operations:[
                    {icon:'',label:'时间线',name:'first',url:'timeline'},
                    {icon:'',label:'浏览记录',name:'second',url:'historyrecord'},
                    {icon:'',label:'收藏',name:'third',url:'keep'},
                    {icon:'',label:'评价记录',name:'fourth',url:'command'},
                ],
                activeName: 'first'
            }
        },
        props:['pdtop','userId'],
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

    /*.tabs >>> .el-tabs__header {*/
        /*background-color: white;*/
        /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)*/
    /*}*/

    /*.tabs >>> .el-tabs__content {*/
        /*background-color: white;*/
        /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)*/
    /*}*/

    /*.myheader {*/
        /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)*/
    /*}*/
</style>