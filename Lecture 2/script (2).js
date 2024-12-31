gsap.from("#page1 #box1",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})

gsap.from("#page2 #box1",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box1",
        scroller:"body",
        markers:true,
        start:"top 70%"
    }
})

gsap.from("#page3 #box1",{
    scale:1.5,
    delay:2,
    duration:2,
    rotate:360
})