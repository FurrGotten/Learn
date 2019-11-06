document.getElementById("adder").addEventListener("click", addLineClickHandler);
let formNumber = 0
function addLineClickHandler () {
    let name = document.getElementById("formName").value;
    formNumber++;
    $("#adderBox").after("")
}
