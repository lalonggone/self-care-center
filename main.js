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

backToMainButton.addEventListener('click', function() {
    document.querySelector('.favorites-section').classList.add('hidden');
    document.querySelector('.title').classList.remove('hidden');
    document.querySelector('h2').classList.remove('hidden');
    document.querySelector('.form-wrapper').classList.remove('hidden');
    document.querySelector('.message-wrapper').style.display = 'flex';
    document.querySelector('.favorite-button').classList.remove('hidden');
    document.querySelector('.view-favorites-button').classList.remove('hidden');
    
    backToMainButton.classList.add('hidden');
});
