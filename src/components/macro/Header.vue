<template>
    <header>
        <a href="#section-1">
            <img class="logo-img" src="../../assets/images/avada-music-logo.png" alt="Avada Music">
        </a>
        <div class="ham-btn" v-on:click="dataShared.hamMenuOpen = true">
            <i class="fas fa-bars"></i>
        </div>
        <Menu v-if="dataShared.hamMenuOpen"/>
    </header>
</template>

<script>
import Menu from '../sections/Menu.vue';
import dataShared from '../../sharing/dataShared';

export default {
    name: 'Header',
    components: {
        Menu
    },
    data() {
        return {
            dataShared,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 50px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: none;
        .logo-img {
            height: 60px;
        }
        .ham-btn {
            padding: 20px 0;
            .fa-bars {
                font-size: 1.8rem;
                color: $white;
            }
        }
    }
</style>