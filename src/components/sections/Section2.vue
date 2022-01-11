<template>
    <section id="section-2">
        <div class="space-bar">

        </div>
        <div class="content-container">
            <h2>
                Music Is Life
            </h2>
            <hr>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus, fugiat numquam eius enim consequatur officia exercitationem, harum illum accusantium magni sint.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Section2',
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
        .content-container {
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
    }
    
</style>

