function myKeyDown(){
    //var element = document.getElementById('heading');
    var element=document.getElementById('heading');
    var positionLeft=element.offsetLeft;
    element.style.left='200px';
    console.log(positionLeft-100+'px')
    }

    function myLoadEvent(){
        document.addEventListener('keydown', myKeyDown);
    }

    document.addEventListener('DOMContentLoaded',myLoadEvent);

