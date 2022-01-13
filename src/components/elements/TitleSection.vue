<template>
    <div class="content-container">
        <h2>
            {{titleSection.title}}
        </h2>
        <hr>
        <p>
            {{titleSection.description}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'TitleSection',
    props: {
        titleSection: Object
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';

    .content-container {
        text-align: center;
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin: 0 auto;
        h2 {
            font-size: 4rem;
            color: $white;
        }
        hr {
            width: 20vw;
            color: $spacebar;
        }
        p {
            color: $textgrey;
        }
    }
</style>