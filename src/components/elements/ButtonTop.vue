<template>
    <button v-on:click="scrollTop">
        <i class="fas fa-chevron-up"></i>
    </button>
</template>

<script>

export default {
    name: 'ButtonTop',
    methods: {
        scrollTop: function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        } 
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';

    button {
        position: fixed;
        bottom: 0;
        right: 50px;
        z-index: 99;
        background-color: #333;
        border: none;
        width: 65px;
        height: 45px;
        color: $white;
        border-radius: 5px 5px 0 0; 
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }


</style>