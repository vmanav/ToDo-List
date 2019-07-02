// state = [{
//     title: "Homework",
//     striked: true
// }]

state =[]

function render (state) {
    let html = ""
    for( let i=0;i <state.length; i++) {
        if(state[i].striked) {
            html += `<li class="strike">${state[i].title}</li>`
        }
        else {
            html += `<li>${state[i].title}</li>`          
        }
    }
    return html
}

function paint() {

    if(state.length == 0 ) {
        let toDoList = document.getElementById("toDoList")
        toDoList.style.display ="none";
    }
    else {
        document.getElementById("toDoList").style.display ="flex";
    }

    const toDoList = document.getElementById("toDoList")
    document.getElementById("inputBox").value = ""
    toDoList.innerHTML = render(state)

    let countTotal = document.getElementById("countTotal")
    countTotal.innerHTML = `Total : ${state.length}`
    
    let S = state.filter( function (task) {
        return task.striked
     }) 
    let countCompleted = document.getElementById("countCompleted")
    countCompleted.innerHTML = `Completed : ${S.length}`

}

window.onload = function () {

    if(state.length == 0 ) {
        let toDoList = document.getElementById("toDoList")
        toDoList.style.display ="none"; 
    }

    const addButton = document.getElementById("addButton") 
    addButton.addEventListener('click', function () {
        const input = document.getElementById("inputBox")
        if(input.value == "") {   
            alert("Task name cannot be empty!")
            return
        }
        state.push({
            title: input.value,
            striked: false
        })
        paint()
    })
}

const toDoList = document.getElementById("toDoList")
toDoList.addEventListener('click', function (e ) {
    const title = e.target.innerHTML
    const selectedTask = state.find( function (task ) {
        return task.title == title
    })
    selectedTask.striked = !selectedTask.striked
    paint()
})

const delButton = document.getElementById("delButton")
delButton.addEventListener('click', function () {
    state = state.filter( function (task) {
       return !task.striked
    }) 
    paint()
})