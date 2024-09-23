function inputFieldValue(id){
    const input = document.getElementById(id).value;
    const number = parseFloat(input);
    if (!isNaN(number) && number > 0){
        return number;
    }
    else{
        return('Invalid Input')
    }
}