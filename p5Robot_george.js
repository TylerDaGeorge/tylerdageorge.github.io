//to be saved as a .js file
// CHANGE the digits themselves, the 2d shape-type, the number of those shapes, where/how they relate to everyother
//DO NOT CHANGE the stuff in the setup related to the Canvas
function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  // Neck
  stroke(102); // Set stroke to gray
  line(266, 257, 266, 162); // Left
  line(276, 257, 276, 162); // Middle
  line(286, 257, 286, 162); // Right
  // Antennae
  line(276, 155, 246, 112); // Small
  line(276, 155, 306, 56); // Tall
  line(276, 155, 342, 170); // Medium
  // second head neck
  stroke(102); // set line stroke to grey
  line(175,270,250,350); // mid
  line(175,255,250,335); // top
  line(175,285,250,365); // bot
  //second head Antennae
  line(175,270,155,235);
  line(175,270,200,210);
  line(175,270,135,300);
  noStroke(); // gets rid of border line around circles and rects
  fill(102);
  ellipse(246, 112,3,3);
  ellipse(306, 56,3,3);
  ellipse(342, 170,3,3);
  ellipse(155,235,3,3);
  ellipse(200,210,3,3);
  ellipse(135,300,3,3);
  // Body
  noStroke(); // Disable stroke
  fill(102); // Set fill to gray
  ellipse(264, 377, 33, 33); // Antigravity orb
  fill(0); // Set fill to black
  rect(219, 257, 90, 120); // Main body
  fill(255,180,0); // Set fill to gray
  rect(219, 274, 90, 6); // orange stripe
  fill(0); // Set fill to black
  ellipse(276, 155, 45, 45); // Head
  fill(102);
  ellipse(288,150,16,16);
  fill(255); // Set fill to white
  ellipse(288, 150, 14, 14); // Large eye
  fill(255,0,0);
  ellipse(288,150,7,14);
  fill(0); // Set fill to black
  ellipse(288, 150, 4, 14); // Pupil
  fill(255,180,0); // Set fill to light gray
  ellipse(263, 148, 5, 5); // Small eye 1
  ellipse(296, 130, 4, 4); // Small eye 2
  ellipse(305, 162, 3, 3); // Small eye 3
//second eye and neck
  fill(0);
  ellipse(175,270,30,30); // second head
  fill(102);
  ellipse(175,270,13,13) // grey eye socket
  fill(255);
  ellipse(175,270,10,10) // eye white
  fill(255,0,0);
  ellipse(175,270,6,10); // red iris
  fill(0);
  ellipse(175,270,3,10); //black oval pupil
  fill(255,180,0)
  ellipse(165,250,3,3);
  ellipse(155,280,4,4);
  ellipse(201,275,2,2);
  ellipse(194,275,2,2);
  ellipse(199,280,2,2);
  //robo heart
  fill(155);
  rect(275,300,25,40);
  fill(80);
  ellipse(280,305,2,2);
  ellipse(280,312,2,2);
  ellipse(280,319,2,2);
  rect(285,304,11,2);
  rect(285,311,11,2);
  rect(285,318,11,2);
  fill(50);
  rect(278,323,19,15);
  fill(210);
  rect(280,325,15,11);
  stroke(0);
  strokeWeight(0.5);
  fill(100,220,100);
  rect(282,327,2,7);
  rect(285,327,2,7);
  rect(288,327,2,7);
  fill(255,0,0);
  rect(291,327,2,7);
  fill(255,180,0);
  ellipse(303,350,2,2);
  ellipse(252,330,4,4);
  ellipse(245,300,2,2);
  ellipse(267,340,3,3);
  ellipse(236,370,2,2);

}
