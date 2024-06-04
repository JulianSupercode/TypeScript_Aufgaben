window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.example') as HTMLButtonElement;
    const elements = document.querySelectorAll('.example');

    button.addEventListener('click', () => {
        elements.forEach(element => {
            (element as HTMLElement).style.backgroundColor = getRandomColor();
        });
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
