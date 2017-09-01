//The animation and transition of tiles additional feature was implemented
//id: 620083982
var empty=15; //Empty tile
var move="none";// direction
var tiles;//Array of tiles
var counter=0;
var meh=0;
var strn;
var moving= false;//Is tile still moving..

//Loads tiles when webpage loads
window.onload = function(){
	tiles = document.getElementById('puzzlearea').getElementsByTagName('div');
	document.getElementById('shufflebutton').onclick=shuffle;
	for(var x=0; x<tiles.length;x++){
		tiles[x].className = 'puzzlepiece';
		tiles[x].onmouseover = canMove;
		tiles[x].onmouseout = this.className = 'puzzlepiece';
		tiles[x].onclick = move;
		if(x<=3){
			tiles[x].style.left+=x*100+'px';
			tiles[x].style.top='0px';
			tiles[x].style.backgroundPosition = -x*100+'px '+'0px';
		}else if(x<=7){
			tiles[x].style.left+=(x-4)*100+'px';
			tiles[x].style.top='100px';
			tiles[x].style.backgroundPosition = -(x-4)*100+'px '+'-100px';
		}else if(x<=11){
			tiles[x].style.left+=(x-8)*100+'px';
			tiles[x].style.top='200px';
			tiles[x].style.backgroundPosition = -(x-8)*100+'px '+'-200px';
		}else{
			tiles[x].style.left+=(x-12)*100+'px';
			tiles[x].style.top='300px';
			tiles[x].style.backgroundPosition = -(x-12)*100+'px '+'-300px';
		}
	}
};

//Check if tile can move
var canMove =function(){
	if(!moving){
		if((parseInt(this.style.left)+this.offsetWidth) === parseInt(ret_x()) && this.style.top===ret_y()){
			this.className = this.className + " movablepiece";
			move="right";
		}else if(parseInt(this.style.left) === (parseInt(ret_x())+this.offsetWidth) && this.style.top===ret_y()){
			this.className = this.className + " movablepiece";
			move= "left";
		}else if((parseInt(this.style.top)+this.offsetHeight) === parseInt(ret_y()) && this.style.left===ret_x()){
			this.className = this.className + " movablepiece";
			move= "down";
		}else if(parseInt(this.style.top) === (parseInt(ret_y())+this.offsetHeight) && this.style.left===ret_x()){
			this.className = this.className + " movablepiece";
			move= "up";
		}else{
			move= "none";
		}
	}
}

//Animates tile movement
var animate =function(){
	var index = 0;
	for(var i=0; i<tiles.length;i++){
		if(tiles[i].textContent===strn){
			index=i;	
		}
	}
	
	if(meh!=100){
		if(move==="left" || move==="right"){
			tiles[index].style.left=parseInt(tiles[index].style.left)+counter+'px';
		}else{
			tiles[index].style.top=parseInt(tiles[index].style.top)+counter+'px';
		}
		meh+=1;
		moving=true;
		setTimeout("animate()", "1");
	}else{
		meh=0;
		moving=false;
		move="none";
	}		
}

//Gets direction and then calls animate() to move tile
var move =function(){
	if(!moving){
		switch(move){
			case "right":
				counter=1;
				empty-=1;
				strn=this.textContent;
				animate();
				break;
			case "left":
				counter=-1;
				empty+=1;
				strn=this.textContent;
				animate();
				break;
			case "down":
				counter=1;
				empty-=4;
				strn=this.textContent;
				animate();
				break;
			case "up":
				counter=-1;
				empty+=4;
				strn=this.textContent;
				animate();
				break;
		}
	}
}

//shuffles tiles
var shuffle =function(){
	if(!moving){
		for(var i =0; i<100; i++){
			var shuffled = [];
			for(var x =0; x<tiles.length; x++){
				shuffleMove(tiles[x]);
				if(move!="none"){
					shuffled.push(x);
				}
			}

			if(shuffled.length!=0){
				var x = shuffled[Math.floor((Math.random()*shuffled.length))];
				shuffleMove(tiles[x]);
				shuffleTile(tiles[x]);
			}
		}
		move="none";
	}
}

//Check method for shuffle
var shuffleMove =function(element){
	if((parseInt(element.style.left)+element.offsetWidth) === parseInt(ret_x()) && element.style.top===ret_y()){
		move="right";
	}else if(parseInt(element.style.left) === (parseInt(ret_x())+element.offsetWidth) && element.style.top===ret_y()){
		move= "left";
	}else if((parseInt(element.style.top)+element.offsetHeight) === parseInt(ret_y()) && element.style.left===ret_x()){
		move= "down";	
	}else if(parseInt(element.style.top) === (parseInt(ret_y())+element.offsetHeight) && element.style.left===ret_x()){
		move= "up";
	}else{
		move= "none";
	}
}

//Move method for shuffle
var shuffleTile=function(element){
	switch(move){
		case "right":
			element.style.left=parseInt(element.style.left)+100+'px';
			empty-=1;
			break;
		case "left":
			element.style.left=parseInt(element.style.left)-100+'px';
			empty+=1;
			break;
		case "down":
			element.style.top=parseInt(element.style.top)+100+'px';
			empty-=4;
			break;
		case "up":
			element.style.top=parseInt(element.style.top)-100+'px';
			empty+=4;
			break;
		default:
	}
}

//Returns the corresponding X for the empty tile
var ret_x=function(){
	if(empty<=3){
		return empty*100+'px';
	}else if(empty<=7){
		return (empty-4)*100+'px';			
	}else if(empty<=11){
		return (empty-8)*100+'px';
	}else{
		return (empty-12)*100+'px';
	}
}

//Returns the corresponding Y for the empty tile
var ret_y =function(){
	if(empty<=3){
		return '0px';
	}else if(empty<=7){
		return '100px';
	}else if(empty<=11){
		return '200px';
	}else{
		return '300px';
	}
}