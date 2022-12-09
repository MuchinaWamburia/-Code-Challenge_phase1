const form=document.getElementById("gradeGenerator");
const input=document.getElementById("score")
const message=document.getElementById("score")
let grade=""
form.addEventListener("submit",(event) => {event.preventDefault();
validateInput(input);
});
// we validate our input to ensure only the type of data we want is keyed
function validateInput(input){ console.log(input.value);
const gradeCheck=input.value
//conditional statement to evaluate student grade from user input
// we use && to return true only if both operands are true .
if (gradeCheck >79 && gradeCheck<=100){
    grade= ("A")
    document.querySelector("#showdata").innerHTML = `Your grade is ${grade}`;
}
else if (gradeCheck >=60 && gradeCheck<=79){
    grade= ("A")
    document.querySelector("#showdata").innerHTML = `Your grade is ${grade}`;
}

 else if (gradeCheck >49 && gradeCheck<=59){
    grade= ("C")
    document.querySelector("#showdata").innerHTML = `Your grade is ${grade}`;
}
 else if (gradeCheck >40 && gradeCheck<=49){
    grade= ("D")
    document.querySelector("#showdata").innerHTML = `Your grade is ${grade}`;
}
else if (gradeCheck >0 && gradeCheck<49){
    grade= ("E")
    document.querySelector("#showdata").innerHTML = `Your grade is ${grade}`;
}
else 
document.querySelector("#showdata").innerHTML = `INPUT A NUMBER BETWEEN 0 AND 100`;

}


