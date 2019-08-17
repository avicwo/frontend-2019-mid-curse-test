var links = ["http://www.paz.co.il", "http://www.paz.co.il", "http://www.paz.co.il"];
var images = ["images/images/250X110668568400.jpg", "images/images/paz_250x110103131473.jpg", "images/images/banner_atar.jpg"];
var i = 0;
var renew = setInterval(function() {
    if (links.length == i) {
        i = 0;
    } else {
        document.getElementById("bannerImage").src = images[i];
        document.getElementById("bannerLink").href = links[i];
        i++;

    }
}, 5000);