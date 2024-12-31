gsap.to("#box",{
    x:500,    
    duration:2,
    delay:1,
    rotate:720,
    repeat:-1,
    yoyo:true
})

// gsap.from("#smallbox",{
//     x:100,    // PARENT(500)+500 = 1000 WALE X AXIS KA VALUE KO BHI CONSIDER KRTA HAI 
//     duration:2,
//     delay:1,
//     rotate:360
// })

gsap.from("#box1",{
    x:500,    
    duration:2,
    delay:3,
    repeat:-1,
    yoyo:true
})

gsap.from("h1",{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:1
})


var tl = gsap.timeline()

tl.to("#box2",{
    x:400,
    rotate:3600,
    duration:1.5,
    delay:1
})
tl.to("#box3",{
    x:400,
    rotate:6600,
    duration:1.5,
    delay:1
})
tl.to("#box4",{
    x:400,
    rotate:9600,
    duration:1.5,
    delay:1
})
tl.to("#box5",{
    x:400,
    rotate:12600,
    duration:1.5,
    delay:1
})