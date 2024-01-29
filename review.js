const stars=document.querySelectorAll('.star-1');
const currentrating=document.querySelector('.current-rating');
const btn=document.getElementById('btn');
 stars.forEach((star,index)=>{
   star.addEventListener('click',()=>{

    let currentstar=index+1;
     currentrating.innerText=`${currentstar} of 5`;

     stars.forEach((star,i)=>{
        if(currentstar>=i+1){
            star.innerHTML='&#9733;';
        }
        else{
            star.innerHTML='&#9734;';
        }
     })
   })
 });

 btn.addEventListener('click',()=>{
    btn.innerText="Thanks for your response !."
 })
