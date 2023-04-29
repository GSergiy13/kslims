const acorrdionBox = (trigerSelector) => {
    const triger = document.querySelectorAll(trigerSelector);

    triger.forEach(elem => {
        elem.addEventListener('click', function() {
            elem.classList.toggle("active");
            let panel = elem.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    })
}

export default acorrdionBox;