$('#login-button').click(function (event) {
    var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
    //修改密码请改此处
    if(userName=="小柯柯" && pwd=="520"){
       location.href="./home.html";
    }
    else{
        alert("请输入正确哦");
    }
});
