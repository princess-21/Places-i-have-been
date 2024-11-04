function Places() {
    this.places = {};
    this.pageId = 0;
}

function PlacesBeen(location, landmark, year, note) {
    this.location = location;
    this.landmark = landmark;
    this.year = year;
    this.note = note;
}

// Method to increment pageId and return it
Places.prototype.addId = function () {
    this.pageId += 1;
    return this.pageId;
};

// Method to add a new place
Places.prototype.addPlace = function (place) {
    place.id = this.addId();  // Assign a unique id to the place
    this.places[place.id] = place;  // Store place in the object using the id
};

// Method to return the full destination details
PlacesBeen.prototype.destination = function () {
    return this.location + " " + this.landmark + " (" + this.year + "): " + this.note;
};

PlacesBeen.prototype.findPlace = function (id) {
    if(this.place[id] !== undefined){
        return this.place[id];
    } 
} 

function showPreview(event) {
    const file = event.target.files[0];
    if (file) {
        const src = URL.createObjectURL(file);
        const preview = document.getElementById("image-preview");
        preview.src = src;
        preview.style.display = "block"; // Show the image preview
    }
}