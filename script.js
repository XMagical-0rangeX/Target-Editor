//Simple pant

//setup canvas and graphics conxext
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//global variables

let circ = {
    x: 400,
    y: 300,
    r: 50,
    c: "black",
    l:1,
    w: 5,
}

//main program loop (60 fps)
requestAnimationFrame(loop);
function loop () {
    ctx.fillStyle="white";
    ctx.fillRect(0,0,cnv.width,cnv.height);

    ctx.lineWidth = circ.w;
    ctx.strokeStyle = circ.c;
    ctx.beginPath();
    ctx.arc(circ.x, circ.y, circ.r, 0, 2 * Math.PI);//circle with center (100,500) and radius 50
    ctx.stroke();

    
   // if (circ.l > 1){
       let drad = circ.r/circ.l;
        for(let tad = 1; tad <= circ.l; tad++){
            ctx.lineWidth = circ.w;
            ctx.strokeStyle = circ.c;
            ctx.beginPath();
            ctx.arc(circ.x, circ.y, drad*tad, 0, 2 * Math.PI);//circle with center (100,500) and radius 50
            ctx.stroke();
        }
    //}

    requestAnimationFrame(loop);
}

// document event stuff



//coloor events
let xEl = document.getElementById("xbtn");
let yEl = document.getElementById("ybtn");
let rEl = document.getElementById("rbtn");
let lEl = document.getElementById("nbtn");
let wEl = document.getElementById("wbtn");
let cool = document.getElementById("colorpick");

xEl.addEventListener("input", set);
yEl.addEventListener("input", set);
rEl.addEventListener("input", set);
wEl.addEventListener("input", set);
lEl.addEventListener("input", set);
cool.addEventListener("change", changecooler);


function changecooler(){
    circ.c = cool.value;
}
function set(){
    circ.x = +xEl.value;
    circ.y = +yEl.value;
    circ.r = +rEl.value;
    circ.l = +lEl.value;
    circ.w = +wEl.value;
    
    if (circ.w < 1){
        wEl.value = 1;
        circ.w = 1;
    } else if (circ.w > 100){
        wEl.value = 100;
        circ.w = 100;
    }
    if (circ.x < 0){
        xEl.value = 0;
        circ.x = 0;
    } else if (circ.x > 800){
        xEl.value = 800;
        circ.x = 800;
    }
    if (circ.y < 0){
        yEl.value = 0;
        circ.y = 0;
    } else if (circ.y > 600){
        yEl.value = 600;
        circ.y = 600;
    }
    if (circ.r < 1){
        rEl.value = 1;
        circ.y = 1;
    } else if (circ.r > 1000){
        rEl.value = 1000;
        circ.r = 1000;
    }
    if (circ.l < 0){
        lEl.value = 0;
        circ.l = 0;
    } else if (circ.l > 100){
        lEl.value = 100;
        circ.l = 100;
    }
}