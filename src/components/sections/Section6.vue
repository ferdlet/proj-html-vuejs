<template>
  <section id="section-6">
        <a href="#">
            <img class="logo-img" src="../../assets/images/logo_footer.png" alt="Avada Music">
        </a>
        <nav>
            <ul>
                <li v-for="(link, index) in dataShared.navbarLinks" :key="index">
                    <a :href="link.url">{{link.nome}}</a>
                </li>
            </ul>
        </nav>
  </section>
</template>

<script>
import dataShared from '../../sharing/dataShared';

export default {
    name: 'Section6',
        data() {
        return {
            dataShared,
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';

    #section-6 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $lightgrey;
        padding: 30px;
        .logo-img {
            height: 40px;
        }
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
    }
</style>