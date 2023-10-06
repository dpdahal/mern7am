function ShowImage(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        let image = document.createElement("img");
        image.src = e.target.result;
        document.getElementById("show").appendChild(image); // corrected line
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  document.querySelector("#image").addEventListener("change", function(){
    ShowImage(this);
  })



document.querySelector("#addRecord").addEventListener("click", function (e) {
    e.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementsByName("gender")
    let genderValue='';
    gender.forEach((g)=>{
        if(g.checked){
            genderValue=g.value;
        }
    })

    console.log(genderValue);
   
    let courseList = document.querySelectorAll(".course");
    let courseData=[];
    courseList.forEach(function(course){
        if(course.checked){
            courseData.push(course.value);
        }
    });

    let country = document.getElementById("country").value;
    let image = document.getElementById("image");
  
  

});