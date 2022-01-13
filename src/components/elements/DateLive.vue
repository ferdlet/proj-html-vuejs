<template>
    <li v-on:click="dataShared.liveDateActive == index ? dataShared.liveDateActive = null : dataShared.liveDateActive = index" :class="dataShared.liveDateActive == index ? 'active' : ''">
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

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8087837663015!2d14.325004515648715!3d41.0731722233775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a55b22aed1333%3A0xc79c020a24847245!2sReggia%20di%20Caserta!5e0!3m2!1sit!2sit!4v1642077076182!5m2!1sit!2sit" style="border:0;" allowfullscreen="" loading="lazy"></iframe>


            </div>
            <div class="text-date">
                <h4 class="title-date">
                    Untold Stories
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit illo officiis culpa mollitia quos et eos fugit? Expedita.
                </p>
                <a class="button-hover" href="#">Book Now</a>
            </div>
        </div>

    </li>
</template>

<script>
import dataShared from '../../sharing/dataShared';

export default {
    name: 'DateLive',
    props: {
        date: Object,
        index: Number
    },
    data() {
        return {
            dataShared,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';

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
                width: 35%;
                > * {
                    width: 100%;
                    height: 200px;
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
</style>