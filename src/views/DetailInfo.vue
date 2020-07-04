<template>
    <div class="DetailInfo">
        <img style="position: absolute;height: 360px;z-index: 0;width: 100%;left: 0" :src="src1"/>
        <PageHeader style="z-index: 10;" class="myHeader"></PageHeader>
        <MovieDetailHeader v-bind:movie-name="name"></MovieDetailHeader>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="18" :offset="3">
                <el-row type="flex" justify="start" align="top">
                    <h2>简介：</h2>
                </el-row>
                <el-row type="flex" justify="start" align="top">
                    <p>这是简介内容</p>
                </el-row>
            </el-col>
        </el-row>
<!--        <el-row>-->
<!--            <el-col :span="18" :offset="3">-->
<!--                <el-row type="flex" justify="start">-->
<!--                    &lt;!&ndash;todo:已收藏的显示已收藏，根据数据来动态改变&ndash;&gt;-->
<!--                    <el-button class="button-ops" type="primary" icon="el-icon-star-off">收藏</el-button>-->
<!--                    <el-button class="button-ops" @click="dialogFormVisible = true" type="primary" icon="el-icon-edit">评论</el-button>-->
<!--                </el-row>-->
<!--            </el-col>-->
<!--        </el-row>-->
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <!--todo:评论？？？-->
        <el-dialog title="我来评论" :visible.sync="dialogFormVisible">
            <el-row style="display: flex; flex-direction: row;flex-wrap: nowrap; height: 150px">
                <el-row style="height: 150px">
                    <el-image class="movieImg1" :src="src"></el-image>
                </el-row>
                <el-row style="display: flex; flex-direction: column; justify-content: space-around; height: 150px;margin-left: 30px">
                    <div>
                        <h2 class="comment-title" style="text-align: left">11111111</h2>
                    </div>
                    <div>
                        <el-row type="flex" justify="start" align="middle">
                            <h2>评分：</h2>
                            <el-rate
                                    v-model="value2"
                                    :colors="colors">
                            </el-rate>
                        </el-row>
                    </div>
                </el-row>
            </el-row>
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
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
                colors: ['#99A9BF', '#F7BA2A', '#FF9900']
            }
        },
    }
</script>

<style scoped>
    .PageHeaderBar {
        position: fixed;
        width: 100%;
        z-index: 1;
    }
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