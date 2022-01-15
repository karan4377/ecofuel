function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
    x.className += " responsive";   
} else {
    x.className = "topnav";
}
}

function openCategory(evt, categoryName) {
    var i, x, tablink;
    x = document.getElementsByClassName("category");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active-tab", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active-tab";
  }