document.getElementById("addRecord").addEventListener("click", function (e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    if(name===''){
        // document.getElementById("name").style.borderColor = "red";
        document.getElementById("error").innerHTML = "<b>Please enter a name</b>";
    }else if(name.length <2){
        document.getElementById("error").innerHTML = "Name atleast 2 character";
    }
});