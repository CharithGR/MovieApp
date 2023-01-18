let images=[
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8315/1328315-h-017b4fc66d35`,
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6395/1366395-h-e01c59603785`,
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/80/1320080-h-8fc543bf9335`,
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218`,
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1300/1351300-h-57705cab5962`,
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e`,
    `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/967/1310967-h-4a41f8ae6acf`
    
]
let movies=[
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v`,
        Title:"Chhichhore",
        Year:`6 September 2019`,
        IMBD:8.2,
        Type:"Movie"
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba`,
        Title:"Thor: Love and Thunder",
        Year:`6 July 2022`,
        IMBD:6.4,
        Type:"Movie",
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v`,
        Title:"M.S. Dhoni: The Untold Story",
        Year:`30 September 2016`,
        IMBD:7.9,
        Type:"Movie",
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4293/754293-v`,
        Title:"Avatar",
        Year:`18 December 2009`,
        IMBD:7.8,
        Type:"Movie",
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40`,
        Title:"Doctor Strange in the Multiverse of Madness",
        Year:`6 May 2022`,
        IMBD:7,
        Type:"Movie",
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6407/1366407-v-79ac9f6e4661`,
        Title:"Werewolf by Night",
        Year:`7 October 2022`,
        IMBD:7.5,
        Type:"Movie",
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8690/1078690-v-0cb0fd8d0f22`,
        Title:"Jungle Cruise",
        Year:`30 July 2021`,
        IMBD:6.6,
        Type:"Movie",
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9`,
        Title:"Shang-Chi and The Legend of The Ten Rings",
        Year:`2 September 2021`,
        IMBD:7.4,
        Type:"Movie",
    },
    {
        Poster:`https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4836/1374836-v-9e675d9bcb9e`,
        Title:"Prey",
        Year:`21 July 2022`,
        IMBD:7.2,
        Type:"Movie",
    },
]

carousel()
function carousel(){
    let index=0
    let slide=document.getElementById("carousel")
    let imageElement=document.createElement("img")
    imageElement.src=images[index++]
    slide.append(imageElement)
    setInterval(function(){ 
    imageElement.src=images[index++]    
    if(index===images.length){
        index=0
    }
    },4000)
}


let sortLH=document.getElementById("sort-lh");
sortLH.addEventListener("click",function() {
    movies.sort(function(a,b){
        return a.IMBD-b.IMBD
    })
    appendMovies(movies)
})
let sortHL=document.getElementById("sort-hl")
sortHL.addEventListener("click",function() {
    movies.sort(function(a,b){
        return b.IMBD-a.IMBD
    })
    appendMovies(movies)
})

let moviesContainer = document.getElementById("movies")
appendMovies(movies)
function disp(res){
    let loadimg=document.getElementById("load")
    loadimg.style.display="none"
    moviesContainer.innerHTML=""
    res.forEach(function(el){
        let div=document.createElement("div")
        let imageEle= document.createElement("img")
        imageEle.src=el.image
        let name=document.createElement("h3")
        name.innerHTML=el.name
        let rd=document.createElement("h4")
        rd.innerHTML=el.releaseDate
        let IMBD=document.createElement("h3")
        IMBD.innerHTML=`IMBD: ${el.IMBD}`
        div.append(imageEle,name,rd,IMBD)
        div.addEventListener("click",function(){
            localStorage.setItem("CurrentMovie",JSON.stringify(el))
            // window.location.href="../Movie App API/CurrentMovie.html"
            window.location.href="./CurrentMovie.html"
        })
        moviesContainer.append(div)
    })
}

// let promiseLoad=new Promise(function(resolve, reject) {

//     let data=movies
//     if(data!==null){
//         setTimeout(function(){
//             resolve(data) 
//         },3000)
              
//     }else{
//         reject("Error loading movies")
//     }

// })
// promiseLoad.then(function(success){
//     disp(success)
//     let loadimg=document.getElementById("load")
//     loadimg.style.display="none"
// })
// .catch(function(err){
//     console.log(err)
// })


async function searchMovies(){
    document.getElementById("load").style.display="block";
    document.getElementById("movies").innerHTML=""
    document.getElementById("sortBtn").style.display="none"
    let searchData=document.getElementById("search").value;
    try{
    let response= await fetch(`https://www.omdbapi.com/?apikey=455285cb&s=${searchData}`)    
    let data=response.json()
    let moviesdata= await data
    console.log(moviesdata.Search);
    appendMovies(moviesdata.Search)   
    }catch(e){
        console.log(e)
    } 
}

function appendMovies(moviesdata){
    
    let moviesDiv=document.getElementById("movies");
    moviesDiv.innerHTML=""
    document.getElementById("load").style.display="none";
    moviesdata.forEach(function(el){
        let div=document.createElement("div")
        let img =document.createElement("img")
        img.src=el.Poster
        let h3=document.createElement("h3")
        h3.innerHTML=el.Title
        let year=document.createElement("p")
        year.innerHTML=el.Year
        // let imdbID=document.createElement("h5")
        // imdbID.innerHTML=el.imdbID
        let type = document.createElement("h5")
        type.innerHTML=el.Type
        div.append(img,h3,type,year)
        div.addEventListener("click",function(){
            localStorage.setItem("CurrentMovie",JSON.stringify(el))
            // window.location.href="../Movie App API/CurrentMovie.html"
            window.location.href="./CurrentMovie.html"
        })
        moviesDiv.append(div)
    })
}
let debounceID;
function debounce(func,delay){
    if(debounceID){
        clearInterval(debounceID)
    }
    debounceID = setTimeout(function(){
        func()
    },delay)
}