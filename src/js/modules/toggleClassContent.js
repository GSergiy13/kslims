const toggleClassContent = (btnSelector, triger = 'prev') => {
    const trigersSelector = document.querySelectorAll(btnSelector);


    trigersSelector.forEach((elem) => {
        elem.addEventListener('click', function(e) {
            e.preventDefault();

            elem.classList.toggle('active');

            // console.log(elem.previousElementSibling)

            (triger === 'prev') ? elem.previousElementSibling.classList.toggle('active') : elem.nextElementSibling.classList.toggle('active');
        });
    });
} 


export default toggleClassContent;