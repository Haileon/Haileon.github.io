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

//切换用户
//获取新按钮和标题引用
let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

//设置个性化欢迎信息
function setUserName(){
    //prompt:弹出对话框，需要用户输入数据并存储在myName中
    let myName=prompt("write your name:");
    if(!myName){
        setUserName();
    }else{
        //调用localStorageAPI，将数据存储在浏览器中供后续获取
        //setItem:创建一个name数据项，并把myName复制给它
        localStorage.setItem("name",myName);
        myHeading.textContent="Qingyepp is coolest!"+myName;
    }

}

//初始化代码
//不存在name数据就创建，存在就调用
if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storeName=localStorage.getItem("name");
    myHeading.textContent="QIngyepp is coolest!"+storeName;
}
//为按钮设置onclick事件处理器，按下运行setUserName()
myButton.onclick=function (){
    setUserName();
}