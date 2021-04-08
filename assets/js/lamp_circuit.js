document.querySelector('.toggle').addEventListener('click', function() { this.classList.toggle('active');});/*When click on .toogle class object
become active, remember .toggle.active:before selector in navbar.css
*/
var counter
function work(counter){
    if (counter==null){/*if counter has no value assign it to 1*/
        counter=1;
    }
    var toggle=document.querySelector('.toggle')
        toggle.addEventListener('click',function(){
            if(counter%2==1){  
            document.querySelector('body').style.backgroundColor="black"
            document.querySelector('body').style.color="white"
            toggle.style.borderColor="white"
            toggle.style.color="white"
            x=document.querySelectorAll(".bgimg")
            for (i = 0; i < x.length; i++) {
                x[i].style.color = "white";
              
            }
            counter=2
            localStorage.setItem('counter', counter);
            counter=localStorage.getItem('counter')

            }
            else{
                document.querySelector('body').style.backgroundColor="white"
                document.querySelector('body').style.color="black"

                toggle.style.borderColor="black"
                toggle.style.color="black"
                x=document.querySelectorAll(".bgimg")
                for (i = 0; i < x.length; i++) {
                    x[i].style.color = "lightyellow";
                
                }
                counter=1
                localStorage.setItem('counter', counter);
                counter=localStorage.getItem('counter')
            }
            })

}
work(count)/*This way count parameter will be restored on user's computer and this parameter's value will not change unless user click .toogle class*/ 
var count = localStorage.getItem(counter)

/*I used local storage to make page remember theme preference because session data deletes when browser is closed and does not work when page closed.
To see localStorage value please write localstorage to console or simply visit application/storage/local storage on your browser. 
*/

