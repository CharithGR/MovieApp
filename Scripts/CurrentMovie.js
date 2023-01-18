let CurrentMovie=JSON.parse(localStorage.getItem('CurrentMovie'));

let div1=document.createElement("div")
let div2=document.createElement("div")

let img =document.createElement("img")
img.src=CurrentMovie.Poster
div1.append(img)
let h3=document.createElement("h3")
h3.innerHTML=CurrentMovie.Title
let year=document.createElement("p")
year.innerHTML=CurrentMovie.Year
// let imdbID=document.createElement("h5")
// imdbID.innerHTML=CurrentMovie.imdbID
let type = document.createElement("h5")
type.innerHTML=CurrentMovie.Type
let button=document.createElement("div")
button.innerHTML=`<i class="fa-solid fa-play"></i>&nbsp;   &#160; Watch Now`
div2.append(h3,type,year,button)

        
document.getElementById("container").append(div1,div2)