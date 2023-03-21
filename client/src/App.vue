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
    button {
        background-color: cyan;
        border-radius: 10px;
        border: 0px;
        width: 100px;
        height: 35px;
        margin-right: 5px;
        font-weight: bold;
        outline: none;
        font-family: 'Trebuchet MS';
    }
    button:hover {
        cursor: pointer;
        background-color: hotpink;
    }
    span {
        color: hotpink;
    }
    a {
        color: hotpink;
    }
    .selected {
        background: hotpink;
    }
    @media(max-width: 1000px) {
        button {
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>

