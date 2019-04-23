// $(window).scroll(function(){
//     console.log('hi');
// });

//default Open currentPlayers
document.getElementById("defaultTab").click();
  console.log('hi');

function openTab(evt, btnName) {
    // Declare all variables
    var i, players, tabLinks;
  
    // Get all elements with class="players" and hide them
    players = document.getElementsByClassName("players");
    for (i = 0; i < players.length; i++) {
        players[i].style.display = "none";
    }

  
    // Get all elements with class="links" and remove the class "btn__full"
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("btn__full");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(btnName).style.display = "block";
    evt.currentTarget.btnName += " btn__full";

    
}
