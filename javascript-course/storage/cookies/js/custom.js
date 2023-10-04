let course=[
    {id:1,name:"HTML",price:100},
    {id:2,name:"JavaScript",price:200},
]

function showCourse(){
    let output="<ul>";
    course.forEach(function(course){
        output+=`<li>${course.name}</li>`
    });
    output+="</ul>";
    document.getElementById("course").innerHTML=output;
}
showCourse();


document.querySelector("#search").addEventListener("keyup",function(e){
    let output="<ul>";
    course.forEach(function(course){
        if(course.name.toLowerCase().includes(e.target.value.toLowerCase())){
            setCookie("course_name",course.name,2);
            output+=`<li>${course.name}</li>`
        }
    });
    output+="</ul>";
    document.getElementById("course").innerHTML=output;


});


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


if(getCookie("course_name")!=""){
    document.querySelector("#filter_course").innerHTML=getCookie("course_name");
}


// let  url ="https://www.abc.com?name=hari";
// console.log(url.split("?"))