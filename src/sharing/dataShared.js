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
            title: 'Untold Stories',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit illo officiis culpa mollitia quos et eos fugit? Expedita.',
            urlBooking: '#',
            srcMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8087837663015!2d14.325004515648715!3d41.0731722233775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a55b22aed1333%3A0xc79c020a24847245!2sReggia%20di%20Caserta!5e0!3m2!1sit!2sit!4v1642077076182!5m2!1sit!2sit'
        },
        {
            data: '24/09/2020',
            nome: 'groovefest domninical republic',
            title: 'Untold Stories',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit illo officiis culpa mollitia quos et eos fugit? Expedita.',
            urlBooking: '#',
            srcMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8087837663015!2d14.325004515648715!3d41.0731722233775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a55b22aed1333%3A0xc79c020a24847245!2sReggia%20di%20Caserta!5e0!3m2!1sit!2sit!4v1642077076182!5m2!1sit!2sit'
        },
        {
            data: '31/10/2020',
            nome: 'oasis festival 2020 marrakech, marocco',
            title: 'Untold Stories',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit illo officiis culpa mollitia quos et eos fugit? Expedita.',
            urlBooking: '#',
            srcMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8087837663015!2d14.325004515648715!3d41.0731722233775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a55b22aed1333%3A0xc79c020a24847245!2sReggia%20di%20Caserta!5e0!3m2!1sit!2sit!4v1642077076182!5m2!1sit!2sit'
        },
        {
            data: '07/11/2020',
            nome: 'moga festival - essaouria, marocco',
            title: 'Untold Stories',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit illo officiis culpa mollitia quos et eos fugit? Expedita.',
            urlBooking: '#',
            srcMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8087837663015!2d14.325004515648715!3d41.0731722233775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a55b22aed1333%3A0xc79c020a24847245!2sReggia%20di%20Caserta!5e0!3m2!1sit!2sit!4v1642077076182!5m2!1sit!2sit'
        },
        {
            data: '10/12/2020',
            nome: 'envision festival - uvita, costa rica',
            title: 'Untold Stories',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit illo officiis culpa mollitia quos et eos fugit? Expedita.',
            urlBooking: '#',
            srcMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8087837663015!2d14.325004515648715!3d41.0731722233775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a55b22aed1333%3A0xc79c020a24847245!2sReggia%20di%20Caserta!5e0!3m2!1sit!2sit!4v1642077076182!5m2!1sit!2sit'
        },
        {
            data: '26/08/2022',
            nome: 'jova beach party 2022 - castel volturno, caserta',
            title: 'Jova Beach Party 2022 - Castel Volturno, Caserta',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae aliquid voluptatem, ullam quo sapiente, repellendus architecto debitis magni cupiditate velit illo officiis culpa mollitia quos et eos fugit? Expedita.',
            urlBooking: 'https://www.ticketone.it/event/jova-beach-party-2022-lido-fiore-flava-beach-14482845/',
            srcMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.622858746695!2d13.962594515413493!3d40.98973847930275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b196993041bcf%3A0xa887a39342fdd5cf!2sFlava%20Beach%20-%20Lido%20Fiore!5e0!3m2!1sit!2sit!4v1642078223892!5m2!1sit!2sit',
            target: '_blank',
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