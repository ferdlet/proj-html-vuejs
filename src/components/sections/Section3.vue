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
        <div class="container">
            <div class="card1">1</div>
            <div class="card2">2</div>

            <div class="card3">3</div>
            <div class="card4">4</div>
            <div class="card5">5</div>

            <div class="card6">6</div>    


        </div>

        <div class="full-btn">
            <a href="#">view all latest news</a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Section3',
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
        .container {
            width: 80%;
            margin: 20px 0;

            
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

