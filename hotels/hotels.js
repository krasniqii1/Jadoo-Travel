//PAGE 1 SELECTORS

const firstTitle = document.querySelector('.page2 h1')
const firstDescription = document.querySelector('.page2 p');
const firstImg = document.querySelector('.page2 img')

//PAGE2 SELECTORS

const hotel2Title = document.querySelector('.page3 h1')
const hotel2Description = document.querySelector('.page3 p');
const hotel2Img = document.querySelector('.page3 img')

//PAGE3 SELECTORS

const hotel3Title = document.querySelector('.page4 h1')
const hotel3Description = document.querySelector('.page4 p');
const hotel3Img = document.querySelector('.page4 img')

//PAGE 4 SELECTORS

const hotel4Title = document.querySelector('.page5 h1')
const hotel4Description = document.querySelector('.page5 p');
const hotel4Img = document.querySelector('.page5 img')

//PAGE 5 SELECTORS

const hotel5Title = document.querySelector('.page6 h1')
const hotel5Description = document.querySelector('.page6 p');
const hotel5Img = document.querySelector('.page6 img')




async function getData () {
    const response = await fetch ('../info.json')
    const data = await response.json()
    console.log(data)

    //hotel 1 
    firstTitle.innerHTML = data[0].title
    firstDescription.innerHTML = data[0].body
    firstImg.src = data[0].image

    //HOTEL 2
    hotel2Title.innerHTML = data[1].title;
    hotel2Description.innerHTML = data[1].body;
    hotel2Img.src = data[1].image

    //HOTEL 3
    hotel3Title.innerHTML = data[2].title;
    hotel3Description.innerHTML = data[2].body;
    hotel3Img.src = data[2].image

    //HOTEL 4
    hotel4Title.innerHTML = data[3].title;
    hotel4Description.innerHTML = data[3].body;
    hotel4Img.src = data[3].image

    //HOTEL 5
    hotel5Title.innerHTML = data[4].title;
    hotel5Description.innerHTML = data[4].body;
    hotel5Img.src = data[4].image
}

getData()