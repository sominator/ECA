<template>
    <div id="game">
        <div :id="containerId" v-show="downloaded" />
        <div class="placeholder" v-show="!downloaded">
            Downloading...
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Game',
        data: function () {
            return {
                downloaded: false,
                gameInstance: null,
                containerId: 'game-container'
            }
        },
        async mounted() {
            const game = await import('@/game/game');
            this.downloaded = true;
            this.$nextTick(() => {
                this.gameInstance = game.launch(this.containerId)
            })
        },
        destroyed() {
            this.gameInstance.destroy(false);
        }
    }
</script>

<style scoped>

</style>
