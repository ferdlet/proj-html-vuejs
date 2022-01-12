<template>
    <nav>
        <ul>
            <li v-for="(link, index) in dataShared.navbarLinks" :key="index">
                <a :href="link.url">{{link.nome}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import dataShared from '../../sharing/dataShared';

export default {
    name: 'NavbarFooter',
    data() {
        return {
            dataShared,
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';

    nav {
        ul {
            display: flex;
            gap: 20px;
            list-style: none;
            li a {
                text-decoration: none;
                color: $textgrey;
                font-family: 'Merriweather', serif;
                font-size: 0.8rem;

            }
            li:first-child a {
                color: $white;
            }
        }
    }
</style>