<template>
    <div class="SingleMovieCard">
        <el-card :body-style="{ padding: '0px' }" class="cardWidth">
            <img v-bind:src="movieSource" onerror="javascript:this.src = 'http://120.79.240.163:8000/static/cover/default_cover.png'" class="image cardHeight">
            <div style="padding: 14px;">
                <span class="movTitle">{{movieName}}</span>
                <div class="bottom clearfix">
                    <time class="time">{{ movieTime }}</time>
                    <el-button type="text" class="button" @click="toDetailInfo(movieId)">详细信息>>></el-button>
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
                src1:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                errorsource:"http://120.79.240.163:8000/static/cover/default_cover.png"
            };
        },
        props:['movieSource','movieName','movieTime','movieId'],
        methods: {
            toDetailInfo(name) {
                // let url = "http://120.79.240.163:8000/movie/"+name;
                window.console.log("p",name);
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

    .cardWidth {
        width: 170px;
    }

    .cardHeight {
        height: 240px
    }

    .movTitle {
        height: 17px;
        line-height: 17px;
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 142px;
        white-space: nowrap;
    }
</style>