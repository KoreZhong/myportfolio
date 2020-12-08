var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns1 = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contaians('show')) {
        openDropdown1.classList.remove('show');
      }
    }
  }
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
}

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



// Close the dropdown menu if the user clicks outside of it





