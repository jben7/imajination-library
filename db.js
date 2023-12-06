//Tags possible: jeunesse contes livredimage

let books = [
    {
        name: 'projone',
        author: 'XXX',
        tags: '#educatif, #jeunesse',
        image: 'https://i.imgur.com/QtcObwG.png',
        redirection: 'https://www.google.com/search?tbm=bks&q=',
        age: '+12 ans'
    },
    {
        name: 'project one',
        author: 'XXX',
        tags: '#javascript, #fullstack',
        image: 'img/project-1.png',
        redirection: 'https://www.google.com/search?tbm=bks&q=',
        age: '+12 ans'
    },
    {
        name: 'project one',
        author: 'XXX',
        tags: '#javascript, #fullstack',
        image: 'img/project-1.png',
        redirection: 'https://www.google.com/search?tbm=bks&q=',
        age: '+12 ans'
    },
    {
        name: 'project one',
        author: 'XXX',
        tags: '#javascript, #fullstack',
        image: 'img/project-1.png',
        redirection: 'https://www.google.com/search?tbm=bks&q=',
        age: '+12 ans'
    },
    {
        name: 'project one',
        author: 'XXX',
        tags: '#javascript, #fullstack',
        image: 'img/project-1.png',
        redirection: 'https://www.google.com/search?tbm=bks&q=',
        age: '+12 ans'
    },
    {
        name: 'project one',
        author: 'XXX',
        tags: '#javascript, #fullstack',
        image: 'img/project-1.png',
        redirection: 'https://www.google.com/search?tbm=bks&q=',
        age: '+12 ans'
    },
    {
        name: 'project one',
        author: 'XXX',
        tags: '#javascript, #fullstack',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg/revision/latest?cb=20160903222533&path-prefix=fr',
        redirection: 'https://www.google.com/search?tbm=bks&q=',
        age: '+12 ans'
    },
    {
        name: 'project one',
        author: 'XXX',
        tags: '#educatif, #fullstack',
        image: 'img/project-1.png',
        redirection: 'https://www.google.com/search?tbm=bks&q=',
        age: '+12 ans'
    },
];

let bookGallery = document.querySelector('.book-gallery');
let bookGallery2 = document.querySelector('.book-gallery2');

function createBooks(data, bookGallery) {
    bookGallery.innerHTML += `
    <a href="${data.redirection + data.name + ' de ' + data.author}" class="relative book-card h-52 [&>span]:hover:opacity-100 [&>img]:hover:opacity-60" data-tags="${data.tags}">
        <img src="${data.image}" class="object-cover w-full h-full transition-all">
        <span class="absolute w-full text-gray-800 transition-all opacity-0 bottom-5 left-5">qsdkjqsndkjqsndjq${data.name}</span>
        <span class="relative w-full text-gray-800 transition-all opacity-0 bottom-5 left-5">De ${data.author}</span>
        <span class="relative w-full text-gray-800 transition-all opacity-0 bottom-5 left-5">Age: ${data.author}</span>
    </a>`
}


books.map((book, i) => {
    if (i < 4) {
        createBooks(book, bookGallery);
    } else {
        createBooks(book, bookGallery2);
    }
})