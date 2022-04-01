function done(){
    alert("Thanku for signing in")
    window.location.href="index.html"
    let name=document.getElementById("con5").value
    localStorage.setItem("name",JSON.stringify(name))

}