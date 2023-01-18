let form= document.querySelector('form');
let userData=JSON.parse(localStorage.getItem('userData'))||[];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let flag=false
    let name=form.name.value
    let email=form.email.value
    let password=form.password.value
    let user=new User(name,email,password)

    userData.forEach(function(el){
        if(el.email==email) {
            alert('An account already exists with this email');            
            flag=true
        }
    })
    if(flag){
        return
    }
    userData.push(user);
    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Account created successfully!");
    window.location.href="./signIn.html"
})

function User(name,email,password) {
    this.name = name
    this.email = email
    this.password = password
}