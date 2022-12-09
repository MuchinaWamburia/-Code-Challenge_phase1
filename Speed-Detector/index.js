const form=document.getElementById("speedDetector");
const input=document.getElementById("speed");
const message=document.getElementById("speed")
form.addEventListener("submit",(event) => {event.preventDefault();
validateInput(input);
});
// we validate our input to ensure only the type of data we want is keyed
function validateInput(input){ console.log(input.value);
let speedCheck =input.value

 if (speedCheck <= 70 && speedCheck >0){
    document.querySelector("#showdata").innerHTML=`Speed is ${speedCheck} km/hr <p>OK!!!👍 </p>`
}
 else{
    const demeritPoints = ((speedCheck - 70) / 5);  
    // speed minus 70 = distance covered on high speed
    //we divide by 5 to get the exact demerit points
   
    Math.ceil(demeritPoints); // math.ceil rounds of our speed to the nearest one
            if (demeritPoints >= 12) {
            document.querySelector("#showdata").innerHTML =`Your demerit points are ${demeritPoints}  <p> License suspended👎</p>`;                
        } 
    }
    if (speedCheck <=0 ){
        document.querySelector("#showdata").innerHTML=`input number greater than 0` 
    }
}
