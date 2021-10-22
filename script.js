//Code for the current date to be displayed
let time = moment().format("dddd, MMMM Do");
//console.log(time);
document.getElementById("currentDay").innerHTML = time;

//Code for saving to local storage

//Input One
let saveInput1 = document.getElementById("input1");

let saveInputBtn1 = document.getElementById("save1");

function storeInputOne() {
    localStorage.setItem("input1" , saveInput1.value);
};

if (saveInput1.value = localStorage.getItem("input1")) {
    storeInputOne()
} else { 
    console.log("No Event Saved");
    
}
saveInputBtn1.addEventListener("click", storeInputOne);

//Input Two

let saveInput2 = document.getElementById("input2");

let saveInputBtn2 = document.getElementById("save2");

function storeInputTwo() {
    localStorage.setItem("input2" , saveInput2.value);
};

if (saveInput2.value = localStorage.getItem("input2")) {
    storeInputTwo()
} else { 
    console.log("No Event Saved");
    
}
saveInputBtn2.addEventListener("click", storeInputTwo);

//Input Three

let saveInput3 = document.getElementById("input3");

let saveInputBtn3 = document.getElementById("save3");

function storeInputThree() {
    localStorage.setItem("input3" , saveInput3.value);
};

if (saveInput3.value = localStorage.getItem("input3")) {
    storeInputThree()
} else { 
    console.log("No Event Saved");
    
}
saveInputBtn3.addEventListener("click", storeInputThree);

//Input Four

let saveInput4 = document.getElementById("input4");

let saveInputBtn4 = document.getElementById("save4");

function storeInputFour() {
    localStorage.setItem("input4" , saveInput4.value);
};

if (saveInput4.value = localStorage.getItem("input4")) {
    storeInputFour()
} else { 
    console.log("No Event Saved");
    
}
saveInputBtn4.addEventListener("click", storeInputFour);

//Input Five

let saveInput5 = document.getElementById("input5");

let saveInputBtn5 = document.getElementById("save5");

function storeInputFive() {
    localStorage.setItem("input5" , saveInput5.value);
};

if (saveInput5.value = localStorage.getItem("input5")) {
    storeInputFive()
} else { 
    console.log("No Event Saved");
    
}
saveInputBtn5.addEventListener("click", storeInputFive);

//Input Six

let saveInput6 = document.getElementById("input6");

let saveInputBtn6 = document.getElementById("save6");

function storeInputSix() {
    localStorage.setItem("input6" , saveInput6.value);
};

if (saveInput6.value = localStorage.getItem("input6")) {
    storeInputSix()
} else { 
    console.log("No Event Saved");
    
}
saveInputBtn6.addEventListener("click", storeInputSix);

//Input Seven

let saveInput7 = document.getElementById("input7");

let saveInputBtn7 = document.getElementById("save7");

function storeInputSeven() {
    localStorage.setItem("input7" , saveInput7.value);
};

if (saveInput7.value = localStorage.getItem("input7")) {
    storeInputSeven()
} else { 
    console.log("No Event Saved");
    
}
saveInputBtn7.addEventListener("click", storeInputSeven);

//Input Eight

let saveInput8 = document.getElementById("input8");

let saveInputBtn8 = document.getElementById("save8");

function storeInputEight() {
    localStorage.setItem("input8" , saveInput8.value);
};

if (saveInput8.value = localStorage.getItem("input8")) {
    storeInputEight()
} else { 
    console.log("No Event Saved");
    
}
saveInputBtn8.addEventListener("click", storeInputEight);

//Input Nine

let saveInput9 = document.getElementById("input9");

let saveInputBtn9 = document.getElementById("save9");

function storeInputNine() {
    localStorage.setItem("input9" , saveInput9.value);
};

if (saveInput9.value = localStorage.getItem("input9")) {
    storeInputNine()
} else { 
    console.log("No Event Saved");
    
}
saveInputBtn9.addEventListener("click", storeInputNine);


//Functions for the time check and color changes to the code

currentHour= moment().format("ha");
function changeColor() {
    //code to red (present)
    if (currentHour === "9am") {
        document.getElementById("input1").style.backgroundColor = "red";
    } else if (currentHour === "10am") {
        document.getElementById("input2").style.backgroundColor = "red";
    } else if (currentHour === "11am") {
        document.getElementById("input3").style.backgroundColor = "red";
    } else if (currentHour === "12pm") {
            document.getElementById("input4").style.backgroundColor = "red";
    } else if (currentHour === "1pm") {
        document.getElementById("input5").style.backgroundColor = "red";
    } else if (currentHour === "2pm") {
        document.getElementById("input6").style.backgroundColor = "red";
    } else if (currentHour === "3pm") {
        document.getElementById("input7").style.backgroundColor = "red";
    } else if (currentHour === "4pm") {
        document.getElementById("input8").style.backgroundColor = "red";
    } else if (currentHour === "5pm") {
        document.getElementById("input9").style.backgroundColor = "red";
    }
        //code to gray out (Past)
    } if (currentHour > "10am") {
        document.getElementById("input1").style.backgroundColor = "gray";
        document.getElementById("input2").style.backgroundColor = "gray";
    } if (currentHour > "11am") {
        document.getElementById("input3").style.backgroundColor = "gray";
    } if (currentHour > "12pm") {
        document.getElementById("input4").style.backgroundColor = "gray";
    } if (currentHour > "1pm") {
        document.getElementById("input5").style.backgroundColor = "gray";
    } if (currentHour > "2pm") {
        document.getElementById("input6").style.backgroundColor = "gray";
    } if (currentHour > "3pm") {
        document.getElementById("input7").style.backgroundColor = "gray";
    } if (currentHour > "4pm") {
        document.getElementById("input8").style.backgroundColor = "gray";
    } if (currentHour > "5pm") {
        document.getElementById("input9").style.backgroundColor = "gray";
        
        //code to green (future)
    } if (currentHour < "10am") {
        document.getElementById("input2").style.backgroundColor = "green";
    } if (currentHour < "11am") {
        document.getElementById("input3").style.backgroundColor = "green";
    } if (currentHour < "12pm") {
        document.getElementById("input4").style.backgroundColor = "green";
    } if (currentHour < "1pm") {
        document.getElementById("input5").style.backgroundColor = "green";
    } if (currentHour < "2pm") {
        document.getElementById("input6").style.backgroundColor = "green";
    } if (currentHour < "3pm") {
        document.getElementById("input7").style.backgroundColor = "green";
    } if (currentHour < "4pm") {
        document.getElementById("input8").style.backgroundColor = "green";
    } if (currentHour < "5pm") {
        document.getElementById("input9").style.backgroundColor = "green";

};
