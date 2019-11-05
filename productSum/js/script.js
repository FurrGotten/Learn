calc.addEventListener("keyup", function f(keyup) {
    let drinkPrice = document.getElementById("dp").value;
    let drinkAmount = document.getElementById("da").value;
    let breadPrice = document.getElementById("bp").value;
    let breadAmount = document.getElementById("ba").value;
    let fruitPrice = document.getElementById("fp").value;
    let fruitAmount = document.getElementById("fa").value;
    let total = drinkPrice * drinkAmount + breadPrice * breadAmount + fruitPrice * fruitAmount
    $("#totalId").html(total +'')
})