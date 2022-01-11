<template>
    <section id="section-1">
        <h1>
            Untold Stories
        </h1>
        <p>
            There is an untold story behind every favorite song.
        </p>
        <div class="container-btn">
            <a href="#">
                Latest Album
            </a>
            <a href="#">
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
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: $white;
        h1 {
            font-size: 5rem;

        }
        p {
            font-size: 1.2rem;
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
                padding: 10px 25px;
                border: 1px solid $white;
                font-size: 1rem;
            }
            a:hover {
                border: 1px solid black;
                color: black;
                background-color: white;
            }
        }
    }

</style>