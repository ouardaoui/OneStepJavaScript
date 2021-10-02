const listCafe = document.querySelector("#cafe-list")
const form = document.querySelector("#add-cafe-form")

function renderCafe(doc){
    let li = document.createElement("li");
    let name = document.createElement("span")
    let city = document.createElement("span")
    let cross = document.createElement("div")
    
    li.setAttribute("data-id",doc.id)
    name.textContent = doc.data().name
    city.textContent = doc.data().city
    cross.textContent = "x"
    
    li.appendChild(name)
    li.appendChild(city)
    li.appendChild(cross)
    listCafe.appendChild(li)

    cross.addEventListener("click",(e)=>{
        e.stopPropagation();
        const id = e.target.parentElement.getAttribute("data-id")
        db.collection("cafes").doc(id).delete()
    })
}

// db.collection("cafes").orderBy("city").get().then((snapshot) => {

//     snapshot.docs.map(doc => renderCafe(doc))
// })


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    db.collection("cafes").add({
        name : form.name.value,
        city : form.city.value
    });
    form.name.value = "";
    form.city.value = "";
});
db.collection("cafes").orderBy("city")
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                renderCafe(change.doc)
            }
            else if (change.type === "removed") {
                let li =document.querySelector("[data-id="+change.doc.id+"]")
                listCafe.removeChild(li)

            }
        });
    });