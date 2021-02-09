//QUESTION 1
function getChoice1()
{
  var myChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("question");
  if(myChoice === "Right")
  {
    document.getElementById("choice").style.display="none";
    document.getElementById("btnSubmit").style.display="none";

    document.getElementById("choice2").style.display="block";
    document.getElementById("btnSubmit2").style.display="block";

    myQuestion.innerHTML = "You continue to the right and encounter another hiker! He asks you to walk with him. What will you do?";
  }

else if (myChoice === "Left")
{
  myQuestion.innerHTML = "You continue to the left and hear some rustling in the bushes.";
}

else
{
  myQuestion.innerHTML = "Invalid Answer";
}

}
//
///
///// QUESTION 2
///
//
function getChoice2()
{
  var answer2 = document.getElementById("choice2").value;
  var myQuestion = document.getElementById("question");
  if(answer2 === "Walk with him")
  {
    document.getElementById("choice2").style.display="none";
    document.getElementById("btnSubmit2").style.display="none";

    document.getElementById("choice3").style.display="block";
    document.getElementById("btnSubmit3").style.display="block";

    document.getElementById("mainImage").src = "secondimage.jpg"
    myQuestion.innerHTML = "Right"
  }
  else if(answer2 === "Walk alone")
  {
    myQuestion.innerHTML = "Left"
  }
}
//
///
///// QUESTION 3
///
//
