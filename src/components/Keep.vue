<template>
    <div class="Keep">
        <div style="">
            <div style="display: flex; flex-wrap: wrap; width: 90%;margin: 10px auto;height: 480px;overflow: auto; overflow-scrolling: auto">
                <SingleMovieCard style="margin-left: 20px;width: 165px;margin-top: 20px" v-for="item in keepData" v-bind:movie-name="item.moviename"
                                 v-bind:movie-source="'http://127.0.0.1:8000'+item.movieimgurl"
                                 v-bind:movie-time="item.extrainfo" v-bind:key="item.moviename"></SingleMovieCard>
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
        props:['keepData']
    }
</script>

<style scoped>

</style>