<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        },
        data: function () {
            return {

            }
        }
    };
</script>

<style>
    body {
        background-color: black;
        color: cyan;
        font-family: 'Trebuchet MS';
        text-align: center;
    }
</style>

