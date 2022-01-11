<template>
    <header>
        <img class="logo-img" src="../../assets/images/avada-music-logo.png" alt="Avada Music">
        <div class="ham-btn">
            <i class="fas fa-bars"></i>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
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
            .fa-bars {
                font-size: 1.8rem;
                color: $white;
            }
        }
    }
</style>