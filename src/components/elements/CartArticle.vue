<template>
    <div class="article" :class="'article' + article.id">
        <img :src="require('../../assets/images/' + article.image)" :alt="article.image">
        <div class="title-article">
            <h6 class="title">
                {{article.title}}
            </h6>
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
            }
            .description {
                color: $textgrey;
            }
        }
        &:hover .title-article {
            // display: none;
            transform: translateY(100%);
            animation-name: topToBottom;
            animation-duration: 0.3s;
            @keyframes topToBottom {
                from {transform: translateY(0);}
                to {transform: translateY(100%);}
            }
        }
        &:hover .article-hover {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba($color: $mandy, $alpha: 0.7);
            z-index: 10;
            animation-name: leftToRight;
            animation-duration: 0.3s;
            @keyframes leftToRight {
                from {width: 0;}
                to {width: 100%;}
            }
            a {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: white;
                font-size: 1.5rem;
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