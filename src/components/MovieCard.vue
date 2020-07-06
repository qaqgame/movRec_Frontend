<template>
    <div class="MovieCard">
        <el-row>
            <el-col :span="4" v-for="(o,index) in showNum" :key="movieItems[index].movieId" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img v-bind:src="'http://127.0.0.1:8000'+movieItems[index].movieimgurl" class="image">
                    <div style="padding: 14px;">
                        <span>{{movieItems[index].moviename}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ movieItems[index].extrainfo }}</time>
                            <el-button type="text" class="button" @click="toDetailInfo(movieItems[index].moviename)">详细信息>>></el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "MovieCard",
        data: function () {
            return {
                currentDate: new Date()
            };
        },
        props:['movieItems','showNum'],
        methods: {
            toDetailInfo(name) {
                // let url = "http://127.0.0.1:8000/movie/"+name;
                this.$router.push({name:'moviedetail', params:{name}})
            }
        }
    }
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>