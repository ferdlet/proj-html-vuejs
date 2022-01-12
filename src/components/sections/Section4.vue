<template>
    <section id="section-4">
        <div class="hero">
            <div class="content-container">
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat magni nostrum rerum sint itaque qui voluptas! Dignissimos autem quibusdam accusantium quis laborum, omnis nostrum adipisci fugit esse, recusandae, explicabo iure.
                    Quae nostrum tenetur soluta, nisi voluptate minima quibusdam facere illum itaque in, quidem architecto vel, fugit perferendis. Porro expedita fugit cupiditate consectetur. Dignissimos atque praesentium itaque? Repellat facere vel sapiente."
                </p>
                <img src="../../assets/images/band_interview_play_icon.png" alt="Play Button">
            </div>
        </div>
        <div class="live-dates">
            <div class="content-container">
                <h2>
                    Live Dates
                </h2>
                <hr>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus, fugiat numquam eius enim consequatur officia exercitationem, harum illum accusantium magni sint.
                </p>
            </div>
        </div>
        <div class="dates">
            <div class="container">
                <ul>
                    <li  v-on:click="active == index ? active = null : active = index" v-for="(date, index) in dataShared.dates" :key="index" :class="active == index ? 'active' : ''">

                        <div class="title">
                            <div class="plus-btn">
                                <span class="plus">+</span>
                                <span class="hyphen">&#8211;</span>
                            </div>
                            <div class="text">
                                <span class="data">
                                    {{date.data}}
                                </span>
                                <span>
                                    {{date.nome}}
                                </span>
                            </div>
                        </div>
                        <div class="info-date">
                            <div class="g-map">
                                <img src="../../assets/images/fss-demo-main-600x450.jpg" alt="Google Maps">
                            </div>
                            <div class="text-date">
                                <h4 class="title-date">
                                    Untold Stories
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit illo officiis culpa mollitia quos et eos fugit? Expedita.
                                </p>
                                <a href="#">Book Now</a>
                            </div>
                        </div>

                    </li>
                    
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import dataShared from '../../sharing/dataShared';

export default {
    name: 'Section4',
    data() {
        return {
            dataShared,
            active: null,
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';
    
    #section-4 {
        .hero{
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
                    line-height: 26px;
                }
                img {
                    height: 60px;
                    margin-top: 80px;
                }
            }
        }
        .live-dates {
            padding: 60px;
            background-color: $darkgrey;
            .content-container {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 60vw;
                margin: 0 auto;
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
        .dates {
            background-color: $darkgrey;
            padding-bottom: 60px;
            .container {
                width: 80vw;
                margin: 0 auto;
                ul {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    li {
                        background-color: $lightgrey;
                        color: $mandy;
                        padding: 10px 20px;

                        cursor: pointer;
                        .title {
                            display: flex;
                            align-items: center;
                            gap: 15px;
                        }
                        .plus-btn {
                            width: 20px;
                            height: 20px;
                            color: $white;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            .hyphen {
                                display: none;
                                font-weight: bold;
                                height: 100%;
                                width: 100%;
                                text-align: center;
                            }
                            .plus {
                                display: inline;
                                font-weight: bold;
                                height: 100%;
                                width: 100%;
                                text-align: center;
                            }
                        }
                        .info-date {
                            display: none;
                        }
                        &:hover .plus-btn {
                            background-color: $mandy;
                        }
                        .text {
                            text-transform: uppercase;
                        }
                    }
                    li.active {
                        display: flex;
                        flex-direction: column;
                        padding: 15px 20px;
                        .info-date {
                            margin-top: 20px;
                            padding: 10px 0;
                            display: flex;
                            gap: 40px;
                            .g-map {
                                display: flex;
                                align-items: center;
                                max-width: 15%;
                                img {
                                    width: 100%;
                                }
                            }
                            .text-date {
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: space-around;
                                gap: 20px;
                                padding-right: 5%;
                                .title-date {
                                    color: $white;
                                }
                                p {
                                    color: $textgrey;
                                    line-height: 26px;
                                }
                                a {
                                    text-decoration: none;
                                    display: inline-block;
                                    padding: 8px 20px;
                                    color: $white;
                                    background-color: $mandy;
                                    &:hover {
                                        color: black;
                                        background-color: white;
                                    }
                                }
                            }
                        }
                    }
                    li.active .plus-btn {
                        background-color: $mandy;
                        .plus {
                            display: none;
                        }
                        .hyphen {
                            display: inline;
                        }
                    }
                }
            }
        }
    }
   
</style>

