<template>
  <section id="section-6">
        <a href="#">
            <img class="logo-img" src="../../assets/images/logo_footer.png" alt="Avada Music">
        </a>
        <NavbarFooter/>
  </section>
</template>

<script>
import NavbarFooter from '../elements/NavbarFooter.vue'

export default {
    name: 'Section6',
    components: {
        NavbarFooter
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
        padding: 50px;
        .logo-img {
            height: 40px;
        }
    }
</style>