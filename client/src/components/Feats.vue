<template>
    <div id="feats">
        <Feat v-for="feat in featData" :featData="feat" />
    </div>
</template>

<script>
    import Feat from "./Feat.vue";

    export default {
        name: "Feats",
        components: {
            Feat
        },
        props: {
            featData: Object
        }
    }
</script>

<style scoped>
    #feats {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>