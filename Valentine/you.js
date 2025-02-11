let noClickCount = 0;
const scoldMessages = [
    { message: "Stop trying to say no! 😤", gif: "https://media0.giphy.com/media/v43XyR9HCTKOXi69Cv/giphy.gif" },
    { message: "Why are you like this? 😠", gif: "https://media2.giphy.com/media/4ZCU8h9lAZebaBlAQX/giphy.gif" },
    { message: "You're hurting my feelings! 😢", gif: "https://media3.giphy.com/media/mQhxEheq4dfz6/giphy.gif" },
    { message: "I'm not giving up! 😡", gif: "https://media3.giphy.com/media/r8sFvz6uYsT5K/giphy.gif" },
    { message: "Just say yes already! 😤", gif: "https://media1.giphy.com/media/jnRgFh8iOz80E/giphy.gif" },
    { message: "Fine, be that way! 😭", gif: "https://media2.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif" },
    { message: "I said stop!! 😠", gif: "https://media1.giphy.com/media/xThtalhT8aIhdBsOZq/giphy.gif" }
];

function sayYes() {
    let textElement = document.getElementById("valentine-text");
    let gifElement = document.getElementById("cat-gif");

    if (textElement.innerText === "Will you be my Valentine? 💖") {
        textElement.innerText = "Really? 🥺";
        gifElement.src = "https://media.giphy.com/media/mQhxEheq4dfz6/giphy.gif";
    } else {
        textElement.innerText = "Yay! Love you 💕";
        gifElement.src = "";
    }
}

function runAway(button) {
    noClickCount++;
    let messageIndex = Math.min(noClickCount - 6, scoldMessages.length - 1);
    
    if (noClickCount > 6) {
        let messageObj = scoldMessages[messageIndex];
        document.getElementById("valentine-text").innerText = messageObj.message;
        document.getElementById("cat-gif").src = messageObj.gif;

        if (messageIndex === scoldMessages.length - 1) {
            document.getElementById("yes-btn").style.display = "none";
        }
    }
    
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("dark-intro");
    const valentineContent = document.getElementById("valentine-content");
    const audio = document.getElementById("creepy-music");

    // Play the intro every time the page is loaded
    audio.play();
    setTimeout(() => {
        intro.style.transition = "opacity 4s";
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.style.display = "none";
            valentineContent.style.display = "block";
        }, 2000);
    }, 4000);
});
