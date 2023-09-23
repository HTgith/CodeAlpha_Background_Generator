document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("colorPicker");
    const setBackgroundColorButton = document.getElementById("setBackgroundColor");

    setBackgroundColorButton.addEventListener("click", function () {
        const selectedColor = colorPicker.value;
        document.body.style.backgroundColor = selectedColor;
    });
});
