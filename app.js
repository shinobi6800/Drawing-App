

window.addEventListener("load",()=>{
console.log("Page Loaded....")
})
alert("Hello Welcome to Artboard v1.0.0.0");
const canvas=document.getElementById("canvasarea");
const ctx=canvas.getContext("2d");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
//vars
let painting=false;
function startPos(e){
    painting=true;
    console.log("Painting");
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY)
    draw(e);
};
function endPos(){
    painting=false;
    console.log("Not Painting anymore..");
}
function draw(e){
if(!painting){
    return;
}else{
    
   ctx.lineWidth=6;
   ctx.lineCap="round";
   ctx.lineTo(e.clientX,e.clientY);
   ctx.strokeStyle="purple";
   ctx.stroke();
   ctx.beginPath();
   ctx.moveTo(e.clientX,e.clientY)
}
}
//EventListerners;
canvas.addEventListener("mousedown",startPos);
canvas.addEventListener("mouseup",endPos);
canvas.addEventListener("mousemove",draw);



