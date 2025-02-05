document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", () => {
            let link = document.createElement("a");
       link.href = "Shruti_Resume.pdf"
            link.download = "Shruti_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
