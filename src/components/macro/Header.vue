<template>
    <header :class="dataShared.scrolled > 0 ? 'scrolled' : ''">
        <a href="#section-1">
            <img class="logo-img" src="../../assets/images/avada-music-logo-retina.png" alt="Avada Music">
        </a>
        <div class="ham-btn" v-on:click="dataShared.hamMenuOpen = true">
            <i class="fas fa-bars"></i>
        </div>
    </header>
</template>

<script>
import dataShared from '../../sharing/dataShared';

export default {
    name: 'Header',
    data() {
        return {
            dataShared,
        }
    },
    created () {
        window.addEventListener('scroll', this.scroll);
    },
    methods: {
        // rate: 0,
        scroll: function () {
            dataShared.scrolled = window.pageYOffset;
        }
    }
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
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
        background: transparent;
        &.scrolled {
            background-color: #1e212b;
            padding: 0 50px;
            .logo-img {
                height: 40px;
            }
        }
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