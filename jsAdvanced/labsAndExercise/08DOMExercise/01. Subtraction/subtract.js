function subtract() {
    const result = document.getElementById('result');
    num1 = Number(document.getElementById("firstNumber").value);
    num2 = Number(document.getElementById("secondNumber").value);

    result.innerHTML = (num1 - num2).toString();
}