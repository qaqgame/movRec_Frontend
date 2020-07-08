<template>
    <div class="HistoryRecord">
        <div style="">
            <div style="display: flex; flex-wrap: wrap; width: 90%;margin: 10px auto;height: 480px;overflow: auto; overflow-scrolling: auto">
                <SingleMovieCard style="margin-left: 20px;width: 165px;margin-top: 20px" v-for="item in historyRecord" v-bind:movie-name="item.moviename"
                                 v-bind:movie-source="'http://127.0.0.1:8000'+item.movieimgurl"
                                 v-bind:movie-time="getTime(item.extrainfo)" v-bind:key="item.movieName"></SingleMovieCard>
            </div>
        </div>
    </div>
</template>

<script>
    import SingleMovieCard from "./SingleMovieCard";
    export default {
        name: "HistoryRecord",
        components: {SingleMovieCard},
        data() {
            return {
                histories:[
                    {movieName:'test1', movieSource:'', movieTime:'test time'},
                    {movieName:'test2', movieSource:'', movieTime:'test time'},
                    {movieName:'test3', movieSource:'', movieTime:'test time'},
                    {movieName:'test4', movieSource:'', movieTime:'test time'},
                    {movieName:'test5', movieSource:'', movieTime:'test time'},
                    {movieName:'test6', movieSource:'', movieTime:'test time'},
                    {movieName:'test7', movieSource:'', movieTime:'test time'},
                    {movieName:'test8', movieSource:'', movieTime:'test time'},
                ]
            }
        },
        props:['historyRecord'],
        computed: {
            getTime() {
                return function (data) {
                    let tmp = data;
                    let ts = tmp.split("T");
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