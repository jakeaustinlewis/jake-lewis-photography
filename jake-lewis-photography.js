let searchDogButton = document.getElementById('searchDogButton');
let breed = document.getElementById('breed');
let dogPic = document.getElementById('dogPic');
let ranDogButton = document.getElementById('ranDogButton');

searchDogButton.addEventListener('click', function (e) {
    if (breed.type !== "") {
        e.preventDefault();
        breed.value = breed.value.replace(/\s/g, '');
        let link = `https://dog.ceo/api/breed/${breed.value}/images`;
        console.log('click worked');
        getData(link)
        
            .then(data => {
                console.log(data);
                let randomDogPic = data.message[Math.floor(Math.random() * data.message.length)];
                dogPic.setAttribute('src', randomDogPic);
            })
    }
});

ranDogButton.addEventListener('click', function (e) {
    e.preventDefault();
    let link = `https://dog.ceo/api/breeds/image/random`;
    console.log('click worked');
    getData(link)
    .then(data => {
            console.log(data);
            let randomDogPic = data.message;
            dogPic.setAttribute('src', randomDogPic);
    })
});

function getData(link) {
    return fetch(link)
        .then(response => response.json())
        .then(data => data)
}

// key b69f4589bad77785ad00bd9e625976bf
// Secret: c528a760ce45c265
