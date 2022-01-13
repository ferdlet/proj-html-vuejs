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

            <CardArticle v-for="(article, index) in dataShared.articles" :key="index" :article="article"/>

        </div>

        <div class="full-btn">
            <a href="#">view all latest news</a>
        </div>
    </section>
</template>

<script>
import dataShared from '../../sharing/dataShared';
import CardArticle from '../elements/CartArticle.vue'
export default {
    name: 'Section3',
    components: {
        CardArticle
    },
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

        }
        @media screen and (min-width: 992px){
            .container-articles {
                width: 70vw;
                grid-template-rows: 360px 360px 360px 360px;
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

