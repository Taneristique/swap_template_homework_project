    if(localStorage.getItem('counter')==2){
        document.querySelector('body').style.backgroundColor="black"
        document.querySelector('body').style.color="white"
        document.querySelector('.toggle').classList.toggle('active') /*If page is dark themed .toggle.active:before selector's content will be showed.
        I lived trouble with changing toogle to moon automatically when them is darked.*/

    }
    else{
        document.querySelector('body').style.backgroundColor="white"
        document.querySelector('body').style.color="black"
}
/*This code will set dark or white theme with correct toogle according to localStorage value*/