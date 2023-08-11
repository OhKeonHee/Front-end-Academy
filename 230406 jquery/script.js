$(document).ready(function(){
  $(".slider").bxSlider({
    mode:"horizontal",
    speed : 300,
    pager : false
  });
});
$( function() {
  $( "#dialog" ).dialog( {
    width: 400,
    height: 800
  });
} );
const openButton = document.querySelector('.detail');
const closeButton = document.querySelector('.close');
const container = document.querySelector('.container');
const item = document.querySelector('.items');
const items = document.querySelector('.items-inner');


openButton.addEventListener('click', () => {
  container.style.display = 'flex'
  item.style.display = 'none'
  items.style.display = 'none'
})
closeButton.addEventListener('click', () => {
  container.style.display = 'none'
  item.style.display = 'flex'
  items.style.display = 'block'
})
