window.onload=function(){
	var slide=document.getElementsByClassName('img-b'),
		icon=document.getElementsByClassName('icon-y'),
		left=document.getElementById('lang-l'),
		right=document.getElementById('lang-r'),
		homeSlide=document.getElementById('banner');
		
	var currentIcon=icon[0],
		timeId,timespec=1000,
		currentSlide=slide[0],
		kaiguan=true;

	var fn=(function(){
		var count=1;
		var len=icon.length;
		return function(){
			currentSlide.setAttribute('class','img-b');
			slide[count].setAttribute('class','img-b shower');
			currentSlide=slide[count];
			currentIcon.setAttribute('class','icon-y');
			icon[count].setAttribute('class','icon-y active');
			currentIcon=icon[count];
			count++;
			if(count==len){
				count=0;
			}
		}	
	})();
	timeId=setInterval(fn,timespec);
	homeSlide.onmouseover=function(){
		clearInterval(timeId);
	}
	homeSlide.onmouseout=function(){
		if(kaiguan){
			clearInterval(timeId);
			timeId=setInterval(fn,timespec);
		}	
	}
	for(var i=0;i<icon.length;i++){
		icon[i].onclick=function(){
			clearInterval(timeId);
			kaiguan=false;
			currentIcon.setAttribute('class','icon-y');
			this.setAttribute('class','icon-y active');
			currentIcon=this;
			var index=currentIcon.getAttribute('index');
			currentSlide.setAttribute('class','img-b')
			slide[index].setAttribute('class','img-b shower');
			currentSlide=slide[index];
			return false;
		};
	}
	left.onclick=function(){
		clearInterval(timeId);
		kaiguan=false;
		currentSlide.setAttribute('class','img-b');
		var next=(currentSlide.previousElementSibling)?currentSlide.previousElementSibling:slide[slide.length-1];
		next.setAttribute('class','img-b shower');
		currentSlide=next;
		currentIcon.setAttribute('class','icon-y');
		var next1=(currentIcon.previousElementSibling)?currentIcon.previousElementSibling:icon[icon.length-1];
		next1.setAttribute('class','icon-y active');
		currentIcon=next1;
		
	};
	right.onclick=function(){
		clearInterval(timeId);
		kaiguan=false;
		currentSlide.setAttribute('class','img-b');
		var next=(currentSlide.nextElementSibling)?currentSlide.nextElementSibling:slide[0];
		next.setAttribute('class','img-b shower');
		currentSlide=next;
		currentIcon.setAttribute('class','icon-y');
		var next1=(currentIcon.nextElementSibling)?currentIcon.nextElementSibling:icon[0];
		next1.setAttribute('class','icon-y active');
		currentIcon=next1;
	};

		// 关于闭包的小练习
	 // 	left.onclick=(function(){
	 // 		var index=0;
	 // 		return function(){
	 // 			if(index==3){
	 // 				return;
	 // 			}
	 // 				console.log(1);
	 // 				index+=1;
	 // 		}
		// })();

};