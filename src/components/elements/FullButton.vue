<template>
    <div class="full-btn">
        <a class="button-hover" :href="linkFullButton.url">{{linkFullButton.title}}</a>
    </div>
</template>

<script>
export default {
    name: 'FullButton',
    props: {
        linkFullButton: Object
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';

    .full-btn {
        display: block;
        width: 100%;
        border: none;
        a {
            background-color: $mandy;
            height: 100%;
            padding: 35px 0;
            text-align: center;
            display: block;
            text-transform: uppercase;
            text-decoration: none;
            color: $white;
        }
    }
</style>