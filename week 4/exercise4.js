function myFunction(){
    var element=document.getElementById("id1");
    element.firstChild.nodeValue="New Heading";
    var element2=document.getElementById("id2");
    element2.firstChild.nodeValue="New contents in paragraph";
}

document.addEventListener('click',myFunction);