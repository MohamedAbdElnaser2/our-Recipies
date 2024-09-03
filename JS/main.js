
let myhttp=new XMLHttpRequest()
let row=document.querySelector(".row")
let selector=document.querySelector("select")
let input = document.querySelector("input")
selector.addEventListener("change",function(){
    getdata(selector.value)
})
input.addEventListener("blur",function(){
    getdata(input.value)
})
getdata("pizza")

function getdata(data){
    myhttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${data}`)
myhttp.send()
myhttp.addEventListener("readystatechange",function(){
    console.log(myhttp.readyState)
    if(myhttp.readyState==4){
        let mydata=JSON.parse(myhttp.response)
       console.log(mydata.recipes)
        
        
       showData(mydata.recipes)
    }
    
})

}


function showData(data){
   let cartona=``
    for(let i=0; i<data.length; i++){
        cartona+=`
        <div class="col-md-4">
        <img class="w-100 mb-2"src="${data[i].image_url}" alt="">
        <p><b>Title:</b>${data[i].title}</p>
        <p><b>ID:</b>${data[i].recipe_id}</p>
        <p><b>publisher:</b>${data[i].publisher}</p>
        
        
    </div>`
    }  
    row.innerHTML=cartona;  
}