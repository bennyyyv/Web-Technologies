//variables
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8"];
var blankImagePath = "assets/blank.png";
var actualImages = new Array();

//blank images
function printBlanks() {
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
}

//random image array
function createRandomImageArray() {
    var actualImagePath = ["assets/puppy.jpg", "assets/snake.png", "assets/kitten.png", "assets/lion.png", "assets/pig.jpg"];
    var count = [0,0];

    while(actualImages.length < 10) {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

//flip image
function flipImage(number) {
    document.getElementById(imageTags[number]).src= actualImages[number];
}
