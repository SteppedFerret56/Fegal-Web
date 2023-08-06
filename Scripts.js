function openMenuOnHover(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  function openLink(url) {
    window.location.href = url;
  }

  function openHomePage() {
    window.location.href = "Home page.html";
  }  

  function openUpdatesPage() {
    window.location.href = "Updates.html";
  }


  function openServicesPage() {
    window.location.href = "Services.html";
  }

  function openTravelAdvisoriesPage() {
    window.location.href = "TravelAdvisories.html";
  }