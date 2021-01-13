import './styles.css';

const homelink = document.querySelector('.homeli'),
aboutli = document.querySelector('.aboutli'),
galleryli = document.querySelector('.galleryli'),
contactli = document.querySelector('.contactli'),
home = document.querySelector('.hero'),
about = document.querySelector('.about'),
art = document.querySelector('.art'),
contact = document.querySelector('.contact'),
toPageButton = document.querySelector('.art__button');


homelink.addEventListener( 'click', () => {
    home.scrollIntoView({
        behavior: 'smooth',
    })
} )

aboutli.addEventListener( 'click', () => {
    about.scrollIntoView({
        behavior: 'smooth',
    })
} )

galleryli.addEventListener( 'click', () => {
    art.scrollIntoView({
        behavior: 'smooth',
    })
} )

contactli.addEventListener( 'click', () => {
    contact.scrollIntoView({
        behavior: 'smooth',
    })
} )

toPageButton.addEventListener('click', () => {
    window.open('https://www.instagram.com/ann_30r/')
})