function setup() {
     let c = createCanvas(windowWidth, windowHeight);
  c.parent("canvas-wrapper");

}

function draw() {


let currentHour = second();
    let hourColor = map(currentHour, 0, 60, 0,255);
    
     let hr= hour();
     let mn= minute();
     let sc= second();
     let d= day();
     let yr= year();
     let mon= month();


clear();
background(mouseY-400,mouseY-400,mouseY-400);

textSize(40);
fill(hourColor);
text(yr+'/'+mon+'/'+d+'/'+hr+':'+mn+':'+sc, mouseX,mouseY);

// if(frameCount % 80 == 0){
text(sc,random(windowWidth),random(windowHeight));

	


push();
stroke(91,91,91);
// strokeWeight(0);
noFill();
ellipse(900,500,sc+100,sc+100);
pop();

push();
translate(900,500);
noStroke();
noFill();
let end1 = map(sc,0,60,0,360);
arc(0,0,10,10,end1);
rotate(-1*end1);
stroke(hourColor);
line(0,0,sc+10,sc+10);
pop();





push()
stroke(61,61,61);
noFill();
ellipse(900,500,sc+200,sc+200);
pop()

push()
translate(900,500);
noStroke();
noFill();
let end2 = map (mn,0,60,0,360);
arc(sc+200,sc+200,0,end2);
arc(0,0,10,10);
rotate(-1*end2);
stroke(hourColor);
ellipse(mn+50,mn+50,30,30);
line(0,0,mn+50,mn+50);
pop()



push()
stroke(31,31,31);
noFill();
ellipse(900,500,sc+300,sc+300);
pop()


push()
translate(900,500);

noStroke();
noFill();
let end3 = map (hr,0,60,0,360);
arc(0,0,100,100,0,end3);
rotate(-1*end3);
stroke(hourColor);
ellipse(hr+100,hr+100,50,50);
line(0,0,hr+100,hr+100);

pop()

for(var i=0; i<=sc; i++){
    stroke(0);
    fill(hourColor);
    if(mouseX>= windowWidth/2){
      ellipse(i+500,i*10,sc+i-50,sc+i-50);  
    }
    else{
        ellipse(i+200,i*18,mn+i-30,mn+i-30);  
    }
}

for(var v=0; v<=sc; v++){
    stroke(0);
    fill(hourColor);
    if(mouseX>= windowWidth/2){
      ellipse(v+300,v*20,sc+v-40,sc+v-40);  
    }
    else{
        ellipse(v+600,v*15,mn+v-50,mn+v-50);  
    }
}

for(var s=0; s<=sc; s++){
    stroke(0);
    fill(hourColor);
    if(mouseX>= windowWidth/2){
      ellipse(s+1200,s*25,sc+s-40,sc+s-40);  
    }
    else{
        ellipse(s+1380,s*35,mn+s-50,mn+s-50);  
    }
}


translate(300,0);
let end4= map(sc,0,30,0,360);
rotate(end4-200);
for(var q=0; q<=sc; q++){
    stroke(0);
    fill(hourColor);
    if(mouseX>= windowWidth/2){
      ellipse(q+1000,q*20,sc+q-45,sc+q-45);  
    }
    else{
        ellipse(q+1300,q*30,mn+q-65,mn+q-65);  
    }
}
// fill(hourColor);
//      noStroke();
//      if(frameCount % 80 == 0){
//      ellipse(random(0, windowWidth),random(0, windowHeight), 50,50);}



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




