var receiveButton = document.querySelector('.receive-button');
var affirmationOption = document.querySelector('#affirmation');
var mantraOption = document.querySelector('#mantra');
var meditateIcon = document.querySelector('img');
var messageDisplay = document.querySelector('.message-wrapper');
var favoriteButton = document.querySelector('.favorite-button');
var viewFavoritesButton = document.querySelector('.view-favorites-button');
var backToMainButton = document.querySelector('#back-to-main-button');

var favorites = [];


receiveButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (affirmationOption.checked) {
        displayRandomMessage(affirmations);
    } else if (mantraOption.checked) {
        displayRandomMessage(mantras);
    }
});

function displayRandomMessage(messages) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var randomMessage = messages[randomIndex];
    messageDisplay.textContent = randomMessage;
    meditateIcon.style.display = 'none';
}

favoriteButton.addEventListener('click', function() {
    addToFavorites(messageDisplay.textContent);
});

function addToFavorites(message) {
    if (!favorites.includes(message) && message.trim() !== "") {
    favorites.push(message);
    }
}

viewFavoritesButton.addEventListener('click', function() {
    var favoriteMessagesSection = document.querySelector('.favorites-section');
    favoriteMessagesSection.innerHTML = ''

    for (var i = 0; i < favorites.length; i++) {
        var messageParagraph = document.createElement('p');
        messageParagraph.textContent = favorites[i];
        
        favoriteMessagesSection.appendChild(messageParagraph);
    }
    
    document.querySelector('.favorites-section').classList.remove('hidden')
    document.querySelector('.title').classList.add('hidden')
    document.querySelector('h2').classList.add('hidden')
    document.querySelector('.form-wrapper').classList.add('hidden')
    document.querySelector('.message-wrapper').style.display = 'none';
    favoriteButton.classList.add('hidden');
    viewFavoritesButton.classList.add('hidden');
    backToMainButton.classList.remove('hidden');

})


// create variables for everything we are going to be selecting w/ QuerySel
// functionality...
// recieve message button 'click' will initiate the disappearance of the meditator icon and show a 
// random message .. either affirmation 
// or mantra (separate arrays) (separate functions??? perhaps 2 functions within a function)

// receiveButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (affirmationOption.checked) {
//         generateAffirmation();
//     } else if (mantraOption.checked) {
//         generateMantra();
//     }
// })

// function generateAffirmation() {
//     var randomIndex = Math.floor(Math.random() * affirmations.length);
//     var randomAffirmation = affirmations[randomIndex];
//     document.getElementById('messageDisplay').textContent = randomAffirmation;

//     meditateIcon.style.display = 'none'
// }

// function generateMantra() {
//     var randomIndex = Math.floor(Math.random() * mantras.length);
//     var randomMantras = mantras[randomIndex];
//     document.getElementById('messageDisplay').textContent = randomMantras;
// }

// function displayRandomMantra() {
//     hide(meditateIcon)
// }