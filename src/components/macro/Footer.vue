<template>
    <footer>
        <Section6/>
        <div id="footer-bottom">
            <div class="copyright">
                <i class="far fa-copyright"></i> 
                Copyright 2012 - 2022 | 
                <span>
                    Inspired by avada theme by <a href="#">themefusion</a> | all rights reserved | powered by <a href="#">wordpress</a> | developed by <a href="https://github.com/ferdlet">Ferdinando Letizia</a>
                </span>
            </div>
            <ul class="social-icon">
                <li v-for="(social, index) in dataShared.socials" :key="index">
                    <a :href="social.url">
                        <i :class="social.icon"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
import dataShared from '../../sharing/dataShared';
import Section6 from '../../components/sections/Section6'

export default {
    name: 'Footer',
    components: {
        Section6
    },
    data() {
        return {
            dataShared
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/_variables.scss';

    #footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $darkgrey;
        padding: 50px;
        .copyright {
            color: $textgrey;
            font-family: 'Merriweather', sans-serif;
            font-size: 0.7rem;
            letter-spacing: 1px;
            font-weight: 600;
            span {
                text-transform: uppercase;
                a {
                    text-decoration: none;
                    color: $mandyVibrant;
                }
            }
        }
        .social-icon {
            list-style: none;
            display: flex;
            gap: 15px;
            li {
                width: 50px;
                height: 50px;
                border-radius: 5px;
                background-color: $lightgrey;
            }
            a {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                color: $textgrey;
                font-size: 1.2rem;
            }
        }
    }
</style>