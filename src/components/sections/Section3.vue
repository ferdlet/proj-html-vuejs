<template>
    <section id="section-3">
       <TitleSection :titleSection="titleSection"/>
        <div class="container articles">

            <CardArticle v-for="(article, index) in dataShared.articles" :key="index" :article="article"/>

        </div>

        <FullButton :linkFullButton="linkFullButton"/>

    </section>
</template>

<script>
import dataShared from '../../sharing/dataShared'
import CardArticle from '../elements/CartArticle.vue'
import TitleSection from '../elements/TitleSection.vue'
import FullButton from '../elements/FullButton.vue'

export default {
    name: 'Section3',
    components: {
        CardArticle,
        TitleSection,
        FullButton
    },
    data() {
        return {
            dataShared,
            titleSection: {
                title: 'Latest Band News',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus, fugiat numquam eius enim consequatur officia exercitationem, harum illum accusantium magni sint.'
            },
            linkFullButton: {
                url: '#',
                title: 'view all latest news'
            }
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


        .container.articles {
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
            .container.articles {
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

        

    }

</style>

