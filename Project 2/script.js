var tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.8,
    ease: "power1.out"
});

tl.from("#full p", {
    x: 150,
    duration: 0.8,
    stagger: 0.3,
    opacity: 0,
    ease: "power1.out"
});

tl.pause(); // Initial state paused

var menu = document.getElementById("logo");  // Fixed the ID selector
var cross = document.getElementById("cross"); // Fixed the ID selector

// Debugging to check if the event listeners are added correctly
console.log(menu);
console.log(cross);

menu.addEventListener("click", function() {
    console.log("Menu clicked");
    tl.play();  // Play the animation
    menu.style.display = "none";  // Hide the menu icon after clicking
    cross.style.display = "block"; // Show the cross icon (close)
});

cross.addEventListener("click", function() {
    console.log("Cross clicked");
    tl.reverse(); // Reverse the animation
    menu.style.display = "block";  // Show the menu icon again
    cross.style.display = "none"; // Hide the cross icon
});
