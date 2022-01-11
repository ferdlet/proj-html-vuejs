<template>
    <section id="ham-menu">
        <div class="close-btn" v-on:click="dataShared.hamMenuOpen = false">
            <i class="fas fa-times"></i>
        </div>
    </section>
</template>

<script>
import dataShared from '../../sharing/dataShared';

export default {
    name: 'Menu',
    data() {
        return {
            dataShared,
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';


    #ham-menu {
        width: 100%;
        height: 100vh;
        background-color: $mandy;
        position: fixed;
        top: 0;
        left: 0;
        .close-btn {
            color: $white;
            font-size: 3rem;
        }
    }
</style>