function update(myValue)
{
    var button1 = document.getElementById("1").innerHTML;
    var button2 = document.getElementById("2").innerHTML;
    if(myValue == 1 && button1 == "First")
    {
        document.getElementById("1").innerHTML = "Third";
    }
    else if(myValue == 2 && button2 == "Second")
    {
        document.getElementById("2").innerHTML = "Fourth";
    }
}