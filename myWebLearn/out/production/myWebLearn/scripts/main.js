//变量：var/let--String NUmber Boolean Array Object
//运算符：+-*/，=，===，!==,!
//if else
//function
//event:

//图片切换器
let myImage=document.querySelector("img");
myImage.onclick=function(){
    let mySrc=myImage.getAttribute("src");
    if(mySrc==="images/pic.png"){
        myImage.setAttribute("src","images/pic2.png");
    }else{
        myImage.setAttribute("src","images/pic.png");
    }
};