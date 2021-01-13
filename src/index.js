import path from './assets/php/contact.php'
import axios from 'axios';
import './styles.css';
import Swal from 'sweetalert2'

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
textarea = document.querySelector('.textarea'),
menuRes = document.querySelector('.header__res'),
menuResDiv = document.querySelector('.header__nav');

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
    window.open('https://www.instagram.com/ann_30r/', '_blank')
})

contact.addEventListener( 'submit', (e) => {
    e.preventDefault();

    input1.value = '';
    input2.value = '';
    textarea.value = '';

    const data = new FormData(contact);

    axios({
        method: 'post',
        url: path,
        headers: { 'content-type' : 'application/json' },
        data: data
    })
    .then( Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "I'll contact you ASAP"
    }) )
    .catch( Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again."
    }) );

})

menuRes.addEventListener('click', () => {
    menuRes.classList.toggle('opened');
    ( menuResDiv.classList.contains("show") )
    ? menuResDiv.classList.remove("show")
    : menuResDiv.classList.add("show");
})

menuResDiv.addEventListener('click', () => {
    ( menuRes.classList.contains("opened") )
    ? menuRes.classList.remove("opened")
    : '';
    ( menuResDiv.classList.contains("show") )
    ? menuResDiv.classList.remove("show")
    : menuResDiv.classList.add("show");
})