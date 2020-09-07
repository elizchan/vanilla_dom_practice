document.addEventListener('DOMContentLoaded', ()=>{
    const sub = document.getElementById("sub")
    console.log(sub)
    const h2 = document.querySelector("h2")
    console.log(h2)
    h2.innerText="Welcome to Edison!!!"
    const list = document.getElementsByClassName("list")
    console.log(list)
    const listItems = document.querySelectorAll("li")
    console.log(listItems)
    listItems[3].innerText = "Jamboree sandwich at the Jambo-ree"
    listItems[1].style.color = "green"
    const topGolf = document.createElement("img")
    topGolf.setAttribute("src", "https://topgolf.com/assets/kobalt/TG_Edison.jpg")
    listItems[2].appendChild(topGolf)
    const footer = document.querySelector("footer")
    pRemove = footer.querySelector("p")
    pRemove.remove()
})