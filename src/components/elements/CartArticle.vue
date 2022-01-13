<template>
    <div class="article" :class="'article' + article.id">
        <img :src="require('../../assets/images/' + article.image)" :alt="article.image">
        <div class="title-article">
            <h4 class="title">
                {{article.title}}
            </h4>
            <p class="description">
                {{article.description}}
            </p>
        </div>
        <div class="article-hover">
            <a href="#">
                {{article.title}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardArticles',
    props: {
        article: Object
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';

    .article {
        overflow: hidden;
        position: relative;
        .title-article {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: $lightgrey;
            padding: 15px;
            z-index: 9;
            .title {
                color: $mandy;
                margin-bottom: 10px;
                font-size: 1.1rem;
            }
            .description {
                color: $textgrey;
            }
        }
        &:hover .title-article {
            display: none;
        }
        &:hover .article-hover {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba($color: $mandy, $alpha: 0.6);
            z-index: 10;
            a {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: white;
                font-size: 1.4rem;
                padding: 20px;
                text-align: center;
            }
        }
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            display: block;
        }
    }

    
</style>