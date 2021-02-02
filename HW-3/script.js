function chooseAdventure(choice) {
    var answer1 = document.getElementById("1").innerHTML;
    var answer2 = document.getElementById("2").innerHTML;
    if (choice == 1 && answer1 == "Right") {
        document.getElementById("question").innerHTML = "You continue to the right and encounter another hiker! He asks you to walk with him. What will you do?";
        document.getElementById("1").innerHTML = "Walk with him";
        document.getElementById("2").innerHTML = "Walk alone";
    } else if (choice == 2 && answer2 == "Left") {
        document.getElementById("question").innerHTML = "You continue to the left and hear some rustling in the bushes.";
        document.getElementById("1").innerHTML = "Go investigate";
        document.getElementById("2").innerHTML = "Wait for the rustling to go away";
    } else if (choice == 1 && answer1 == "Walk with him") {
        document.getElementById("question").innerHTML = "You decide to walk with the man. Later, you stop for a water break and discover that your water bottle is empty. The man offers you some of his water.";
        document.getElementById("1").innerHTML = "Accept his offering";
        document.getElementById("2").innerHTML = "Suffer";
    } else if (choice == 2 && answer2 == "Walk alone") {
        document.getElementById("question").innerHTML = "You walk alone and encounter a section of trail has been washed out by a recent storm.";
        document.getElementById("1").innerHTML = "Continue on";
        document.getElementById("2").innerHTML = "Find an alternate route";
    } else if (choice == 1 && answer1 == "Go investigate") {
        document.getElementById("question").innerHTML = "You encounter a bear!";
        document.getElementById("1").innerHTML = "Run!";
        document.getElementById("2").innerHTML = "Stay and fight!";
    } else if (choice == 2 && answer2 == "Wait for the rustling to go away") {
        document.getElementById("question").innerHTML = "The rustling stops and you continue on. You encounter a sketchy looking bridge across a wide ravine.";
        document.getElementById("1").innerHTML = "Cross it";
        document.getElementById("2").innerHTML = "Turn around";
    }
    else if (choice == 1 && answer1 == "Accept his offering") {
        document.getElementById("question").innerHTML = "His water was poisoned." + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes restart";
        document.getElementById("2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Suffer") {
        document.getElementById("question").innerHTML = "You die from dehydration." + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes restart";
        document.getElementById("2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Continue on") {
        document.getElementById("question").innerHTML = "You slip and die." + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes restart";
        document.getElementById("2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Find an alternate route") {
        document.getElementById("question").innerHTML = "You find a safe alternate route and reach your campsite." + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes restart";
        document.getElementById("2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Run!") {
        document.getElementById("question").innerHTML = "Bears are faster than humans. You are dead." + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes restart";
        document.getElementById("2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Stand and fight!") {
        document.getElementById("question").innerHTML = "Bears are stronger than humans. You are dead." + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes restart";
        document.getElementById("2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Cross it") {
        document.getElementById("question").innerHTML = "You make it across and reach your campsite safely!" + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes restart";
        document.getElementById("2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Turn around") {
        document.getElementById("question").innerHTML = "You turn around and make it back to your car safely." + "<br>Restart?";
        document.getElementById("1").innerHTML = "Yes restart";
        document.getElementById("2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("question").innerHTML = "You've been cooped up inside for months as a result of COVID and one of your friends suggests that a weekend alone in the woods would be good for your mental heath.";
        document.getElementById("1").innerHTML = "Let's Go!";
        document.getElementById("2").innerHTML = "I hate bugs.";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Thanks for playing!";

    }


}
