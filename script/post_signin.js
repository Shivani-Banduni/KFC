let name=JSON.parse(localStorage.getItem("name"))
console.log(name)
let d=document.getElementById("post1a")
d.innerHTML= " Hello " + name
d.style.fontSize="30px"



