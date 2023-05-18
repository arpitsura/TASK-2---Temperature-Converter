const calculateTemp = ()=>{
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    
    // let Celsius=0;
    // let Fahrenheit=0;
    // let Kelvin =0;

    if (valueTemp=="cel"){
        fahrenheit=(((inputTemp) * 9 / 5) + 32).toFixed(2);
        document.getElementById("result1").innerHTML = fahrenheit + "&#176; Fahrenheit";
        kelvin = (inputTemp) +273.15;
        document.getElementById("result2").innerHTML = kelvin + "&#176; Kelvin";
    }
    else if(valueTemp=="fah"){
        celsius = (((inputTemp)-32)*5/9).toFixed(2);
        document.getElementById("result1").innerHTML =  celsius+ "&#176; Celsius";
        kelvin = ((((inputTemp)-32)*5/9) + 273.15).toFixed(2);
        document.getElementById("result2").innerHTML =  kelvin+ "&#176; Kelvin";
    }
    else if(valueTemp=="kel"){
        celsius = ((inputTemp) - 273.15).toFixed(2);
        document.getElementById("result1").innerHTML =  celsius+ "&#176; Celsius";
        fahrenheit= ((((inputTemp) - 273.15) * 9 / 5 ) + 32).toFixed(2);
        document.getElementById("result2").innerHTML =  fahrenheit+ "&#176; Fahrenheit";
    }
}