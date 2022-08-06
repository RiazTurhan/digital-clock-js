function display (){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var sections = document.getElementById("sections");

    if(hrs >= 12){
        sections.innerHTML = "PM"; 
    } else {
        sections.innerHTML = "AM ";
    }

    if(hrs > 12){
        hrs = hrs - 12
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("secound").innerHTML = sec;
}

setInterval(display, 10);