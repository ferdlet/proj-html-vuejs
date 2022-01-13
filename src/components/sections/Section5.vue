<template>
    <section id="section-5">
        
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
        <div class="full-btn">
            <a href="#">view all live dates</a>
        </div>
    </section>
</template>

<script>
import dataShared from '../../sharing/dataShared';

export default {
    name: 'Section5',
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
    
    #section-5 {
        background-color: $darkgrey;
        .live-dates {
            .content-container {
                text-align: center;
                padding: 50px;
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
                        color: $mandyVibrant;
                        padding: 10px 20px;

                        cursor: pointer;
                        .title {
                            display: flex;
                            align-items: center;
                            gap: 15px;
                            font-family: 'Montserrat', sans-serif;
                            font-weight: 700;
                            letter-spacing: 2px;
                        }
                        .plus-btn {
                            width: 20px;
                            height: 20px;
                            color: $white;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            > span {
                                font-weight: bold;
                                height: 100%;
                                width: 100%;
                                text-align: center;
                            }
                            .hyphen {
                                display: none;
                            }
                            .plus {
                                display: inline;
                            }
                        }
                        .info-date {
                            display: none;
                        }
                        &:hover .plus-btn {
                            background-color: $mandyVibrant;
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
                                max-width: 18%;
                                img {
                                    width: 100%;
                                }
                            }
                            .text-date {
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: space-around;
                                gap: 25px;
                                padding-right: 5%;
                                .title-date {
                                    color: $white;
                                    font-family: 'Montserrat', sans-serif;
                                }
                                p {
                                    color: $textgrey;
                                    line-height: 26px;
                                    font-family: 'Merriweather', serif;
                                }
                                a {
                                    text-decoration: none;
                                    display: inline-block;
                                    padding: 10px 20px;
                                    color: $white;
                                    font-size: 0.8rem;
                                    background-color: $mandyVibrant;
                                    font-weight: 600;
                                    font-family: 'Merriweather', sans-serif;
                                    text-transform: uppercase;
                                    letter-spacing: 2px;
                                    &:hover {
                                        color: black;
                                        background-color: white;
                                    }
                                }
                            }
                        }
                    }
                    li.active .plus-btn {
                        background-color: $mandyVibrant;
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
   
</style>

