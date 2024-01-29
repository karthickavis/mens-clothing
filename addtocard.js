const cardicon = document.querySelector('.cart-icon');
const sidecart = document.querySelector('.side-cart');
const closecart = document.querySelector('.close-img');

cardicon.addEventListener('click',()=>{
    sidecart.classList.add('cart-active');
});
closecart.addEventListener('click',()=>{
    sidecart.classList.remove('cart-active');
})

document.addEventListener('DOMContentLoaded',loadclothes);

function loadclothes(){
    loadcontent();
}
function loadcontent(){
    let removeitem = document.querySelectorAll('.move');
    removeitem.forEach((btn)=>{
        btn.addEventListener('click',removeproduct);
    })

    let qtyelement = document.querySelectorAll('.cart-quantity');
    qtyelement.forEach((input)=>{
        input.addEventListener('click',changeqty);
    })

    let addtocart = document.querySelectorAll('.btn');
    addtocart.forEach((btn)=>{
        btn.addEventListener('click',addthecart);
    })

    updatetotal();
   
}
function removeproduct(){
    if(confirm("Are your sure to Remove")){
        // let newtitle = this.parentElement.querySelector('.cart-clothtitle');
        // itemlist=itemlist.filter(el=>el.title!=title);
        
        let newtitle = this.parentElement.querySelector('.cart-clothtitle').innerText;
        // console.log(newtitle)
        itemlist=itemlist.filter(el=>el.title!=newtitle);
        this.parentElement.remove();
        loadcontent();
       
    }
  
}
 function changeqty(){
    if(isNaN(this.value) || this.value<1){
        this.value = 1;
    }
    loadcontent();
 }
  let itemlist = [];
  function addthecart(){
    // let clothes = this.parentElement;
    // console.log(clothes.parentElement.querySelectorAll('.title'))
    let clothes = this.parentElement;
    // console.log(clothes.parentElement);
    let parent = clothes.parentElement;
    // console.log(parent.querySelector('.title').innerText);
    let title = parent.querySelector('.title').innerText;
    let price = parent.querySelector('.item-price').innerText;
   
    let image = parent.querySelector('.img1').src;
    let newone={title,price,image};
    if(itemlist.find(el=>el.title==newone.title)){
        alert("product already addded in cart");
        return;
    }else{
        itemlist.push(newone);
    }
    // console.log(title,price,image);
    let newproduct = createcard(title,price,image);
    let element = document.createElement('div');
    element.innerHTML=newproduct
    let cardbasket = document.querySelector('.cart-content');
    cardbasket.append(element);
    loadcontent();
  }

  function createcard(title,price,image){
    console.log(image);

    return `
    <div class="cart-box">
            
    <img src="${image}" class="cart-img">
    <div class="detail-box">
        <div class="cart-clothtitle">
            ${title}
        </div>
        <div class="pricebox">
            <div class="cart-price">${price}</div>
            <div class="cart-amount">${price}</div>
        </div>
        <input type="number" value="1" class="cart-quantity" name="card-quantity">
    </div>
    <!-- <ion-icon name="trash" class="cart-remove"></ion-icon> -->
    <i class="fa-solid fa-trash move"></i>
</div>
    `
  }

  function updatetotal(){
    const cartitem = document.querySelectorAll('.cart-box');
    const totalvalue = document.querySelector('.total-price');

    let total=0;
    cartitem.forEach(product=>{
        let priceelement=product.querySelector('.cart-price'); 
        let price=parseFloat(priceelement.innerHTML.replace("Rs.",""));
        console.log(price);
        let qty=product.querySelector('.cart-quantity').value;
        total+=(price*qty);
        product.querySelector('.cart-amount').innerText="Rs."+(price*qty);
    })
    totalvalue.innerHTML=total;


    // add product count in cart icon

    const cartcount=document.querySelector('#count');
    let count=itemlist.length;
    cartcount.innerHTML=count;

    if(count==0){
        cartcount.style.display='none'
    }else{
        cartcount.style.display='block'
    }
  } 