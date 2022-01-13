<template>
    <section id="section-5">
        
        <TitleSection :titleSection="titleSection"/>
        
        <div class="dates">
            <div class="container">
                <ul>
                    <DateLive  v-for="(date, index) in dataShared.dates" :key="index" :date="date" :index="index"/>
                </ul>
            </div>
        </div>
        <FullButton :linkFullButton="linkFullButton"/>

    </section>
</template>

<script>
import dataShared from '../../sharing/dataShared';
import TitleSection from '../elements/TitleSection.vue'
import FullButton from '../elements/FullButton.vue'
import DateLive from '../elements/DateLive.vue'


export default {
    name: 'Section5',
    components: {
        TitleSection,
        FullButton,
        DateLive
    },
    data() {
        return {
            dataShared,
            titleSection: {
                title: 'Live Dates',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus, fugiat numquam eius enim consequatur officia exercitationem, harum illum accusantium magni sint.'
            },
            linkFullButton: {
                url: '#',
                title: 'view all live dates'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';
    
    #section-5 {
        background-color: $darkgrey;

        .dates {
            padding-bottom: 60px;
            .container {
                margin: 0 auto;
                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    
                }
            }
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
        }

    }
   
</style>

