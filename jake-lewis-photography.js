document.addEventListener('DOMContentLoaded', function () {

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

                    // Adding image
                    let photo_element = document.createElement("img");
                    let photo = data.photos.photo[i].url_m;
                    photo_element.setAttribute('src', photo);
                    photo_element.classList.add('materialboxed');

                    //margin: auto auto centers photos within dev container
                    photo_element.style.cssText = `align-self: center; cursor: pointer; max-width: 100%; margin: auto auto`;
                    myPhotos.appendChild(photo_element);
                }
                photos_displayed();
            })
    });

    function photos_displayed() {
        let elems = document.querySelectorAll('.materialboxed');
        let instances = M.Materialbox.init(elems);
    }
});
// key b69f4589bad77785ad00bd9e625976bf
// Secret: c528a760ce45c265