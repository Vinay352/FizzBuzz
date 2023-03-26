// fucntion to getValues
function getValues(){

    //get values
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if( (Number.isInteger(startValue) && Number.isInteger(endValue)) && (startValue <= endValue)){
        // create array within the range
        let numbers = generateNumbers(startValue, endValue);

        //display on th UI
        displayFizzBuzz(numbers);
    }else{
        alert("Enter the correct integer values.")
    }

}


// function to generate numbers in the range
function generateNumbers(startValue, endValue){
    let numbers = [];

    // fill the array with numbers in the range of [startValue, endValue]
    for(let i = startValue; i <= endValue; i++){
        numbers.push(i);
    }

    return numbers;
}


// function to display Fizz, Buzz or FizzBuzz
function displayFizzBuzz(numbers){
    let templateRows = "";
    let tempTemplate = ``;

    // iterate over the numbers
    for(let i = 0; i < numbers.length; i++){
        let tempNumber = numbers[i];

        let answer = "";
        let className = "";

        let boldOrNot = 0;

        if(tempNumber % 15 == 0){
            // display Fizz Buzz
            answer = "FizzBuzz";
            className = "FizzBuzz";
            boldOrNot = 1;
            
        }else if(tempNumber % 5 == 0){
            // display Buzz
            answer = "Buzz";
            className = "Buzz";
            boldOrNot = 1;

        }else if(tempNumber % 3 == 0){
            // display Fizz
            answer = "Fizz";
            className = "Fizz";
            boldOrNot = 1;

        }else{
            answer = tempNumber.toString();
        }
        
        if(boldOrNot == 1){
            tempTemplate += `<td class = ${className}><strong>${answer}</strong></td>`;
        }else{
            tempTemplate += `<td>${answer}</td>`;
        }
        

        // if 5 numbers are encountered so far, put them in one row
        if( (i+1) % 5 == 0 ){
            let tempStr = `<tr>${tempTemplate}</tr>`;
            templateRows += tempStr;
            tempTemplate = ``;
        }
    }

    let tempStr = `<tr>${tempTemplate}</tr>`;
    templateRows += tempStr;
    tempTemplate = ``;

    document.getElementById("results").innerHTML = templateRows;
}