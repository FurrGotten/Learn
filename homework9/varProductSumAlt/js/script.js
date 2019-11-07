const MAX_ROWS = 10;

const productPrice = [];
let total = 0;

document.getElementById("adder").addEventListener("click", addLineClickHandler);
document.getElementById("deleteLine").addEventListener("click", deleteLineClickHandler);

function addLineClickHandler () {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const amount = document.getElementById("amount").value;
    const sum = price * amount;
    let after = $(".addPoint").after(`<div class="row m-0 bg-light adder border border-dark">
        <div class="col-3 pt-4 pb-4">
${name}</div>
        <div class="col-3 border-left border-right border-dark pt-4 pb-4">
${price}</div>
        <div class="col-3 border-right border-dark pt-4 pb-4">
${amount}</div>
<div class="m-0 bg-light pt-4 pb-4"><input class="deleter" type="button" value="delete" onclick='deleteBtnClickHandler(this)'></div>
</div>`);
    productPrice.push(sum);
    refreshTotal();
}
function deleteBtnClickHandler(element) {
    const curElIdx = Array.from($('.deleter')).findIndex(curElement => curElement === element)
    $('.adder')[curElIdx].remove()
}
function deleteLineClickHandler() {
    if (!productPrice.length) return;
    $(".adder:first").remove();
    productPrice.pop();
    refreshTotal();
}

function refreshTotal() {
    for (let i = 0; i < productPrice.length; i++) {
        total += productPrice[i];
    }
    $("#totalId").html(total);
    $("#adderBox").toggle(productPrice.length < MAX_ROWS);
    console.log($('.adder'));
};