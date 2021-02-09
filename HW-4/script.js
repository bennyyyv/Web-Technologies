//Start
function rightOrLeft()
{
  var myChoice = document.getElementById("rightorleft").value;
  var myQuestion = document.getElementById("question");
  if(myChoice === "Right")
  {
    document.getElementById("rightorleft").style.display="none";
    document.getElementById("rightorleftbtn").style.display="none";

    document.getElementById("himoralone").style.display="block";
    document.getElementById("himoralonebtn").style.display="block";

    myQuestion.innerHTML = "You continue to the right and encounter another hiker! He asks you to walk with him. What will you do?";
  }

else if (myChoice === "Left")
{
  document.getElementById("rightorleft").style.display="none";
  document.getElementById("rightorleftbtn").style.display="none";

  document.getElementById("investigateorwait").style.display="block";
  document.getElementById("investigateorwaitbtn").style.display="block";

  myQuestion.innerHTML = "You continue to the left and hear some rustling in the bushes. Will you investigate or wait for the rustling to go away?";
}

else
{
  myQuestion.innerHTML = "Invalid Answer";
}

}
//
///
///// Start -> Right ----------------------
///
//
function himOrAlone()
{
  var answer2 = document.getElementById("himoralone").value;
  var myQuestion = document.getElementById("question");
  if(answer2 === "Walk with him")
  {
    document.getElementById("himoralone").style.display="none";
    document.getElementById("himoralonebtn").style.display="none";

    document.getElementById("acceptorsuffer").style.display="block";
    document.getElementById("acceptorsufferbtn").style.display="block";

    document.getElementById("mainImage").src = "./assets/secondimage.jpg"
    myQuestion.innerHTML = "You decide to walk with the man. Later, you stop for a water break and discover that your water bottle is empty. The man offers you some of his water. Will you accept it or suffer?"
  }
  else if(answer2 === "Walk alone")
  {
    document.getElementById("himoralone").style.display="none";
    document.getElementById("himoralonebtn").style.display="none";

    document.getElementById("continueoralternate").style.display="block";
    document.getElementById("continueoralternatebtn").style.display="block";
    document.getElementById("mainImage").src = "./assets/thirdimage.jpg"

    myQuestion.innerHTML = "You walk alone and encounter a section of trail has been washed out by a recent storm. Will you continue on or find an alternate route?"
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> Right -> Accept it -------------------------
///
//
function acceptItOrSuffer()
{
  var answer3 = document.getElementById("acceptorsuffer").value;
  var myQuestion = document.getElementById("question");
  if(answer3 === "Accept it")
  {
    document.getElementById("acceptorsuffer").style.display="none";
    document.getElementById("acceptorsufferbtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./assets/dead.jpg"
    myQuestion.innerHTML = "His water was poisoned."
  }
  else if(answer3 === "Suffer")
  {
    document.getElementById("acceptorsuffer").style.display="none";
    document.getElementById("acceptorsufferbtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./assets/dead.jpg"

    myQuestion.innerHTML = "You die from dehydration."
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> Right -> Walk Alone ---------------------------
///
//
function continueOrAlternate()
{
  var answer4 = document.getElementById("continueoralternate").value;
  var myQuestion = document.getElementById("question");
  if(answer4 === "Continue")
  {
    document.getElementById("continueoralternate").style.display="none";
    document.getElementById("continueoralternatebtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./assets/dead.jpg"
    myQuestion.innerHTML = "You slip and die."
  }
  else if(answer4 === "Find an alternate route")
  {
    document.getElementById("continueoralternate").style.display="none";
    document.getElementById("continueoralternatebtn").style.display="none";

    document.getElementById("restart").style.display="block";
    document.getElementById("mainImage").src = "./assets/campsite.jpg"

    myQuestion.innerHTML = "You find a safe alternate route and reach your campsite!"
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> left
///
//
function investigateOrWait()
{
  var answer5 = document.getElementById("investigateorwait").value;
  var myQuestion = document.getElementById("question");
  if(answer5 === "Investigate")
  {
    document.getElementById("investigateorwait").style.display="none";
    document.getElementById("investigateorwaitbtn").style.display="none";

    document.getElementById("runorfight").style.display="block";
    document.getElementById("runorfightbtn").style.display="block";

    document.getElementById("mainImage").src = "./assets/bear.jpg"
    myQuestion.innerHTML = "You encounter a bear! Will you run or fight?!"
  }
  else if(answer5 === "Wait")
  {
    document.getElementById("investigateorwait").style.display="none";
    document.getElementById("investigateorwaitbtn").style.display="none";

    document.getElementById("crossorturn").style.display="block";
    document.getElementById("crossorturnbtn").style.display="block";

    document.getElementById("mainImage").src = "./assets/bridge.jpg"
    myQuestion.innerHTML = "The rustling stops and you continue on. You encounter a sketchy looking bridge across a wide ravine."
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> Left -> Investigate
///
//
function runOrFight()
{
  var answer6 = document.getElementById("runorfight").value;
  var myQuestion = document.getElementById("question");
  if(answer6 === "Run")
  {
    document.getElementById("runorfight").style.display="none";
    document.getElementById("runorfightbtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./assets/dead.jpg"
    myQuestion.innerHTML = "Bears are faster than humans. You are dead."
  }
  else if(answer6 === "Fight")
  {
    document.getElementById("runorfight").style.display="none";
    document.getElementById("runorfightbtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./assets/dead.jpg"
    myQuestion.innerHTML = "Bears are stronger than humans. You are dead."
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> Left -> Wait
///
//
function crossOrTurn()
{
  var answer7 = document.getElementById("crossorturn").value;
  var myQuestion = document.getElementById("question");
  if(answer7 === "Cross")
  {
    document.getElementById("crossorturn").style.display="none";
    document.getElementById("crossorturnbtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./assets/campsite.jpg"
    myQuestion.innerHTML = "You make it across and reach your campsite safely!"
  }
  else if(answer7 === "Turn around")
  {
    document.getElementById("crossorturn").style.display="none";
    document.getElementById("crossorturn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./assets/twopaths.png"
    myQuestion.innerHTML = "You turn around and make it back to the start of the trail safely."
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
