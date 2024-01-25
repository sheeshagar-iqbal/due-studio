function init(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();
}
init()
  var crsr = document.querySelector(".curser")
  document.querySelector(".main").addEventListener("mousemove",function(det){
    crsr.style.left= det.x+"px"
    crsr.style.top= det.y+"px"

  })
  var sound_on= document.querySelector(".page1 video")
  sound_on.addEventListener("mouseenter",function(){
    crsr.innerHTML="sound on"
    // crsr.style.padding= "4px";
  })
  sound_on.addEventListener("mouseleave",function(){
    crsr.innerHTML=""
  })
 var tl=gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".page1 h1",
    // markers:true,
    start:"top 26%",
    end:"top 0%",
    scrub: 3
}
})
tl.to(".page1 h1",{
    x:-100,
   
},"til")
tl.to(".page1 h2",{
  x:100,
 
},"til")
tl.to(".page1 video",{
  width: "90%",
 
},"til")
 var tl2= gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".page2 h1",
    //  markers:true,
     start:"top 26%",
     end:"top 23%",
     scrub: 3
  }
})
tl2.to(".main",{
  backgroundColor:"#fff",
  
})
var tl3=gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".page2 h1",
    // markers:true,
    start:"top -280%",
    end:"top -300%",
    scrub:true,

  }
})
tl3.to(".main",{
  backgroundColor:"#111",

})
var crsr = document.querySelector(".curser")


var boxx=document.querySelectorAll(".box")
boxx.forEach(function(prm){

  prm.addEventListener("mouseenter",function(){
  var p= prm.getAttribute("data-img")

    document.querySelector(".curser").style.height="300px"
   crsr.style.width="300px"
   crsr.style.borderRaidus="0"
crsr.style.backgroundImage= `url(${p})`


  })
  prm.addEventListener("mouseleave",function(){
  
      document.querySelector(".curser").style.height="30px"
     crsr.style.width="30px"
     crsr.style.borderRaidus="50%"
  crsr.style.backgroundImage= "none"
  
  
    })
})