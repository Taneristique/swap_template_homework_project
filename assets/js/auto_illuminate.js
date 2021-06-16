if(parseInt(localStorage['count'])%2==0){ /*Night mode will selected when the modulus of localstorage value is 0 */
    document.querySelector('body').style.backgroundColor="black"
    document.querySelector('body').style.color="white"
    toggle.classList.toggle('active') /*Since night mode selected user will see moon.*/
    x=document.querySelectorAll(".bgimg")
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
      
    }
}
else{ /*Otherwise user will use this site in day mode.*/
 document.querySelector('body').style.backgroundColor="white"
 document.querySelector('body').style.color="black"

 x=document.querySelectorAll(".bgimg")
 for (i = 0; i < x.length; i++) {
     x[i].style.color = "lightyellow";
 
 }}