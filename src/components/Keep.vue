<template>
    <div class="Keep">
        <div style="">
            <div style="display: flex; flex-wrap: wrap; width: 90%;margin: 10px auto;height: 480px;overflow: auto; overflow-scrolling: auto">
                <SingleMovieCard style="margin-left: 20px;width: 165px;margin-top: 20px" v-for="item in keepData" v-bind:movie-name="item.moviename"
                                 v-bind:movie-source="'http://120.79.240.163:8000'+item.movieimgurl"
                                 v-bind:movie-time="getTime(item.extrainfo)"
                                 v-bind:movie-id="item.movieid"
                                 v-bind:key="item.moviename"></SingleMovieCard>
            </div>
        </div>
    </div>
</template>

<script>
    import SingleMovieCard from "./SingleMovieCard";
    export default {
        name: "Keep",
        components: {SingleMovieCard},
        data() {
            return {

            }
        },
        props:['keepData'],
        computed:{
            getTime() {
                return function (data) {
                    let tmp = data;
                    let ts = tmp.split(" ");
                    let res = "";
                    res += ts[0];
                    res += " ";
                    res += ts[1].split(".")[0];
                    return res;
                }
            },
        }
    }
</script>

<style scoped>

</style>