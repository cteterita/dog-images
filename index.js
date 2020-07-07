function fetchDogs(n) {
    fetch(`https://dog.ceo/api/breeds/image/random/${n}`)
        .then(response => response.json())
        .then(parsedResponse => displayResults(parsedResponse))
        .catch(e => alert('Unknown error! Try again later.'));
}

function displayResults(responseJson) {
    $('.results').html('<h2>Dogs Dogs Dogs!!!</h2>'); // Removes content from previous searches
    responseJson.message.forEach(img => {
        console.log(img);
        $('.results').append(`<img src='${img}' class='results-img' alt='random dog'>`);
    });
    $('.results').removeClass('hidden');
}

function listenToForm() {
    $('form').submit(e => {
        e.preventDefault();
        let n = parseInt($('#numDogs').val());
        if (isNaN(n) || n < 1 || n > 50) { // Make sure it's a number, and it's within the range
            alert("Pick a number between 1 and 50.");
        } else {
            fetchDogs(n);
        }
    });
}

$(listenToForm());