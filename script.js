var img = document.querySelectorAll( '#wrapper, #topBlock, img');
var but = document.getElementsByName('rd');

   function funck() {
 	for (var i = 0;i<img.length;i++) {
 	
    if(but[0].checked){
 
      
       img[2].style.display='block'; 
img[2].className='bounceInLeft';
 img[3].className='anim';
      img[4].className='anim';
setTimeout("img[3].style.display='none'",300);
    setTimeout("img[4].style.display='none'",300);
      

}else if (but[1].checked){
	img[3].style.display='block';
	img[3].className='bounceInLeft'
     img[4].className='anim';
      img[2].className='anim';
      setTimeout("img[4].style.display='none'",300);
     setTimeout("img[2].style.display='none'",300);
}else if (but[2].checked) {
	img[4].style.display='block';
      img[4].className='bounceInLeft'
      img[3].className='anim' ;
      img[2].className='anim';
    setTimeout("img[3].style.display='none'",300);
     setTimeout("img[2].style.display='none'",300);
}


}

     
        

     };


    

var minimg =document.querySelectorAll('.posts, .post, img');
var inputminis = document.getElementsByName('minis');
        console.log(minimg)
  		
        function funckmini() {
 	for (var i = 0;i<minimg.length;i++) { 
 	    if(inputminis[0].checked){
	minimg[22].style.display='block';       
minimg[22].className='bounceInLeft';
 minimg[23].className='anim';
      minimg[24].className='anim';
setTimeout("minimg[23].style.display='none'",400);
    setTimeout("minimg[24].style.display='none'",400);
      
 
}else if (inputminis[1].checked){
	minimg[23].style.display='block'; 
	minimg[23].className='bounceInLeft'
     minimg[24].className='anim';
      minimg[22].className='anim';
      setTimeout("minimg[24].style.display='none'",400);
     setTimeout("minimg[22].style.display='none'",400);
}else if (inputminis[2].checked) {
	minimg[24].style.display='block';
      minimg[24].className='bounceInLeft'
      minimg[23].className='anim' ;
      minimg[22].className='anim';
    setTimeout("minimg[23].style.display='none'",400);
     setTimeout("minimg[22].style.display='none'",400);
}

 
}

     
        

     };	  


var knopka = document.getElementById('knopka1');
var menuLi = document.querySelectorAll('.liclass');
knopka.onclick=function () {
        for (var i = 0; i < menuLi.length; i++) {
        	if(menuLi[i].className==='liclass'){
        		menuLi[i].classList.add("lid1")
        		menuLi[i].classList.remove("liclass");
        	    


}            else {
	                 menuLi[i].classList.remove("lid1")
	                menuLi[i].classList.add("liclass");
}                   


        	}
        } 





      
     

      
	
	 
	  	  
	  	   
	  	   
      


	
         
          
      
   