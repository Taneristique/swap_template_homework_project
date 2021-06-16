const toggle=document.querySelector('.toggle')
toggle.addEventListener('click', function() { 
    this.classList.toggle('active')/*When click on .toogle class object
become active, remember .toggle.active:before selector in navbar.css
*/   
    if(localStorage['count']==null){
        localStorage['count']=1
    }
    else{
        localStorage['count']++
            if(parseInt(localStorage['count'])%2==0){  
                   document.querySelector('body').style.backgroundColor="black"
                   document.querySelector('body').style.color="white"
                   this.style.borderColor="white"
                   this.style.color="white"
                   x=document.querySelectorAll(".bgimg")
                   for (i = 0; i < x.length; i++) {
                       x[i].style.color = "white";
                     
                   }
               }
            else{
                document.querySelector('body').style.backgroundColor="white"
                document.querySelector('body').style.color="black"
    
                this.style.borderColor="black"
                this.style.color="black"
                x=document.querySelectorAll(".bgimg")
                for (i = 0; i < x.length; i++) {
                    x[i].style.color = "lightyellow";
                
                }
            }
    }

})

/*I used local storage to make page remember theme preference because session data deletes when browser is closed and does not work when page closed.
To see localStorage value please write localstorage to console or simply visit application/storage/local storage on your browser. 
*/

