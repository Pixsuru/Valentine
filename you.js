let noClickCount = 0;
const scoldMessages = [
    { message: "Stop trying to say no! 😤", gif: "https://media0.giphy.com/media/v43XyR9HCTKOXi69Cv/giphy.gif" },
    { message: "Stop trying to say no! 😤", gif: "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif?cid=790b7611r6bxecqhod7d522ao8jwps9g38df9h0jdtm18367&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
    { message: "Why are you like this? 😠", gif: "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif?cid=790b7611r6bxecqhod7d522ao8jwps9g38df9h0jdtm18367&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
    { message: "You're hurting my feelings! 😢", gif: "https://media.giphy.com/media/GwskZm1jXg8cDvuZJ6/giphy.gif?cid=790b7611tv7ojniphdhxsi1wqduc79hallw5wr5vw0ta0mn7&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
    { message: "I'm not giving up! 😡", gif: "https://media.giphy.com/media/YmVNzDnboB0RQEpmLr/giphy.gif?cid=790b76118vajkylc280niijnzjqx56ey3901h0q8hu7pf4io&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
    { message: "Just say yes already! 😤", gif: "https://media.giphy.com/media/A0lTlnxCyVogONSvum/giphy.gif?cid=790b76118vajkylc280niijnzjqx56ey3901h0q8hu7pf4io&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
    { message: "Fine, be that way! 😭", gif: "https://media.giphy.com/media/wfS4vDyVsASQygl4mN/giphy.gif?cid=790b7611tv7ojniphdhxsi1wqduc79hallw5wr5vw0ta0mn7&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
    { message: "Go be your own Valentine 😠", gif: "https://media.giphy.com/media/Te8g0Fa6kh5Nm/giphy.gif?cid=790b7611tv7ojniphdhxsi1wqduc79hallw5wr5vw0ta0mn7&ep=v1_gifs_search&rid=giphy.gif&ct=g" }
];

function sayYes() {
    let textElement = document.getElementById("valentine-text");
    let gifElement = document.getElementById("cat-gif");

    if (textElement.innerText === "Will you be my Valentine? 💖") {
        textElement.innerText = "Really? 🥺";
        gifElement.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDcwMXIzYzc4ZDRjdnJ5Mng3djBwZGNocW8zcXozY2NwYnM0NmFpMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sXv0vaA4331Ti/giphy.gif";
    } else {
        textElement.innerText = "Yay! Love you 💕";
        gifElement.src = "https://media.giphy.com/media/xJjs8eGVbjNYY/giphy.gif?cid=790b7611r6bxecqhod7d522ao8jwps9g38df9h0jdtm18367&ep=v1_gifs_search&rid=giphy.gif&ct=g";
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
    const creepyAudio = document.getElementById("creepy-music");
    
    // Create a new audio element for the second song
    const loveSong = new Audio("love-song.mp3"); // Change this to your love song file

    // Play the creepy intro music
    creepyAudio.play();

    setTimeout(() => {
        intro.style.transition = "opacity 2s";
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
            valentineContent.style.display = "block";

            // Stop creepy music and play the love song
            creepyAudio.pause();
            creepyAudio.currentTime = 0; // Reset creepy music for next reload
            
            loveSong.play();
            loveSong.loop = true; // Keeps the love song playing in a loop
        }, 2000);
    }, 4000);
});
