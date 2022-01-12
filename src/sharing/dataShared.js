import Vue from 'vue';

export default Vue.observable({
    hamMenuOpen: false,
    scrolled: 0,
    navbarLinks: [
        {
            nome: 'Home',
            url: '#section-1'
        },
        {
            nome: 'Meet The Band',
            url: '#'
        },
        {
            nome: 'Live Dates',
            url: '#section-5'
        },
        {
            nome: 'Latest News',
            url: '#section-3'
        },
        {
            nome: 'Albums',
            url: '#'
        },
        {
            nome: 'Fans',
            url: '#'
        }
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