<template>
    <div>
        <div id="character" v-on:mouseover="hover = true" v-on:mouseleave="hover = false">
            <h3>{{characterData.name}}</h3>
            <p v-if ="hover">{{characterData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Character",
        props: {
            characterData: Object
        },
        data: function () {
            return {
                hover: false
            }  
        }
    }
</script>

<style scoped>
    #character {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    #character:hover {
        border-color: hotpink;
        color: hotpink;
        cursor: pointer;
    }
    h3 {
        text-align: center
    }
</style>