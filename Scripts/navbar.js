let login=document.getElementById('login');
let isLoggedIn=localStorage.getItem('isLoggedIn')||false;
if(isLoggedIn==false){ 
    console.log("hi")   
        login.innerHTML=`<a href="./signUp.html" id="login"><button>SUBSCRIBE</button></a>
        <a href="./signIn.html" id="login"><h3>LOGIN</h3></a>`    
}else{
    console.log("hello")  

    login.innerHTML=null;
    login.style.display='block';
    login.style.padding = "30px 0px 0px 0px";
    let CurrentUser=JSON.parse(localStorage.getItem('CurrentUser'));
    login.innerHTML=`<i class="fa fa-user" aria-hidden="true"></i><select name="" id="loginSelect">
    <option value="">${CurrentUser.name}</option>
    <option value="Logout">Log Out</option>
</select>`;
    let loginSelect=document.getElementById('loginSelect');
    loginSelect.addEventListener('change', function(){
        if(loginSelect.value=="Logout"){
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("CurrentUser");
            window.location.reload();
        }
    })
}