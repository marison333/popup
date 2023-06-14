window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.quarySector(".popup").style.display = "block";
        },
        1000
    )
});

document.quarySector("#close").addEventListener("click", function () {
    document.quarySector(".popup").style.display = "none";
});

// Marison: Dit heb ik gemaakt met een tutorial https://codingartistweb.com/2021/08/show-popup-automatically-after-page-load-using-javascript/