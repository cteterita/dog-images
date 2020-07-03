
function fetchDogs(n) {
    fetch(`https://dog.ceo/api/breeds/image/random/${n}`)
        .then(response => response.json())
        .then(parsedResponse => displayDogs(parsedResponse))
        .catch('Unknown error! Try again later.');
}

function displayDogs(response) {
    $('#image-list').html('<h2>Dogs Dogs Dogs!!!</h2>'); // Removes content from previous searches
    response.message.forEach(img => {
        console.log(img);
        $('#image-list').append(`<p><img src='${img}' alt='random dog' width='300'></p>`);
    });
}

function listenToForm() {
    $('form').submit(e => {
        e.preventDefault();
        let n = parseInt($('#numDogs').val());
        if (isNaN(n) || n < 1 || n > 50) { // Make sure it's a number, and it's within the range
            alert("Pick a number between 1 and 50.");
        }
        fetchDogs(n);
    });
}

$(listenToForm());