let productPrice = [0];
let total = 0;
document.getElementById("deleteLine").addEventListener("click", function () {
    $(".adder:first").remove();
    productPrice.pop();
});
document.getElementById("adder").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let amount = document.getElementById("amount").value;
    let sum = price * amount;
    productPrice.push(sum);
    $(".addPoint").after("<div class=\"row m-0 bg-light adder border border-dark\">\n" +
        "        <div class=\"col-3 pt-4 pb-4\">\n" +
        name +
        "</div>\n" +
        "        <div class=\"col-3 border-left border-right border-dark pt-4 pb-4\">\n" +
        price +
        "</div>\n" +
        "        <div class=\"col-3 border-right border-dark pt-4 pb-4\">\n" +
        amount +
        "</div>\n" +
        "        <div class=\"col-3 pt-4 pb-4\">" + sum +
        "</div>\n" +
        "    </div>");
});
setInterval(() => {
    for (let i = 0; i < productPrice.length; i++) {
        total = +productPrice[i];
    }
    $("#totalId").html(total + '');
    if (productPrice.length >= 11) {
        $("#adderBox").css({'display': 'none'})
    }else {
        $("#adderBox").css({'display': 'block'})
    };
}, 1000);