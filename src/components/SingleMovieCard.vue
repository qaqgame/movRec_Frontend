<template>
    <div class="SingleMovieCard">
        <el-card :body-style="{ padding: '0px' }">
            <img v-bind:src="movieSource.toString()===''?src1 : movieSource" class="image">
            <div style="padding: 14px;">
                <span>{{movieName}}</span>
                <div class="bottom clearfix">
                    <time class="time">{{ movieTime }}</time>
                    <el-button type="text" class="button">详细信息>>></el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "SingleMovieCard",
        data() {
            return {
                currentDate: new Date(),
                src1:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            };
        },
        props:['movieSource','movieName','movieTime']
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