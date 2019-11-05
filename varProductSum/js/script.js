document.getElementById("deleteLine").addEventListener("click", function () {
    $(".adder:first").remove();
});
document.getElementById("calcButton").addEventListener("click", function () {
    let Name = document.getElementById("name").value;
    let Price = document.getElementById("price").value;
    let Amount = document.getElementById("amount").value;
    let total =+ (Price * Amount);
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
    $("#totalId").html(total + '')
});