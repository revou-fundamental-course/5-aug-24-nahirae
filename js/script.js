// ini javascript
document.getElementById("submit").addEventListener("click", calculate);
function calculate(e){
    let Perempuan = document.getElementById("Perempuan").value;
    let Lakilaki = document.getElementById("Laki-laki").value;
    let beratBadan = document.getElementById("berat-badan").value;
    let usia = document.getElementById("usia").value;
    let tinggiBadan = document.getElementById("tinggi-badan").value/100;

    let BMI = parseFloat(beratBadan) / parseFloat(tinggiBadan * tinggiBadan);
    document.getElementById("resultBMI").innerHTML = BMI.toFixed(1);
    
    if(beratBadan >=1 && tinggiBadan >=1){
        e.preventDefault(); // untuk mencegah halaman tersebut refresh otomatis
        if(BMI < 18.5)
            document.getElementById("kategoriBMI").innerHTML = "Anda kekurangan berat badan";
        else if(BMI >= 18.5 && BMI <= 24.9)
            document.getElementById("kategoriBMI").innerHTML = "Berat badan Anda normal (ideal)";
        else if(BMI >= 25.0 && BMI <= 29.9)
            document.getElementById("kategoriBMI").innerHTML = "Anda memiliki berat badan berlebih";
        else
            document.getElementById("kategoriBMI").innerHTML = "Anda mengalami kegemukan (obesitas)";
    } else {
        document.getElementById("resultBMI").innerHTML = "";
        document.getElementById("kategoriBMI").innerHTML = "";
    }
}
