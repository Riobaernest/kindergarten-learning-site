// main.js

// Freebie tracking for profile page
let freebiesLeft = localStorage.getItem('freebiesLeft');

// If user is new, set 2 freebies
if (freebiesLeft === null) {
    freebiesLeft = 2;
    localStorage.setItem('freebiesLeft', freebiesLeft);
}

// Update the freebies counter on profile page
const freebiesCounter = document.getElementById('freebies-left');
if (freebiesCounter) {
    freebiesCounter.textContent = freebiesLeft;
}

// Function to decrement freebies when user clicks a free book
function useFreebie() {
    if (freebiesLeft > 0) {
        freebiesLeft--;
        localStorage.setItem('freebiesLeft', freebiesLeft);
        if (freebiesCounter) freebiesCounter.textContent = freebiesLeft;
        alert("You have " + freebiesLeft + " free books left.");
    } else {
        alert("No free books left. Please subscribe to get full access.");
    }
}

// Attach click events to free book links on profile page
document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (freebiesLeft > 0) {
            useFreebie();
        } else {
            event.preventDefault();
            alert("No free books left. Please subscribe.");
        }
    });
});
