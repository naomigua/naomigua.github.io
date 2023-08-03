document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu__item");
    menuItems.forEach(item => {
      item.addEventListener("click", function(e) {
        e.preventDefault();
        const sectionUrl = this.getAttribute("data-url");
        const callMethod = "GET";
  
        /*You can add a loader function here if needed*/
  
        fetch(sectionUrl, {
          method: callMethod
        })
        .then(response => response.text())
        .then(htmlReturned => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlReturned, "text/html");
          const mainContent = doc.querySelector("main").innerHTML;
          document.querySelector(".content--new").innerHTML = mainContent;
          /* Remove Loader if used */
        })
        .catch(error => {
          console.error("Error fetching content:", error);
          /* Handle error and remove Loader if used */
        });
      });
    });
  });
  