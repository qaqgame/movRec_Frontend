<template>
    <div class="Users">
        <PageHeader></PageHeader>
        <UserSpaceMenuField pdtop="60px" v-bind:user-id="id"></UserSpaceMenuField>
    </div>
</template>

<script>
    import UserSpaceMenuField from '../components/UserSpaceMenuField'
    import PageHeader from '../components/PageHeader.vue'

    export default {
        name: "Users",
        props: ['id'],
        components:{UserSpaceMenuField,PageHeader},
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
    .Users {
        background-image: url("../assets/UserSpace_Background1.png");
        height: 100vh;
        background-size: cover;
    }
</style>