




  if (window.innerWidth > 1139) {
   
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let navBarWrapper = document.getElementById("navbar-wrapper");
 
 
 
  
  
  if ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   
    navBarWrapper.style.paddingTop = "8px ";
    navBarWrapper.style.paddingBottom = "8px ";
   navBarWrapper.style.borderBottomColor="#f3f3f3"

  } else {
    navBarWrapper.style.paddingTop = "24px ";
    navBarWrapper.style.paddingBottom = "24px ";
    navBarWrapper.style.borderBottomColor="transparent";
    
    
  }
}
  }

  if (window.innerWidth < 1139){
    function menu() {
      let navManuWrapper = document.getElementById("nav-manu-wrapper");
      let closeMenu = document.getElementById("close-menu-icon");
      let hamBar = document.getElementById("hambar");
      if (navManuWrapper.className=== "nav-list-wrapper") {
        navManuWrapper.className =("open-manu")
        hamBar.style.display=("none");
        closeMenu.style.display=("block")
       
             
            
      } else {
  
       navManuWrapper.className ="nav-list-wrapper"
       hamBar.style.display=("block");
        closeMenu.style.display=("none")
                    
      }
  
      
         
    }

    window.onscroll = function() {
      let navManuWrapper = document.getElementById("nav-manu-wrapper");
      let closeMenu = document.getElementById("close-menu-icon");
      let hamBar = document.getElementById("hambar");
      navManuWrapper.className ="nav-list-wrapper"
      hamBar.style.display=("block");
       closeMenu.style.display=("none");

    };
   
  
  }

  

  
  
  