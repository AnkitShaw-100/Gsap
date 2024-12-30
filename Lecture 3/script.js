var initialPath = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var pathElement = document.querySelector('path');
var stringElement = document.querySelector('#string');

stringElement.addEventListener('mousemove', function (event) {
    var mouseX = event.clientX; // X-coordinate of the mouse
    var mouseY = event.clientY; // Y-coordinate of the mouse

    // Update the path dynamically
    var dynamicPath = `M 10 100 Q ${mouseX} ${mouseY} 990 100`;

    gsap.to(pathElement, {
        attr: { d: dynamicPath },
        duration: 0.2,
        ease: "power3.out"
    });
});

stringElement.addEventListener('mouseleave', function () {
    // Reset to the initial path
    gsap.to(pathElement, {
        attr: { d: finalPath },
        duration: 0.8,
        ease: "elastic.out(1, 0.2)"
    });
});
