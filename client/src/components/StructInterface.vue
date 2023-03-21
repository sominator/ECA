<template>
    <div class="structInterface">
        <table>
            <tr>
                <th>Roll</th>
                <th align="center">Outcome</th>
            </tr>
            <tr v-for="(value, key) in structData" v-bind:key="key">
                <td>{{key}}</td>
                <td style="border-left:3px solid">{{value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "StructInterface",
        props: {
            structData: Object
        }
    }
</script>

<style scoped>
    .structInterface {
        text-align: left;
        max-width: 70%;
        padding-left: 5px;
        padding-bottom: 5px;
        margin: 5px 5px 5px 5px;
    }
    table:hover {
        border-color: hotpink;
    }
    table{
        border: 3px solid cyan;
        border-collapse: collapse;
    }
    th{
        border-bottom: 3px solid cyan;
        border-right: 3px solid cyan;
        padding: 5px;
    }
    td{
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
    }
</style>