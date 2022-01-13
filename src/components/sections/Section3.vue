<template>
    <section id="section-3">
        <div class="content-container">
            <h2>
                Latest Band News
            </h2>
            <hr>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus, fugiat numquam eius enim consequatur officia exercitationem, harum illum accusantium magni sint.
            </p>
        </div>
        <div class="container-articles">

            <div v-for="(article, index) in dataShared.articles" :key="index" :class="'article' + index">
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

        </div>

        <div class="full-btn">
            <a href="#">view all latest news</a>
        </div>
    </section>
</template>

<script>
import dataShared from '../../sharing/dataShared';

export default {
    name: 'Section3',
    data() {
        return {
            dataShared
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';
    
    #section-3 {
        background-color: $darkgrey;
        display: flex;
        align-items: center;
        flex-direction: column;
        
        .content-container {
            text-align: center;
            padding: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 60vw;
            gap: 30px;
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
        .container-articles {
            width: 80vw;
            padding-bottom: 70px;
            padding-top: 20px;
            display: grid;
            grid-template-areas: 
            'article0 article0 article1'
            'article3 article4 article1'
            'article3 article4 article2'
            'article5 article5 article2';
            grid-gap: 20px;
            grid-template-rows: 300px 300px 300px 300px;
            > div {
                overflow: hidden;
                position: relative;
                background: chartreuse;
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
                    }
                }
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    display: block;
                }
            }
            .article0 {
                grid-area: article0;
                
            }            
            .article1 {
                grid-area: article1;
               
            }
            .article2 {
                grid-area: article2;
                
            }
            .article3 {
                grid-area: article3;
                
            }
            .article4 {
                grid-area: article4;
               
            }
            .article5 {
                grid-area: article5;
                
            }
        }
        @media screen and (min-width: 992px){
                .container-articles {
                    width: 60vw;
                    // grid-template-rows: 300px 300px 300px 300px;
                }
            }
        .full-btn {
            width: 100%;
            a {
                background-color: $mandy;
                height: 100%;
                padding: 35px 0;
                text-align: center;
                display: block;
                text-transform: uppercase;
                text-decoration: none;
                color: $white;
                &:hover {
                    color: black;
                    background-color: white;
                }
            }

        }

    }
   
</style>

