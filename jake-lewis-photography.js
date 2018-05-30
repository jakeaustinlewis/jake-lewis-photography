let myPhotos = document.getElementById('myPhotos');
let header = document.getElementById('containerHead');
let photosHead = document.getElementById('photosHead');
let cameraPicture = document.getElementById('cameraPicture');

params = {
    "method": "method=flickr.people.getPublicPhotos",
    "api_key": "&api_key=b69f4589bad77785ad00bd9e625976bf",
    "user_id": "&user_id=157366842@N07",
    "per_page": "&per_page=100",
    "privacy_filter": "&privacy_filter=5",
    "extras": "&extras=description,date_upload,date_taken,last_update,url_t,url_m,url_l,url_o",
    "format": "&format=json",
    "nojsoncallback": "&nojsoncallback=1"
};

// Sets the height of the camera picture to the height of the browser window
let windowHeight = $(window).innerHeight();
$('#cameraPicture').css('min-height', windowHeight);
console.log(windowHeight);


photosHead.addEventListener('click', function (e) {

    e.preventDefault();
    // let link = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=b69f4589bad77785ad00bd9e625976bf&user_id=157366842@N07&extras=url_m&per_page=10&format=json&nojsoncallback=1`;
    let link = `https://api.flickr.com/services/rest/?${params.method}${params.api_key}${params.user_id}${params.extras}${params.per_page}${params.format}${params.nojsoncallback}`;



    console.log('click worked');
    fetch(link)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.photos.photo);
            let myPhotos = document.getElementById('myPhotos');
            for (let i = 0; i < data.photos.photo.length; i++) {
                let photo_element = document.createElement("img");
                let photo = data.photos.photo[i].url_m;
                photo_element.setAttribute('src', photo);
                photo_element.style.cssText = `width: 50%; height: 50%`;
                myPhotos.appendChild(photo_element);
            }
        })

        // window.scrollTo(0,2000);
        // $('html', 'body').animate({
        //     scrollTop: $("#myPhotos").offset().bottom},
        //     'slow');
    
    // let smoothScroll = 
    // function smoothScroll(elementId) {
    //     let MIN_PIXELS_PER_STEP = 16;
    //     let MAX_SCROLL_STEPS = 30;
    //     let target = document.getElementById(elementId);
    //     let scrollContainer = target;
    //     do {
    //         scrollContainer = scrollContainer.parentNode;
    //         if (!scrollContainer) return;
    //         scrollContainer.scrollTop += 1;
    //     } while (scrollContainer.scrollTop == 0);

    //     let targetY = 0;
    //     do {
    //         if (target == scrollContainer) break;
    //         targetY += target.offsetTop;
    //     } while (target = target.offsetParent);

    //     let pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
    //         (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    //     let stepFunc = function () {
    //         scrollContainer.scrollTop =
    //             Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

    //         if (scrollContainer.scrollTop >= targetY) {
    //             return;
    //         }

    //         window.requestAnimationFrame(stepFunc);
    //     };

    //     window.requestAnimationFrame(stepFunc);
    // }
    // smoothScroll(photo_element);
});

// ranDogButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     let link = `https://dog.ceo/api/breeds/image/random`;
//     console.log('click worked');
//     getData(link)
//     .then(data => {
//             console.log(data);
//             let randomDogPic = data.message;
//             dogPic.setAttribute('src', randomDogPic);
//     })
// });

// function getData(link) {
//     return fetch(link)
//         .then(response => response.json())
//         .then(data => data)
// }

// key b69f4589bad77785ad00bd9e625976bf
// Secret: c528a760ce45c265
//oauth_problem=parameter_absent&oauth_parameters_absent=oauth_consumer_key%26oauth_signature%26oauth_signature_method%26oauth_nonce%26oauth_timestamp%26oauth_callback

// ?oauth_nonce=123456789012345678901234567890