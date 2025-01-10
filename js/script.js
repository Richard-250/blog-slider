let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
let carouselDom = document.querySelector('.carousel')
let listItemDom = document.querySelector('.carousel .list')
let thumbnailDom = document.querySelector('.carousel .thumbnail')

nextDom.onclick = function(){
    showSlider('next')
}
prevDom.onclick = function()
{
    showSlider('prev')
}
let timeRunning = 3000;
let timeAutoNext = 5000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click()
}, timeAutoNext)

function showSlider(type)
{
   let itimeSlider = document.querySelectorAll('.carousel .list .item')
   let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .items')

   if(type === 'next') {
    listItemDom.appendChild(itimeSlider[0])
    thumbnailDom.appendChild(itemThumbnail[0])
    carouselDom.classList.add('next')
   }else
   {
     let positionLastItem = itimeSlider.length - 1;
     let positionLastItems = itemThumbnail.length - 1;
     listItemDom.prepend(itimeSlider[positionLastItem])
     thumbnailDom.prepend(itemThumbnail[positionLastItems])
     carouselDom.classList.add('prev')
   }

   clearTimeout(runTimeOut);
   runTimeOut = setTimeout(() =>{
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');

   }, timeRunning)

   
}