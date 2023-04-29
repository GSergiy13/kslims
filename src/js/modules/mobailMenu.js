const mobailMenu = () => {
    const trigers = document.querySelector('.btn-mobail')
    const content = document.querySelector('.navigarion ');

    let trigerOverflow = false;

        trigers.addEventListener('click', function(e) {
            if(trigerOverflow != true) {
                trigerOverflow = true;
                document.body.style.overflow = 'hidden';
            } else {
                trigerOverflow = false;
                document.body.style.overflow = '';
            }

            trigers.classList.toggle('active');
            content.classList.toggle('active');
        });


            const a = document.querySelectorAll('.menu-list__item-link');

        a.forEach((elem) => {
            elem.addEventListener('click', function(e) {
                trigers.classList.remove('active');
                content.classList.remove('active');
                document.body.style.overflow = '';
            })
        })
} 


export default mobailMenu;