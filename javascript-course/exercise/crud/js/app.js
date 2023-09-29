"use strict";

let students = [
    { id: 1, name: "sophia", address: 'kathmandu' },
    { id: 2, name: "hari", address: 'dharan' },
    { id: 3, name: "laxmi", address: 'pokhara' }
];

function $(id) {
    return document.getElementById(id);
}


function show() {
    let output = "";
    students.forEach((student, key) => {
        output += `<tr>
                <td>${++key}</td>
                <td>${student.name}</td>
                <td>${student.address}</td>
                <td>
                    <button>Update</button>
                    <button>Delete</button>                
                </td>
            </tr>`;
    });

    $('showRecord').innerHTML = output;

}

show();

let sId=4;

document.querySelector("#addRecord").addEventListener("click", (e) => {
    e.preventDefault();
    let name = $('name').value;
    if(name==''){
        $('nameError').innerHTML='Please enter name';
        return;
    }
    let address =$("address").value;
    let sendData={
        id:sId++,
        name:name,
        address:address
    }
    students.push(sendData);
    $('name').value='';
    $('address').value='';
    show();
    
});