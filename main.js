canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var lx, ly;
mouseEvent = "empty";
plineWidth = 2;
color = "black";

canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e){
    color = document.getElementById("preferedColor").value;
    plineWidth = document.getElementById("preferedLineWidth").value;
      mouseEvent = "mousedown";
}

 canvas.addEventListener("mousemove", my_mousemove);

 function my_mousemove(e) {
    currx = e.clientX - canvas.offsetLeft;
    curry = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = plineWidth;
        ctx.moveTo(lx, ly);
        ctx.lineTo(currx, curry);
        ctx.stroke();
    }

     lx = currx;
     ly = curry;
 }

 canvas.addEventListener("mouseup", my_mouseup);

 function my_mouseup(e){
     mouseEvent = "mouseup";
 }

 canvas.addEventListener("mouseleave", my_mouseleave);

 function my_mouseleave(e){
     mouseEvent = "mouseleave";
 }

 function clearCanvas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
 } 