const form=document.getElementById("Salary");
const input=document.getElementById("myPay");
const message=document.getElementById("myPay")
form.addEventListener("submit",(event) => {event.preventDefault();
validateInput(input);
});

function validateInput(input){ console.log(input.value);
    let grossPay=input.value;
    const NSSF=200; //value of NSSF is Constant 

{   
//conditional statement to evaluate Payee 
//note our code does not cover the whole payee table
 if (grossPay <= 24000){
    payee = (grossPay*0.1)
    
    }
else if (grossPay < 32334){
    payee = (grossPay *0.25)
    
}
else if (grossPay >=32334){
    payee=(grossPay *0.38)
    

 }
 //Conditional statements to evaluate NHIF in relation to what user inputs as Gross pay
if (grossPay < 6000){
    NHIF = 150;
    // document.querySelector("#showdata").innerHTML = `Your health insurance is:${NHIF} Ksh`;
}else if(grossPay < 8000){
    NHIF = 300;
    // document.querySelector("#showdata").innerHTML = `Your health insurance is:${NHIF} Ksh`;
}else if(grossPay < 12000){
    NHIF = 400;

}else if(grossPay < 15000){
    NHIF = 500;
    
}else if(grossPay < 20000){
    NHIF = 600;

}else if(grossPay < 25000){
    NHIF = 700;
   
}else if(grossPay < 30000){
    NHIF = 850;
  
}
else if(grossPay > 35000){
    NHIF = 900;
   
} else {
    NHIF = 950;
  
}
let deductions= payee+NSSF+NHIF;
let netPay= grossPay - deductions;
document.querySelector("#showdata").innerHTML = `Your netpay is: ${netPay} Ksh`;
}}