function myFunction(){
    var element=document.getElementById('circle');
    element.style.opacity=1;

}

function myLoadFunction(){
    var element=document.getElementById('circle');
    element.addEventListener('click',myFunction);
    element.style.opacity=0.5;
}
document.addEventListener('DOMContentLoaded',myLoadFunction);