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
    span {
        color: hotpink;
    }
</style>

