<template>
    <div class="HistoryRecord">
        <div style="display: flex; flex-wrap: wrap; height: 500px; overflow: auto; overflow-scrolling: auto">
            <SingleMovieCard style="margin-left: 20px;width: 165px;margin-top: 20px" v-for="item in histories" v-bind:movie-name="item.movieName"
                             v-bind:movie-source="item.movieSource"
                             v-bind:movie-time="item.movieTime" v-bind:key="item.movieName"></SingleMovieCard>
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
        }
    }
</script>

<style scoped>

</style>