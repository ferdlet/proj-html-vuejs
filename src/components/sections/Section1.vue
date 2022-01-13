<template>
    <section id="section-1">
        <h1>
            Untold Stories
        </h1>
        <h4>
            There is an untold story behind every favorite song.
        </h4>
        <div class="container-btn">
            <a class="button-hover" href="#">
                Latest Album
            </a>
            <a class="button-hover" href="#section-5">
                live dates
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Section1',
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';


    #section-1 {
        height: 100vh;
        width: 100%;
        background-image: url('../../assets/images/home_slider.jpg');
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: $white;
        text-align: center;
        h1 {
            font-size: 140px;
            font-family: "Montserrat";

        }
        h4 {
            font-family: "Merriweather";
            font-style: italic;
        }
        gap: 40px;
        .container-btn {
            margin-top: 10px;
            display: flex;
            gap: 20px;
            a:first-child {
                border: none;
                background-color: $mandy;
            }
            a {
                text-transform: uppercase;
                text-decoration: none;
                color: $white;
                display: inline-block;
                padding: 15px 30px;
                border: 1px solid $white;
                font-size: 1.1rem;
                font-family: "Montserrat";
                font-weight: 700;

            }

        }
    }

</style>