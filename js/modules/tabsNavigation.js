export const navChangeColor = () => {
    const list = document.querySelector('.navigation__list');
    const navLinks = document.querySelectorAll('.navigation__link');

    list.addEventListener('click', e => {
        const button = e.target.closest('.navigation__item');

        if (button) {
            const item = button.querySelector('.navigation__link');
            navLinks.forEach((link) => {
                if (item === link) {
                    link.classList.contains('navigation__link_active') ? link.classList.remove('navigation__link_active') : link.classList.add('navigation__link_active')
                } else {
                    link.classList.remove('navigation__link_active')
                }
            })
        }
    })
}


