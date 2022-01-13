import Vue from 'vue';

export default Vue.observable({
    hamMenuOpen: false,
    scrolled: 0,
    liveDateActive: null,
    navbarLinks: [
        {
            nome: 'Home',
            url: '#section-1',
            active: true
        },
        {
            nome: 'Meet The Band',
            url: '#',
            active: false
        },
        {
            nome: 'Live Dates',
            url: '#section-5',
            active: false
        },
        {
            nome: 'Latest News',
            url: '#section-3',
            active: false
        },
        {
            nome: 'Albums',
            url: '#',
            active: false
        },
        {
            nome: 'Fans',
            url: '#',
            active: false
        }
    ],
    articles: [
        {
            title: 'Technology and music',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit.',
            url: '#',
            image: 'blog_music_techo.jpg',
            id: 0,
        },
        {
            title: 'Taking it back to the old school',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit.',
            url: '#',
            image: 'blog-post1.jpg',
            id: 1,
        },
        {
            title: 'Sharing the stage with a legend',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit.',
            url: '#',
            image: 'blog-post2.jpg',
            id: 2,
        },
        {
            title: 'While my guitar gently weeps',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit.',
            url: '#',
            image: 'blog-post3.jpg',
            id: 3,
        },
        {
            title: 'It just sounds better',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit.',
            url: '#',
            image: 'blog-post4.jpg',
            id: 4,
        },
        {
            title: 'The flavor of rock',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit.',
            url: '#',
            image: 'blog_flavor_rock.jpg',
            id: 5,
        },
    ],
    dates: [
        {
            data: '17/08/2020',
            nome: 'gem festival 2020 anakalia, georgia',
        },
        {
            data: '24/09/2020',
            nome: 'groovefest domninical republic',
        },
        {
            data: '31/10/2020',
            nome: 'oasis festival 2020 marrakech, marocco',
        },
        {
            data: '07/11/2020',
            nome: 'moga festival - essaouria, marocco',
        },
        {
            data: '10/12/2020',
            nome: 'envision festival - uvita, costa rica',
        },
        {
            data: '26/08/2022',
            nome: 'jova beach party 2022 - castel volturno, caserta',
        },
    ],
    socials: [
        {
            nome: 'Facebook',
            url: '#',
            icon: 'fab fa-facebook-f'
        },
        {
            nome: 'Twitter',
            url: '#',
            icon: 'fab fa-twitter'
        },
        {
            nome: 'Instagram',
            url: '#',
            icon: 'fab fa-instagram'
        },
        {
            nome: 'YouTube',
            url: '#',
            icon: 'fab fa-youtube'
        },

    ]
});