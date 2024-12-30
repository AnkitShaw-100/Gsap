var main = document.querySelector("#main");
var button = document.querySelector("#cursor");
var img = document.querySelector("#picture");

main.addEventListener("mousemove", function(dets) {
    // console.log(dets.x);
    // console.log(dets.y);
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out(1.7)"
    })
});

img.addEventListener("mouseenter", function() {
    gsap.to(cursor,{
        opacity:0.3,
        scale:3
    })
});

img.addEventListener("mouseleave", function() {
    gsap.to(cursor,{
        opacity:1,
        scale:1
    })
});