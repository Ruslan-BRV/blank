const styles = `
<style>
    .hide-text {
        height: 200px;
        overflow: hidden;
        position: relative;
    }
    
    .hide-text::after {
        bottom: 0;
        left: 0;
        content: '';
        position: absolute;
        width: 100%;
        height: 100px;
        background: linear-gradient(0deg, white, transparent);
    }
    
    .hide-text--active {
        height: auto;
    }
    
    .hide-text--active::after {
        display: none;
    }
</style>`


const hideTextBlocks = document.querySelectorAll('.hide-text');
hideTextBlocks && hideTextBlocks.forEach(function (block) {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('hide-text-more');
    buttonElement.style.display = 'inline';
    buttonElement.style.border = 'none';
    buttonElement.style.background = 'none';
    buttonElement.style.borderBottom = '2px dashed';
    buttonElement.style.padding = '0';
    buttonElement.style.marginTop = '16px';
    buttonElement.textContent = 'Читать дальше...';
    block.parentNode.insertBefore(buttonElement, block.nextSibling);

    const buttonMore = block.parentNode.querySelector('.hide-text-more');
    buttonMore.addEventListener('click', () => {
        buttonMore.classList.toggle('active');
        if (buttonMore.classList.contains('active')) {
            block.classList.add('hide-text--active');
            buttonMore.textContent = 'Скрыть'
        } else {
            block.classList.remove('hide-text--active');
            buttonMore.textContent = 'Читать дальше..';
        }
    })
});