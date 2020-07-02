<template>
    <div class="DivideBar">
        <el-row :gutter="5">
            <el-col class="mywhite" :span="4" :offset="2">
                <h3>{{PartTitle}}</h3>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col class="mywhite" :span="4">
                <div>
                    <h3><i class="el-icon-refresh"></i>换一批</h3>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "DivideBar",
        props:["PartTitle"]
    }
</script>

<style scoped>
    .el-col h3 {
        font-size: x-large;
        height: 36px;
        line-height: 36px;
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

    .mywhite >>> h3 {
        color: white;
    }
</style>