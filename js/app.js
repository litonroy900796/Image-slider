let sliderteg=document.querySelectorAll(".slider");
let prev=document.querySelector(".prev");
let next=document.querySelector(".next");
let nev= document.querySelectorAll(".nev")
let currentslide;
const changeslider=()=>{
   sliderteg.forEach((slide,index)=>{
        if(slide.classList.contains('active')){
           currentslide=index
        }

  
   
   })

   sliderteg[currentslide].classList.remove("active");

   if((currentslide===sliderteg.length-1)){
      sliderteg[0].classList.add('active') 
   }else{
      sliderteg[currentslide+1].classList.add('active')
   }
  
}
 let interval= setInterval(changeslider,2000);


const nextbtn=()=>{
   clearInterval(interval)
   sliderteg.forEach((slide)=>{
      slide.classList.remove('active')
   })

   if(currentslide===sliderteg.length-1){
      sliderteg[0].classList.add('active')
      currentslide=0;
   }else{
      sliderteg[currentslide+1].classList.add('active')
      currentslide=currentslide+1
   }
   interval=setInterval(changeslider,5000)
}
const prevbtn=()=>{
   clearInterval(interval)
   sliderteg.forEach((slide)=>{
      slide.classList.remove('active')
   })

   if(currentslide===0){
      sliderteg[sliderteg.length-1].classList.add('active')
      currentslide=sliderteg.length-1;
   }else{
      sliderteg[currentslide-1].classList.add('active')
      currentslide=currentslide-1
   }
   interval=setInterval(changeslider,5000)
}


next.addEventListener("click",nextbtn)
prev.addEventListener("click",prevbtn)







