<template>
    <div>
        <div id="character">
            <p>Class Name: {{characterData.name}}</p>
            <p>Class Skills: {{characterData.skills}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Character",
        props: {
            characterData: Object
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
</style>