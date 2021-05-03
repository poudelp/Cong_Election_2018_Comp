let active = false;

let scrollerMiddle = document.querySelector('.scroller-middle');
let scrollerTop = document.querySelector('.scroller-top');

scrollerMiddle.addEventListener('mousedown',function(){
  active = "middle";

  scrollerMiddle.classList.add('scrolling');
});

document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});
// We'll have to do the same for our top scroller
scrollerTop.addEventListener('mousedown',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerTop.classList.remove('scrolling');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;

  let x = e.pageX;

  x -= document.querySelector('.wrapper').getBoundingClientRect().left;

  scrollIt(x);
});


function scrollIt(x){

  let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
 
  if (active==="middle"){
    document.querySelector('.middle').style.width = transform+"px";
    scrollerMiddle.style.left = transform-25+"px";

    if (scrollerTop.getBoundingClientRect().left>scrollerMiddle.getBoundingClientRect().left-5){
      document.querySelector('.top').style.width = transform-5+"px";
      scrollerTop.style.left = transform-30+"px";
    }
  }

  if (active==="top"){
    document.querySelector('.top').style.width = transform+"px";
    scrollerTop.style.left = transform-25+"px";

    if (scrollerTop.getBoundingClientRect().left>scrollerMiddle.getBoundingClientRect().left-5){
      document.querySelector('.middle').style.width = transform+5+"px";
      scrollerMiddle.style.left = transform-20+"px";
    }
  }
}


active = "middle";
scrollIt(926);
active = "top";
scrollIt(463);
active = false;


scrollerMiddle.addEventListener('touchstart',function(){
    active = "middle";
    scrollerMiddle.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});

scrollerTop.addEventListener('touchstart',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
});

document.querySelector('.wrapper').addEventListener('touchmove',function(e){
    if (!active) return;
    e.preventDefault();
    let x = e.touches[0].pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
});