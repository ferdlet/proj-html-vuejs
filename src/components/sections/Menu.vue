<template>
    <section id="ham-menu">
        <div class="header-menu">
            <a v-on:click="dataShared.hamMenuOpen = false" href="#">
                <img class="logo-img" src="../../assets/images/avada-music-logo-retina.png" alt="Avada Music">
            </a>
            <div class="close-btn" v-on:click="dataShared.hamMenuOpen = false">
                <i class="fas fa-times"></i>
            </div>
        </div>

        <nav>
            <ul>
                <li v-for="(link, index) in dataShared.navbarLinks" :key="index">
                    <a v-on:click="dataShared.hamMenuOpen = false" :href="link.url">{{link.nome}}</a>
                </li>
            </ul>
        </nav>
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
        z-index: 999;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        .close-btn {
            color: $white;
            font-size: 3rem;
            cursor: pointer;
        }
        .header-menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 50px;
            .logo-img {
                height: 80px;
            }
        }
        nav {
            height: calc(100vh - 140px);
            display: flex;
            justify-content: center;
            flex-direction: column;
            ul {
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-direction: column;
                height: 80%;
                li {
                    a {
                        font-size: 36px;
                        text-decoration: none;
                        color: $white;
                    }
                }
            }
        }
    }


</style>