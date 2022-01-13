<template>
    <section id="section-2">
        <div class="space-bar">

        </div>
        <TitleSection :titleSection="titleSection"/>
        
        
    </section>
</template>

<script>
import TitleSection from '../elements/TitleSection.vue'

export default {
    name: 'Section2',
    components: {
        TitleSection
    },
    data() {
        return {
            titleSection: {
                title: 'Music Is Life',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus, fugiat numquam eius enim consequatur officia exercitationem, harum illum accusantium magni sint.'
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';
    
    #section-2 {
        position: relative;
        background-color: $lightgrey;
        text-align: center;
        display: flex;
        justify-content: center;
        .space-bar {
            background-color: $mandy;
            height: 10px;
            width: 35vw;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
        }
       
    }
    
</style>

