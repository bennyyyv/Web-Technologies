var myViewfinderArray = new Array();
var count = 0;

class ViewFinder
{

  constructor(title, image, description, author, year)
  {
    this.title = title;
    this.image = image;
    this.description = description;
    this.author = author;
    this.year = year;
  }

  get theTitle()
  {
    return this.title;
  }

  get theImage()
  {
    return this.image;
  }

  get theDescription()
  {
  return this.description;
  }

  get theAuthor()
  {
  return this.author;
  }

  get theYear()
  {
  return this.year
  }
}

function initializeArray()
{

  var myArray1 = new Viewfinder("Og Lake" , "images/1.jpg" , "Og Lake in Mount Assiniboine Provincial Park.","Taken by Ben Vanderbosch" ,"2019");
  var myArray2 = new Viewfinder("Athabasca Falls" , "images/2.jpg" , "Athabasca Falls near Jasper.","Taken by Ben Vanderbosch" ,"2019");
  var myArray3 = new Viewfinder("Mount Blackburn" , "images/3.jpg" , "Mount Blackburn in Wrangell St. Elias National Park.","Taken by Ben Vanderbosch" ,"2018");
  var myArray4 = new Viewfinder("Zion National Park" , "images/4.jpg" , "The enterance to Zion National Park.","Taken by Ben Vanderbosch" ,"2020");
  var myArray5 = new Viewfinder("Angel's Landing" , "images/5.jpg" , "Angel's Landing in Zion National Park.","Taken by Ben Vanderbosch" ,"2020");

  myViewfinderArray.push(myArray1);
  myViewfinderArray.push(myArray2);
  myViewfinderArray.push(myArray3);
  myViewfinderArray.push(myArray4);
  myViewfinderArray.push(myArray5);
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = logo.theTitle;
    document.getElementById("author").innerHTML = logo.theAuthor;
    document.getElementById("description").innerHTML = logo.theDescription;
    document.getElementById("year").innerHTML = logo.theYear;
    document.getElementById("image").src = logo.theImage;
}
