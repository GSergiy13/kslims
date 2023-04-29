const modal = (btnSelector,closeSelector, contentSelector) => {
    const trigers = document.querySelectorAll(btnSelector);
    const close = document.querySelectorAll(closeSelector);
    const content = document.querySelector(contentSelector);

    trigers.forEach((elem) => {elem.addEventListener('click', () => {content.classList.add('active')})});
    close.forEach((elem) => {elem.addEventListener('click', () => {content.classList.remove('active')})});
} 


export default modal;