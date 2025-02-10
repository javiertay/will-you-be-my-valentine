const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "What if I asked nicely",
    "Baby please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // noButton.textContent = messages[messageIndex];
    // messageIndex = (messageIndex + 1) % messages.length;
    // const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    // yesButton.style.fontSize = `${currentSize * 1.25}px`;

    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;

        // Increase Yes button size
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;

        // Disable the No button after the last message
        if (messageIndex === messages.length) {
            noButton.disabled = true;
        }
    }
}

function handleYesClick() {
    window.location.href = "yes.html";
}

// Function to move the "No" button to a random position
// function moveButton() {
//     var button = document.getElementById('noButton');
//     var screenWidth = window.innerWidth;
//     var screenHeight = window.innerHeight;

//     // Generate random positions
//     var randomX = Math.random() * (screenWidth - button.offsetWidth);
//     var randomY = Math.random() * (screenHeight - button.offsetHeight);

//     // Set the new position
//     button.style.left = randomX + 'px';
//     button.style.top = randomY + 'px';
// }