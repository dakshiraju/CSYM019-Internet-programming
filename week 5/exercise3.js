
function myLoadFunction(){
    var element=document.getElementById('circle');
    element.style.opacity = 0.5;
}

function myNewFunction()
{
    var element=document.getElementById("circle");
    element.style.backgroundColor='blue';
    
}

document.addEventListener('DOMContentLoaded',myLoadFunction);