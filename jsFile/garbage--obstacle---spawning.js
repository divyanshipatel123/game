 /*   THIS CLASS CONTAINS ALL THE FUNCTIONS TO SPAWN THE OBSTALES AND THE GARBARGES OF DIFFERENT KINDS                                        */
 
 function spawnBioWaste(frequency){ 
     
    if(frameCount % frequency === 0 && keyDown(UP_ARROW) || frameCount % frequency === 0  && keyDown('W')){
        bioW = createSprite(Math.round(random(150 , displayWidth - 150)),runner.y - 800, 100, 100);
        bioW.scale = 0.22;
        runner.depth =bioW.depth;
        rand = Math.round(random(1,6));
                     switch(rand){
                         case 1: bioW.addImage('bioWaste',bio1Img);
                                 bioW.scale=0.23;
                         break;
                         case 2: bioW.addImage('bioWaste', bio2Img);
                                bioW.scale=0.18;
                         break;
                         case 3: bioW.addImage('bioWaste', bio3Img);
                                 bioW.scale=0.23;
                         break;
                         case 4: bioW.addImage('bioWaste', bio4Img);
                                 bioW.scale=0.11;
                         break;
                         case 5: bioW.addImage('bioWaste', bio5Img);
                                 bioW.scale=0.17;
                         break;
                         case 6: bioW.addImage('bioWaste', bio6Img);
                                 bioW.scale=0.3;
                         break;
                         
                     }
                     
         if(bioW.y > displayHeight){
             bioW.lifetime = 0;
         }
         bioWasteGroup.add(bioW); 

    }
    
 }

    // this is the function to spawn the non bio waste
    function spawnNonBioWaste(frequency2){
        if(frameCount % frequency2 === 0  && keyDown(UP_ARROW) || frameCount % frequency2 === 0  && keyDown('W')){
            nonBioW = createSprite(Math.round(random(150 , displayWidth - 150)), runner.y - 800, 100, 100);
                         nonBioW.scale = 0.12;
                         rand = Math.round(random(1,6));
                         runner.depth = nonBioW.depth;
                         switch(rand){
                             case 1: nonBioW.addImage('non bio waste',non1Img);
                                     nonBioW.scale = 0.17;
                             break;
                             case 2: nonBioW.addImage('non bio waste', non2Img);
                                     nonBioW.scale = 0.25;
                                     
                             break;
                             case 3: nonBioW.addImage('non bio waste',non3Img);
                                     nonBioW.scale = 0.2;
                             break;
                             case 4: nonBioW.addImage('non bio waste', non4Img);
                                    nonBioW.scale = 0.14;
                             break;
                             case 5: nonBioW.addImage('non bio waste',non5Img);
                                    nonBioW.scale = 0.08;
                             break;
                             case 6: nonBioW.addImage('non bio waste', non6Img);
                                    nonBioW.scale = 0.14;
                             break;
                            
                         }
            if(nonBioW.y > displayHeight){
              nonBioW.lifetime = 0;
            }
            nonBioWasteGroup.add(nonBioW);
        }
        
    }

       // this is the function to spawn the e-waste
        function spawnEWaste(frequency3){
            if(frameCount % frequency3 === 0  && keyDown(UP_ARROW) || frameCount % frequency3 === 0  && keyDown('W')){
                eW = createSprite(Math.round(random(150 , displayWidth - 150)), runner.y - 800, 100, 100);
                             runner.depth = eW.depth;
                             eW.scale = 0.2;
                             rand = Math.round(random(1,6));
                             switch(rand){
                                 case 1: eW.addImage('e waste',eWImg1);
                                         eW.scale= 0.14;
                                 break;
                                 case 2: eW.addImage('e waste', eWImg2);
                                         eW.scale= 0.11;
                                 break;
                                 case 3: eW.addImage('e waste', eWImg3);
                                         eW.scale= 0.13;
                                 break;
                                 case 4: eW.addImage('e waste', eWImg4);
                                         eW.scale= 0.15;
                                 break;
                                 case 5: eW.addImage('e waste', eWImg5);
                                         eW.scale= 0.2;
                                 break;
                                 case 6: eW.addImage('e waste', eWImg6);
                                         eW.scale= 0.15;
                                 break;
                                 
                             }
                if(eW.y > displayHeight){
                    eW.lifetime = 0;
                } 
                eWasteGroup.add(eW)              
            }
           
        }

 
//----XX------ THE SPAWNING OG THE GARBAGE ENDS HERE NOW WE WILL WRITE THE FUNCTION FOR OBSTACLE ------XX------//
// ============================XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX==============================================//


function spawnvillageObs(frequency4 ){
    if(frameCount % frequency4 === 0  && keyDown(UP_ARROW) || frameCount % frequency4 === 0  && keyDown('W')){
        villageObs = createSprite(Math.round(random(150 , displayWidth - 150)), runner.y - 1200, 100, 100);
                    villageObs.scale = 1;
                    rand = Math.round(random(1,6)); 
                     switch(rand){
                         case 1: villageObs.addImage('village obstacles',villageObs1);
                                 villageObs.scale=0.2;
                                break;
                         case 2: villageObs.addImage('village obstacles', villageObs2);
                                 villageObs.scale=0.38;
                                break;
                         case 3: villageObs.addImage('village obstacles', villageObs3);
                                 villageObs.scale=0.22;
                                break;
                         case 4: villageObs.addImage('village obstacles', villageObs4);
                                 villageObs.scale=0.11;  
                                break;
                         case 5: villageObs.addImage('village obstacles', villageObs5);
                                 villageObs.scale=0.08;
                                break;
                         case 6: villageObs.addImage('village obstacles', villageObs6);
                                 villageObs.scale=0.4;
                                break;
                     }

        if(villageObs.y > displayHeight){
            villageObs.lifetime = 0;
        }
        obstacleGrp.add(villageObs);               
    }
   
}




 function spawncityObs(frequency5){
    if(frameCount % frequency5 === 0  && keyDown(UP_ARROW) || frameCount % frequency5 === 0  && keyDown('W')){
        cityObs = createSprite(Math.round(random(150 , displayWidth - 150)), runner.y - 1500, 100, 100);
                     cityObs.scale = 1;
                      var rand2 = Math.round(random(1 , 5));
                     switch(rand2){
                         case 1: cityObs.addImage('city obstacle',cityObs1);
                                 cityObs.scale=0.42;
                                break;
                         case 2: cityObs.addImage('city obstacle', cityObs2);
                                 cityObs.scale=0.43;
                                break;
                         case 3: cityObs.addImage('city obstacle', cityObs3);
                                 cityObs.scale=0.25;
                                break;
                         case 4: cityObs.addImage('city obstacle', cityObs4);
                                 cityObs.scale=8;
                                break;
                         case 5: cityObs.addImage('city obstacle', cityObs5);
                                 cityObs.scale=55;
                                break;
                        }
        if(cityObs.y > displayHeight){
            cityObs.lifetime = 0;
         }
        obstacleGrp.add(cityObs)             
    }
   
}


