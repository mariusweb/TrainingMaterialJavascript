
let tasks = document.getElementById('task');
let taskArr = [];
let liArr;

let submitBtn = document.querySelector(".btn");
let rezultList = document.querySelector("#list");

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    let newTask = tasks.value;
    taskArr.push(`<li>${newTask}</li>`);
    rezultList.innerHTML = taskArr.join(" ");
});

