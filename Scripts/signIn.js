let form= document.querySelector('form');
let userData=JSON.parse(localStorage.getItem('userData'))||[];
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let flag=false;
    let email=form.email.value
    let password=form.password.value
    userData.forEach(function(el){
        if(el.email==email && el.password==password) {
            alert('Logged in successfully');
            flag=true
            localStorage.setItem("CurrentUser", JSON.stringify(el));
            localStorage.setItem("isLoggedIn",true);
            window.location.href ="./index.html"
           
        }
    })
    if(!flag){
        alert("Invalid credentials");
        return
    }
   
})

