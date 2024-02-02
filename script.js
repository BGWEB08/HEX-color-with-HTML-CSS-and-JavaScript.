document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generate-btn");
    const body = document.querySelector("body");
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const hexCode = document.getElementById("hex");
    const copyBtn = document.getElementById("copy-btn");
    const hexCodeInput = document.getElementById("hex-code");

    body.style.backgroundColor = "#000000";
    hexCode.innerHTML = "#000000";
    hexCodeInput.value = "#000000";

    generateBtn.addEventListener("click", () => {
        let hexKey = "#";
        for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * hex.length);
            hexKey += hex[index];
        }

        hexCode.innerHTML = hexKey;
        hexCodeInput.value = hexKey;
        body.style.backgroundColor = hexKey;
        body.style.transition = "1s";
    });

    copyBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(hexCodeInput.value);
            alert("Copied Hex Color: " + hexCodeInput.value);
        } catch (err) {
            console.error("Unable to copy to clipboard", err);
        }
    });
});