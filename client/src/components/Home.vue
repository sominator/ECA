<template>
    <div id="home">
        <h1>Entromancy Compendium <span>App</span></h1>
        <p id="contact">Feedback? Send us a message at <a href="mailto:info@entromancy.com">info@entromancy.com</a></p>
        <div id="sidebar">
            <button v-on:click="toggle = 'characters'" v-bind:class="{selected: toggle==='characters'}">Characters</button>
            <button v-on:click="toggle = 'lore'" v-bind:class="{selected: toggle==='lore'}">Lore</button>
            <button v-on:click="toggle = 'equipment'" v-bind:class="{selected: toggle==='equipment'}">Equipment</button>
            <button v-on:click="toggle = 'struct'" v-bind:class="{selected: toggle==='struct'}">Struct</button>
            <button v-on:click="toggle = 'hacker-battles'" v-bind:class="{selected: toggle==='hacker-battles'}">Hacker Battles</button>
        </div>
        <Characters v-show="toggle === 'characters'" />
        <Lore v-show="toggle === 'lore'" />
        <Equipment v-show="toggle === 'equipment'" />
        <Struct v-show="toggle === 'struct'" />
        <Hacking v-show="toggle === 'hacker-battles'" />
    </div>
</template>

<script>
    import Characters from "./Characters.vue";
    import Lore from "./Lore.vue";
    import Equipment from "./Equipment.vue";
    import Struct from "./Struct.vue";
    import Hacking from "./Hacking.vue";
    export default {
        name: 'Home',
        components: {
            Characters,
            Lore,
            Equipment,
            Struct,
            Hacking
        },
        data: function () {
            return {
                toggle: ""
            }
        }
    };
</script>

<style scoped>
    #sidebar {
        align-items: center;
        max-width: 7vw;
        display: flex;
        flex-direction: column;
        position: fixed;
    }
    #contact{
        font-size: 12px;
        text-align: center;
        margin-top: -5px;
    }
    button {
        width: 120px;
        height: 50px;
        margin-bottom: 10px;
        font-weight: normal;
        font-size: 16px;
    }

    @media(max-width: 1000px) {
        #sidebar{
            position: relative;
            flex-direction: row;
            max-width: 100vw;
            justify-content: center;
        }
    }
</style>

