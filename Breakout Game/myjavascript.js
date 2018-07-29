
 var ctx = document.getElementById("ctx").getContext("2d") ;
 
 var base = {
   
    x : 0,
    y: 0,
 	height : 15 ,
 	width :  75 ,
 	color : "blue" ,
 	left : false,
 	right : false
 };

 var ball = {
   
    x:0,
    y:0,
 	color : "red" ,
 	radius : 10,
 	spdX : -4,
 	spdY : -4
 };

 document.onkeydown = function(event){
 	if(event.keyCode == 37){
 		base.left = true ;
 		base.right = false;
 	}

 	else if(event.keyCode == 39){
 		base.left = false ;
 		base.right = true;
 	}
 }

 document.onkeyup = function(event){
 	if(event.keyCode == 37){
 		base.left = false ;
 	}

 	else if(event.keyCode == 39){
 		base.right = false ;
 	}
 }

  drawBase = function(){
  	ctx.save();
  	ctx.fillStyle = base.color ;
  	ctx.fillRect(base.x , base.y , base.width , base.height);
  	ctx.restore();
  }

  drawBall = function(){
  	ctx.save();
  	ctx.fillStyle = ball.color ;
  	ctx.beginPath();
  	ctx.arc(ball.x , ball.y , ball.radius , 0 , 2*Math.PI) ;
  	ctx.fill();
  	ctx.restore();
  }

  updateBasePosition = function(){

  	if(base.left){
  		base.x = base.x - 5 ;
  	}

  	else if(base.right){
  		base.x = base.x + 5 ;

  	}

  	if(base.x <= 0){
  		base.x = 0 ;
  	}

  	if(base.x >= 325){
  		base.x = 325 ;
  	}
  }

  updateBallPosition = function(){

   ball.x = ball.x + ball.spdX ;
   ball.y = ball.y + ball.spdY ;

   if(ball.x <= 0){
   	ball.spdX = ball.spdX*(-1) ;
   }

   else if(ball.x >= 400){
   	ball.spdX = ball.spdX*(-1);
   }

   else if(ball.y <=0){
   	ball.spdY = ball.spdY * (-1) ;
   }
   else if(ball.y >= 300){
   	ball.spdY = ball.spdY * (-1);
   }

  }

  updateGame = function(){
  	ctx.clearRect(0 , 0 , 400 ,300) ;
  	updateBasePosition();
  	updateBallPosition();
  	drawBase();
  	drawBall();
  }


 startGame = function(){
 
  base.x = 160 ;
  base.y = 250 ;

  ball.x = base.x + 35 ;
  ball.y = base.y - 10 ;

  drawBall();
  drawBase();

  setInterval(updateGame, 30);
 
   
 }

 startGame() ;