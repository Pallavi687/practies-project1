import data from './data.js';

let search = document.getElementById('search');
let tbody = document.getElementById('tBody');
let sbtn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');



// Table data function
function jsonData(data) {
      console.log(data);
      let tableData = '';
      data.map((e)=>{
        tableData += `<tr>
        <td>${e.id}</td>
        <td>${e.first_name} ${e.last_name}</td>
        <td>${e.gender}</td>
        <td>${e.class}</td>
        <td>${e.marks}</td>
        <td>${e.passing}</td>
        <td>${e.email}</td>
    </tr>`
    });
    tbody.innerHTML = tableData;
}
jsonData(data);


//Search Function
sbtn.addEventListener("click", searchFunc);
function searchFunc() {
    // console.log(search.value);
    tbody.innerHTML = "";
    let s = search.value;
    let matchedData = data.filter((item)=>{
        return item.first_name.toLowerCase().includes(s.toLowerCase()) || item.last_name.toLowerCase().includes(s.toLowerCase()) || item.email.toLowerCase().includes(s.toLowerCase())
    });
    jsonData(matchedData);
}


//sort A to Z function
btn1.addEventListener("click",sortAZ);
function sortAZ(){
    tbody.innerHTML = "";
    let sort = data.sort((a,b) => {
        if(a.first_name+a.last_name < b.first_name+b.last_name) return -1;
        else if(a.first_name+a.last_name > b.first_name+b.last_name) return 1;
        else return 0;
    })
    jsonData(sort);
}
// sort by Z to A
btn2.addEventListener("click",sortZA);
function sortZA(){
    tbody.innerHTML = "";
    let sort = data.sort((a,b) => {
        if(a.first_name+a.last_name > b.first_name+b.first_name) return -1;
        else if(a.last_name+a.first_name < b.last_name+b.first_name) return 1;
        else return 0;
    })
    jsonData(sort);
}

// sort by marks function 
let btn3 = document.getElementById('btn3');
btn3.addEventListener("click",sortByMarks);
function sortByMarks(){
    tbody.innerHTML = "";
    let sort = data.sort((a,b) => {
        if(a.marks < b.marks) return -1;
        else if(a.marks > b.marks) return 1;
        else return 0;
    })
    jsonData(sort);
}
// sort by passing
let btn4 = document.getElementById('btn4');
btn4.addEventListener("click",sortBypassing);
function sortBypassing(){
    tbody.innerHTML = "";
    let sort = data.sort((a,b) => {
        if(a.passing < b.passing) return -1;
        else if(a.passing > b.passing) return 1;
        else return 0;
    })
    jsonData(sort);
}
// sort by class
let btn5 = document.getElementById('btn5');
btn5.addEventListener("click",sortByclass);
function sortByclass(){
    tbody.innerHTML = "";
    let sort = data.sort((a,b) => {
        if(a.class < b.class) return -1;
        else if(a.class > b.class) return 1;
        else return 0;
    })
    jsonData(sort);
}
let btn6 = document.getElementById('btn6');
btn6.addEventListener("click",sortByGender);
function sortByGender(){
    tbody.innerHTML = "";
    let sort = data.filter(item => {
        if(item.gender === "Female")
         return item.gender;
    })
    jsonData(sort);
}