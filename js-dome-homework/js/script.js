document.getElementById("adder").addEventListener("click", addLineClickHandler);
function addLineClickHandler () {
    $("#adderBox").after(`<div class="col-3 mt-2 adder">
            <div class="row"><input class="m-1 col-6" type="text" value="Input Text" name="inputText" id="form"></div>
            <div class="row"><input class="m-1 col-2" type="button" value="add"><input class="m-1 col-3 deleter" type="button"
                                                                                       value="remove" onclick="deleteBtnClickHandler(this)"></div>
        </div>`);
}
function deleteBtnClickHandler(element) {
    const curElIdx = Array.from($('.deleter')).findIndex(curElement => curElement === element)
    $('.adder')[curElIdx].remove()
}
document.getElementById("dropDownToggle").addEventListener("click", toggleDropHandler);
function toggleDropHandler(element) {
    document.getElementById("toggledProp").classList.toggle("nonDisplay");
}