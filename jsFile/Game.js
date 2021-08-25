/*this class contains all the function for different game states like start play etc telling how 
the game state will be changing and ahow eacj level should appear in the game (according to the level and gamestate)*/

class Game{
    constructor(){   
     this.playButton = createButton(" PLAY ");
     this.play = createButton(' NEXT LEVEL');
     this.play.hide();
     this.restartLevel = createButton('RESTART');
     this.restartLevel.hide();
    }

 start(){
     
   //background(this.homescreenImg);
   textSize(25);
   fill('black');
   text('HOW TO PLAY : ',displayWidth/2 - 700, displayHeight/2 - 250 );
   text('USE ARROW KEYS TO MOVE UP , RIGHT AND LEFT ',displayWidth/2 - 700, displayHeight/2 - 200 );
   text('YOU HAVE TO COLLECT THE GARBAGE AND SEGREGATE THEM TO THE CATEGORY OF BIO , NON BIO  , AND E WASTE: ',displayWidth/2 - 700, displayHeight/2 - 150 );
   text('TO COLLECT GARBAGE TOUCH, AND PRESS B IF YOU THINK IT IS  BIO - DEGRADABLE WASTE' ,displayWidth/2 - 700 , displayHeight/2 - 100 );
   text('PRESS N FOR NON BIO WASTE AND V FOR E WASTE' ,displayWidth/2 - 700 , displayHeight/2 - 50 );
   fill('red');
   text('(if you will press wrong key one life will be reduced out of the three lives and if all three lives are gone you will loose the game )' ,displayWidth/2 - 700 , displayHeight/2 );
   
   this.playButton.position(displayWidth/2 , displayHeight/2 + 100);
   this.playButton.style('color : green');
   this.playButton.style('width', '100px');
   this.playButton.style('height', '50px')

   this.playButton.mousePressed(()=>{
    gameState = 1;
    this.playButton.hide();
    LEVEL = 1;
    warning1 = 2;
       
   })
      

 }
 Play(){

   //if level and gamestate is one then create village scene
   if(LEVEL === 1 && gameState === 1 && levelCompleted === false){
     textSize(20);
     fill('lightGreen');
     text('Bio Waste Collected  : ' + bioScore ,  camera.position.x + 450, runner.y - 400);
     fill('lightPink');
     text('Non Bio Waste Collected  : ' + nonBioScore , camera.position.x + 450 ,  runner.y  - 350);
     fill('lightBlue');
     text('E Waste Collected  : ' + eWasteScore ,  camera.position.x + 450 ,  runner.y  - 300);
     fill('red');
     text('W A R N I N G : ' + warning1,  camera.position.x - 650, runner.y - 400);
     fill('white');
     text('LIVES LEFT : ' + lives ,  camera.position.x - 650, runner.y - 350);
     textSize(25);
     fill('white');
     text('Level :  '+ LEVEL , camera.position.x - 25, runner.y - 400);

     createVillageScene();
     
   }
    
   //if level is 2 and gamestate is one then create city scene
   if(LEVEL === 2 && gameState === 1 && levelCompleted === false){
     textSize(20);
     fill('lightGreen');
     text('Bio Waste Collected  : ' + bioScore ,  camera.position.x + 450, runner.y - 400);
     fill('lightPink');
     text('Non Bio Waste Collected  : ' + nonBioScore , camera.position.x + 450 ,  runner.y  - 350);
     fill('lightBlue');
     text('E Waste Collected  : ' + eWasteScore ,  camera.position.x + 450 ,  runner.y  - 300);
     fill('red');
     text('W A R N I N G : ' + warning1,  camera.position.x - 650, runner.y - 400);
     fill('white');
     text('LIVES LEFT : ' + lives ,  camera.position.x - 650, runner.y - 350);
     textSize(25);
     fill('white');
     text('Level :  '+ LEVEL , camera.position.x - 25, runner.y - 400);
     
     createCityScene();
   }
    
 
   //if level is 3 and gamestate is one then create industrial area scene
   if(LEVEL === 3 && gameState === 1 && levelCompleted === false){
          
     textSize(20);
     fill('lightGreen');
     text('Bio Waste Collected  : ' + bioScore ,  camera.position.x + 450, runner.y - 400);
     fill('lightPink');
     text('Non Bio Waste Collected  : ' + nonBioScore , camera.position.x + 450 ,  runner.y  - 350);
     fill('lightBlue');
     text('E Waste Collected  : ' + eWasteScore ,  camera.position.x + 450 ,  runner.y  - 300);
     fill('red');
     text('W A R N I N G : ' + warning1,  camera.position.x - 650, runner.y - 400);
     fill('white');
     text('LIVES LEFT : ' + lives ,  camera.position.x - 650, runner.y - 350);
     textSize(25);
     fill('white');
     text('Level :  '+ LEVEL , camera.position.x - 25, runner.y - 400);

     createInsdrialArea();
     
   }


  }
  playLevel(){
    if(LEVEL ===1 ||LEVEL === 2 || LEVEL ===3 && gameState === 0 && levelCompleted === true){
      obstacleGrp.destroyEach();
      this.showMessage();
      this.play.position(displayWidth/2 , displayHeight/2);
      this.play.style('color : green');
      this.play.show();
      win.play();
      this.play.mousePressed(()=>{
        obstacleGrp.destroyEach();
        gameState = 1;
        runner.y  = 732;
        this.play.hide();
        levelCompleted=false;
        bioScore = 0;
        nonBioScore = 0;
        eWasteScore = 0;  
       })

    
    }

 }

 end(){
  
   console.log('HELLO WORLD')	
   
   textSize(25);
   fill('black')
   text('YOU DID IT!! YOU HAVE LEARNT HOW TO RECYCLE ', displayWidth/2 - 300 , displayHeight/2-300   );
   text( 'YOU HAVE TURNED THE WASTE TO RESOURSEFULL AND CREATIVE THINGS ', displayWidth/2 -300 , displayHeight/2 -250 );
   text('NOW TELL YOUR FIENDS ABOUT WHAT YOU HAVE LEARNT ', displayWidth/2 - 300  , displayHeight/2  -200);
   fill(rgb(1 , 68 , 33))
   text('RECYCLE AND HELP TO SAVE THE PLANET!!', displayWidth/2 - 300 , displayHeight/2 + -50);
 }

 restartGame(){

  camera.position.y = displayHeight/2;

 // textSize(30);
 // fill('red');
 // text( ' YOU LOST , TRY AGAIN' , displayWidth/2 - 50 , camera.position.y + 25);
  
  this.restartLevel.position(displayWidth/2,  displayHeight/2 + 50);
  this.restartLevel.style('color : green');
  this.restartLevel.show();
  this.restartLevel.mousePressed(()=>{this.restart()});

 }
 restart(){
  lives = 3;
  warning1 = 2;
  this.restartLevel.hide();
  runner.y = 732;
  gameState = 1 ;
  levelCompleted = false;
  camera.position.y = runner.y;
  camera.position.x = displayWidth/2;
  LEVEL = 1;
  obstacleGrp.destroyEach();
  bioWasteGroup.destroyEach();
  nonBioWasteGroup.destroyEach();
  eWasteGroup.destroyEach();
  bioScore = 0;
  nonBioScore = 0;
  eWasteScore = 0;
  
 }

 showMessage(){

  switch(LEVEL){

     case 2: fill('black');
             textSize(27)
             text('YAY you did it you have completed level one ', displayWidth/2 -250 , displayHeight/2 - 150 );
             text( 'THERE IS MORE TO LEARN ', displayWidth/2 - 250 , displayHeight/2 - 100 );
             text('Recycling is the way to be resourcefull', displayWidth/2 -250 , displayHeight/2  - 50);
             break;
    case 3: fill('black');
            textSize(27)
            text('You are doing an amazing job way to the second level is open', displayWidth/2 - 250 , displayHeight/2  - 150);
            text('GO AND RECYCLE ', displayWidth/2 - 250 , displayHeight/2 - 100);
            text('Recycling turns things into other things. Which is like MAGIC', displayWidth/2 - 250 , displayHeight/2 - 50);
             break;
          
  }
 

 }

}


















