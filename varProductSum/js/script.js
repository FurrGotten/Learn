let productPrice = [0];
console.log(productPrice.length)
let total = 0;
document.getElementById("deleteLine").addEventListener("click", function () {
    $(".adder:first").remove();
    productPrice.pop();
});
document.getElementById("adder").addEventListener("click", function () {
    let Name = document.getElementById("name").value;
    let Price = document.getElementById("price").value;
    let Amount = document.getElementById("amount").value;
    productPrice.push(Price * Amount);
    $(".addPoint").after("<div class=\"row m-0 bg-light adder border border-dark\">\n" +
        "        <div class=\"col-3 pt-4 pb-4\">\n" +
        Name +
        "</div>\n" +
        "        <div class=\"col-3 border-left border-right border-dark pt-4 pb-4\">\n" +
        Price +
        "</div>\n" +
        "        <div class=\"col-3 border-right border-dark pt-4 pb-4\">\n" +
        Amount +
        "</div>\n" +
        "        <div class=\"col-3 pt-4 pb-4\"> </div>\n" +
        "    </div>");
});
setInterval(() => {
    for (let i = 0; i < productPrice.length; i++) {
        total = +productPrice[i];
    }
    $("#totalId").html(total + '')
}, 1000);
setInterval(() => {
    if (productPrice.length >= 11) {
        $("#adderBox").css({'display': 'none'})
    }else {
        $("#adderBox").css({'display': 'block'}) 
    }
}, 1000);