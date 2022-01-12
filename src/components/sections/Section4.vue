<template>
  <section id="section-6">
        <div class="content-container">
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat magni nostrum rerum sint itaque qui voluptas! Dignissimos autem quibusdam accusantium quis laborum, omnis nostrum adipisci fugit esse, recusandae, explicabo iure.
                Quae nostrum tenetur soluta, nisi voluptate minima quibusdam facere illum itaque in, quidem architecto vel, fugit perferendis. Porro expedita fugit cupiditate consectetur."
            </p>
            <img src="../../assets/images/band_interview_play_icon.png" alt="Play Button">
        </div>
  </section>
</template>

<script>
export default {
    name: 'Section6'
}
</script>

<style lang="scss" scoped> 
    @import '../../assets/style/_variables.scss';

    #section-6{
        background-image: url('../../assets/images/home-testimonial-parallax.jpg');
        padding: 150px 0;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        .content-container {
            width: 60vw;
            margin: 0 auto;
            padding: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
                color: $white;
                text-align: center;
                font-style: italic;
                line-height: 30px;
                font-size: 1.2rem;
            }
            img {
                height: 60px;
                margin-top: 80px;
            }
        }
    }
</style>