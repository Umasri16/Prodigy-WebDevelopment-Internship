let apiKey="62e0005bb43710e628c1809e7d24afd9"

let search_btn=document.getElementById("search-btn")
let inpele=document.getElementById("inp")
let temp_tag=document.getElementById("temp")
let city_name=document.getElementById("city-name")
let descrip=document.getElementById("desc")
let hide_ele=document.getElementById("hide-element")
let temp_info=document.getElementById("temp-info")
let unit_tag=document.getElementById("unit")
let c_tag=document.getElementById("c")

search_btn.onclick=function(){
   let location=inpele.value
   if(location == ""){
    alert("Please enter valid location")
   }
   else{
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
   let options={
    method:"GET"
   }
   fetch(url,options)
   .then(function(response){
    return response.json()
   })
   .then(function(jsondata){
    console.log(jsondata);
    let {name} = jsondata
    let {temp}=jsondata.main
    let {description}=jsondata.weather[0]
    let temp2=Math.floor(temp-273)
    temp_info.style.display="flex"
    temp_tag.textContent=temp2;
    city_name.textContent=name
    descrip.textContent=description
    hide_ele.classList.add("hide")
    unit_tag.classList.remove("hide")
    c_tag.classList.remove("hide")
   })
   .catch(function(){
    hide_ele.classList.remove("hide")
    unit_tag.classList.add("hide")
    c_tag.classList.add("hide")
    temp_tag.textContent=""
    city_name.textContent=""
    descrip.textContent=""
    hide_ele.textContent="Please enter correct city name"
   })
  inpele.value=""

}
}