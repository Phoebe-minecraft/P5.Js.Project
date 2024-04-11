function preload(){

}

function setup(){
    canvas = createCanvas(400,300);
    canvas.position(425,200);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = ""
}

function draw(){
   
    push();
    translate(width,0);
    scale(-1, 1);
    tint(tintColor)
    image(video, 0, 0, 400, 300);
    
    pop();

}

function applyFilter(){
    tintColor=document.getElementById("colour").value;
}

function ss(){
    save("save.png")
}











