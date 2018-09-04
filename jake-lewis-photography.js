document.addEventListener('DOMContentLoaded', function () {
      const params = {
        "method_publicPhotos": "method=flickr.people.getPublicPhotos",
        "method_albumPhotos": "method=flickr.photosets.getPhotos",
        "api_key": "&api_key=b69f4589bad77785ad00bd9e625976bf",
        "user_id": "&user_id=157366842@N07",
        "per_page": "&per_page=300",
        "privacy_filter": "&privacy_filter=5",
        "extras": "&extras=description,date_upload,date_taken,last_update,url_t,url_m,url_l,url_o",
        "format": "&format=json",
        "nojsoncallback": "&nojsoncallback=1",
        "secret": "c528a760ce45c265",
        "photoset_id": "&photoset_id=72157667590992297"
    };

    const link_publicPhotos = `https://api.flickr.com/services/rest/?${params.method_publicPhotos}${params.api_key}${params.user_id}${params.extras}${params.per_page}${params.format}${params.nojsoncallback}`;
    const link_albumPhotos = `https://api.flickr.com/services/rest/?${params.method_albumPhotos}${params.api_key}${params.photoset_id}${params.user_id}${params.extras}${params.per_page}${params.format}${params.nojsoncallback}`;


    // fetching all pictures in my flickr account
    fetch(link_publicPhotos)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let myPhotos = document.getElementById('myPhotos'); //my Photos is a section containing the populated photos
            let publicPhotosArray = data.photos.photo;

            //Add photos from API to myPhotos (parent element)
            for (let i = 0; i < publicPhotosArray.length; i++) {

                // Adding image
                let photo_element = document.createElement("img"); //
                photo_element.src = publicPhotosArray[i].url_l; //change url_l to url_o for origonal size or url_m for a medium size
                photo_element.classList.add('materialboxed', 'pictures', 'z-depth-4'); // materialboxed adds zoom on pictures, z-depth-4 add shadow
                myPhotos.appendChild(photo_element);
            }
            materialboxedIntances();
        })

    //fetching pictures from specific album
    //assigns album photos to paralPics elements (paralPics0 & paralPics1)
    fetch(link_albumPhotos)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let photoArray = data.photoset.photo;
            for (let i = 0; i < photoArray.length; i++) {
                let paralPic = document.getElementById(`paralPic${i}`);
                console.log(`paralPic${i}`);
                let photo = photoArray[i].url_o;
                paralPic.setAttribute('src', photo);
                paralPic.style.cssText = `max-width: 100vw; min-width: 25%`;
            }
            parallaxInstances();
        })

    // Initialize materialboxed
    function materialboxedIntances() {
        let materialBoxedElements = document.querySelectorAll('.materialboxed');
        let materialBoxedInstances = M.Materialbox.init(materialBoxedElements);

        let scrollSpyElements = document.querySelectorAll('.scrollspy');
        let scrollSpyOptions = {scrollOffset: 0} 
        let scrollSpyInstances = M.ScrollSpy.init(scrollSpyElements, scrollSpyOptions);

        // let pushPinElements = document.querySelectorAll('.pushpin');

    }

    // Initialize parallax 
    function parallaxInstances() {
        let elem = document.querySelectorAll('.parallax');
        let instances = M.Parallax.init(elem);
    }
});
//calculate height of camera picture