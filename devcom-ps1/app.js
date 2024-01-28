let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
var navbar = document.getElementById('navbar');
var textt = document.getElementById('topt');
var text2 = document.getElementById('top2');
var text3 = document.getElementById('top3');
var text4 = document.getElementById('top4');
var text5 = document.getElementById('top5');
window.onscroll = function(e){
{
var scroll_old =window.scrollY;
    
    if (scroll_old < 500) {
        navbar.classList.remove('BgColour');
        textt.style.color="white";
        text2.style.color="white";
        text3.style.color="white";
        text4.style.color="white";
        text5.style.color="white";
    }
    else {
        navbar.classList.add('BgColour');
        textt.style.color="black";
        text2.style.color="black";
        text3.style.color="black";
        text4.style.color="black";
        text5.style.color="black";
    }}}


window.addEventListener('scroll', scrollValue);