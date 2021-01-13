import './styles.css';
import path from './assets/php/contact.php'

const homelink = document.querySelector('.homeli'),
aboutli = document.querySelector('.aboutli'),
galleryli = document.querySelector('.galleryli'),
contactli = document.querySelector('.contactli'),
home = document.querySelector('.hero'),
about = document.querySelector('.about'),
art = document.querySelector('.art'),
contact = document.querySelector('.contact'),
toPageButton = document.querySelector('.art__button'),
input1 = document.querySelector('.input1'),
input2 = document.querySelector('.input2'),
textarea = document.querySelector('.textarea');

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

contact.addEventListener('submit', async(e) => {
    e.preventDefault();

    input1.value = '';
    input2.value = '';
    textarea.value = '';

    const data = new FormData(contact);
    await fetch(path, {
        method:'post',
        body: data,
    })
    .then( swal({
        icon: "success",
        title: "Message sent!",
        text: "I'll contact you ASAP"
    }) )
    .catch( swal({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again."
    }) );

})