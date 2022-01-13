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
            <div class="g-maps">

                <iframe :src="dataShared.dates[index].srcMap" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

            </div>
            <div class="text-date">
                <h4 class="title-date">
                    {{dataShared.dates[index].title}}
                </h4>
                <p>
                    {{dataShared.dates[index].description}}

                </p>
                <a class="button-hover" :target="dataShared.dates[index].target ? dataShared.dates[index].target : ''" :href="dataShared.dates[index].urlBooking">Book Now</a>
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
            width: 25px;
            height: 25px;
            color: $white;
            text-align: center;
            line-height: 25px;
            > span {
                line-height: 25px;
                width: 100%;
                height: 100%;
                font-weight: bold;
                letter-spacing: 0;
                font-size: 1.2rem;
            }
            .hyphen {
                display: none;
            }
            .plus {
                display: block;
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
            .g-maps {
                display: flex;
                align-items: center;
                width: 40%;
                min-width: 200px;
                min-height: 100px;
                > * {
                    width: 100%;
                    height: 100%;
                }
            }
            @media screen and (min-width: 992px) {
                .g-maps {
                    min-height: 200px;
                    min-width: 300px;
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
                    background-color: $mandyVibrant;
                    font-weight: 600;
                    font-family: 'Montserrat', sans-serif;
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
            display: block;
        }
    }
</style>