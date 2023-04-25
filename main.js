const button = document.querySelector("#btn");
const box1 = document.querySelector(".box.box1");
const box2 = document.querySelector(".box.box2");
const box3 = document.querySelector(".box.box3");

button.addEventListener("click" , () => {
    if(box2.getAttribute("class") === "box box2"){
        box2.setAttribute("class","box box2 box2Move");
    } else {
        box2.setAttribute("class","box box2");
    }

    if(box1.getAttribute("class") === "box box1"){
        setTimeout(function() {
            box1.setAttribute("class","box box1 box1Move");
        },1000)
    } else {
        setTimeout(function() {
            box1.setAttribute("class","box box1");
        },1000)
    }

    if(box3.getAttribute("class") === "box box3"){
        setTimeout(function() {
            box3.setAttribute("class","box box3 box3Move");
        },2000)
    } else {
        setTimeout(function() {
            box3.setAttribute("class","box box3");
        },2000)
    }
})