let myArray = [];
let value = [];
let mycolor= [];
let e = 20;
let clicks = [];
let canvas2;



let music_name1 = "Sunny Rain.mp3"
let music_name2 = "Losing My Cool.mp3"
let music_name3 = "Soft Sweets.mp3"
let music_name4 = "Seaside Motel.mp3"
let current_song = music_name1;

let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio();
window.onload = playSong;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  canvas2 = createGraphics(windowWidth,windowHeight);
  colorMode=(HSB);
}

function draw() {
  background(220);

  canvas2.stroke(mouseX,mouseY,255);
    if (mouseIsPressed === true) {
    canvas2.line(mouseX, mouseY, pmouseX, pmouseY);}
  
  push(); 
  noStroke();
  fill(0);
  ellipse(mouseX,mouseY,20,20);
  pop();
  
  for(i = 0; i < clicks.length; i++){
    fill(255);
    ellipse(clicks[i][0], clicks[i][1], 20, 20);
  }
 
  let row = 0;
  
  let distance = dist(mouseX, mouseY,200,200);
  for(i = 0; i < myArray.length; i ++){
    let value = color (255-i*5+mouseY,255-i*5+mouseX,100+i*3+mouseX-distance);
    let mycolor = color (200-i*3+mouseX, 255-i*8+mouseY,i-mouseY+distance);
    noStroke();
    
    let x = (i - (8 * row)) * 20;
    let y = 20 + (20 * row);
    if(i == 0){
      x = 40;
    }
    
    if(myArray[i] == "a"){
      fill(value);
      ellipse(x+100+mouseX,y,e,e);
    }else{ 
      fill(mycolor);
      rect(x+50,y+mouseY,e,e);
    }
    
    if(i % 8 == 0 && i != 0){ 
      row = row + 1;
    }
    
  }
  
 image(canvas2,0,0)
}


function playSong(){

  let play_btn = document.querySelector("#play");
  let prev_btn = document.querySelector("#pre");
  let next_btn = document.querySelector("#next");
  let range = document.querySelector("#range");
  let play_img = document.querySelector("#play_img")

    // song.src = current_song;
    console.log(song)
    
    
    play_btn.addEventListener('click',function(){
        if(!isPlaying){

            song.src = current_song
            song.play();
            isPlaying = true;
            total_time = song.duration;
            range.max = total_time;
            play_img.src = "pause.png";
        }else{
            song.pause();
            isPlaying = false;
            play_img.src = "play.png";
        }

    })

    next_btn.addEventListener('click',function(){
      if(current_song == music_name2){
        let oldName = document.getElementById("song2");
        oldName.style.display = "none";
        let oldCover = document.getElementById("two");
        oldCover.style.display = "none";
        
        let name = document.getElementById("song3");
        name.style.display = "inline";
        let cover = document.getElementById("three");
        cover.style.display = "inline";
        
        current_song = music_name3
        
      } else if(current_song == music_name3){
        let oldName = document.getElementById("song3");
        oldName.style.display = "none";
        let oldCover = document.getElementById("three");
        oldCover.style.display = "none";
        
        let name = document.getElementById("song4");
        name.style.display = "inline";
        let cover = document.getElementById("four");
        cover.style.display = "inline";

        current_song = music_name4
      } else if (current_song == music_name1){
        let oldName = document.getElementById("song1");
        oldName.style.display = "none";
        let oldCover = document.getElementById("one");
        oldCover.style.display = "none";
        
        let name = document.getElementById("song2");
        name.style.display = "inline";
        let cover = document.getElementById("two");
        cover.style.display = "inline";
        
        current_song = music_name2;
      } else if (current_song == music_name4){
        let oldName = document.getElementById("song4");
        oldName.style.display = "none";
        let oldCover = document.getElementById("four");
        oldCover.style.display = "none";
        
        let name = document.getElementById("song1");
        name.style.display = "inline";
        let cover = document.getElementById("one");
        cover.style.display = "inline";
        
        current_song = music_name1;
      }
      song.src = current_song
      song.play();
        console.log("Next!")
        console.log(current_song)
    })

 

prev_btn.addEventListener('click',function(){
      if(current_song == music_name2){
        
        let oldName = document.getElementById("song2");
        oldName.style.display = "none";
        let oldCover = document.getElementById("two");
        oldCover.style.display = "none";
        
        let name = document.getElementById("song1");
        name.style.display = "inline";
        let cover = document.getElementById("one");
        cover.style.display = "inline";
        
        current_song = music_name1
        
      } else if(current_song == music_name3){
        let oldName = document.getElementById("song3");
        oldName.style.display = "none";
        let oldCover = document.getElementById("three");
        oldCover.style.display = "none";
        
        let name = document.getElementById("song2");
        name.style.display = "inline";
        let cover = document.getElementById("two");
        cover.style.display = "inline";

        current_song = music_name2
      } else if (current_song == music_name1){
        let oldName = document.getElementById("song1");
        oldName.style.display = "none";
        let oldCover = document.getElementById("one");
        oldCover.style.display = "none";
        
        let name = document.getElementById("song4");
        name.style.display = "inline";
        let cover = document.getElementById("four");
        cover.style.display = "inline";
        
        current_song = music_name4;
      } else if (current_song == music_name4){

        let oldName = document.getElementById("song4");
        oldName.style.display = "none";
        let oldCover = document.getElementById("four");
        oldCover.style.display = "none";
        
        let name = document.getElementById("song3");
        name.style.display = "inline";
        let cover = document.getElementById("three");
        cover.style.display = "inline";
        
        current_song = music_name3;
      }





      song.src = current_song
      song.play();
        console.log("Next!")
        console.log(current_song)
    })





       song.addEventListener('ended',function(){
            song.currentTime = 0
            song.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "play.png";
        })
        song.addEventListener('timeupdate',function(){
            range.value = song.currentTime;
        })
        range.addEventListener('change',function(){
            song.currentTime = range.value;
        })
}




function mousePressed(){
  clicks.push([mouseX,mouseY]);
}



function mouseDragged() {
  if (value === myArray.push("a")) {
    value = value;
  } else {
    value = myArray.push("b");
  }
}

function keyPressed(){
  if(key == "1"){
    e=e+5
  }else if(key == "2",e>0){
    e=e-2
  }

}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
