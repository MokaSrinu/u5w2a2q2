window.onload=function(){
    var products;
if(localStorage.getItem("products")===null){
    products=[];
}else{
    products=JSON.parse(localStorage.getItem("products"));
}
document.querySelector("#products").innerHTML="";
products.forEach(function(ele,index){
    var box=document.createElement("div");
    var image=document.createElement("img");
    image.src=ele.image;
    var name=document.createElement("p");
    name.innerText=ele.name;
    var price=document.createElement("p");
    price.src=ele.price;
    price.setAttribute("id","price1")
    var button1=document.createElement("button");
    button1.innerText="Remove";
    button1.addEventListener("click",function(){
        console.log("check1",products,);
        products.splice(index,1);
        console.log("check2",products);
        localStorage.setItem("products",JSON.stringify(products));
        window.location.reload();
    })
    var button2=document.createElement("button");
    button2.innerText="sold";
    button2.addEventListener("click",function(){
       // var x = document.getElementById("price1");
        if (price.innerHTML) {
             price.innerHTML = "";
        } else {
             price.innerHTML = ele.price;
        }
        if(ele.sold){
            button2.style="background-color:green"
            ele.sold=false;
        }else{
            button2.style="background-color:red"
            ele.sold=true;
        }
    })
    box.append(image,name,price,button1,button2);
    document.querySelector("#products").append(box);
})
document.querySelector("h1").innerText="you have "+products.length+" "+"products"
}

