<template>
    <div class="MovieDetailHeader">
        <el-row>
            <el-col v-bind:span="18" :offset="3" v-bind:style="{height:hei}" style="display: flex; flex-direction: column; justify-content: center">
                <el-row type="flex" align="middle" style="width: 100%;height: 200px">
                    <el-col :span="6">
                        <el-image class="movieImg" :src="src"></el-image>
                    </el-col>
                    <el-col :span="9" :offset="1" class="movieInfo">
                        <el-row>
                            <h2>{{movieName}}</h2>
                        </el-row>
                        <el-row>
                            <h3>时间</h3>
                        </el-row>
                        <el-row>
                            <h3>地区</h3>
                        </el-row>
                        <el-row>
                            <h3>类型</h3>
                        </el-row>
                        <el-row>
                            <h3>导演</h3>
                        </el-row>
                        <el-row>
                            <h3>演员</h3>
                        </el-row>
                        <el-row>
                            <h3>时长</h3>
                        </el-row>
                    </el-col>
                    <el-col style="height: 100%" :span="9">
                        <el-row type="flex" align="top" style="height: 100%; width: 100%">
                            <el-col class="movieInfo">
                                <el-row>
                                    <h3>评分：<el-rate style="display: inline-block"
                                                   v-model="value"
                                                   disabled
                                                   show-score
                                                   text-color="#ff9900"
                                                   score-template="{value}">
                                            </el-rate>
                                    </h3>
                                </el-row>
                                <el-row style="margin-top: 20px">
                                    <h3>语言</h3>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-col>


                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "MovieDetailHeader",
        data() {
            return {
                hei: '300px',
                src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                value:4.1
            }
        },
        props:['movieName']
    }
</script>

<style scoped>
    .movieImg >>> .el-image__inner {
        height: 200px;
        width: auto;
    }

    .movieInfo >>> h2 {
        color: white;
        text-align: left;
        font-size: 40px;
    }

    .movieInfo >>> h3 {
        color: white;
        text-align: left;
    }
</style>