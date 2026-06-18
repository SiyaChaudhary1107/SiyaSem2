function calculateFactorial() {
    let num = document.getElementById("num").value;
    let fact = 1;

    for(let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    document.getElementById("result").innerHTML =
        "Factorial = " + fact;
}