const rateButton = document.querySelectorAll('.rate-button');
const submitBtn = document.querySelector('.submit');
const ratingVisibleContainer = document.querySelector('.rating-box-visible');
const successContainer = document.querySelector('.success');
const selectedNumber = document.getElementById('selectedNumber');
const errorMessage = document.querySelector('.error-message');
const errorMessageText = document.getElementById('errorMessageText');
let rateSelected = 0;

for (let i = 0; i < rateButton.length; i++) {
    rateButton[i].addEventListener('click', () => {
        for (const rateButtons of rateButton) {
            rateButtons.classList.remove('rate-button-js');
        };
        rateButton[i].classList.add('rate-button-js');
        rateSelected = 1;
        selectedNumber.innerHTML = rateButton[i].value;
    });
    rateButton[i].addEventListener('mouseenter', () => {
        if (rateButton[i].classList.contains('rate-button-js')) {
            return
        } else {
            rateButton[i].classList.add('rate-button-hover-js');
        };
    });
    rateButton[i].addEventListener('mouseleave', () => {
        rateButton[i].classList.remove('rate-button-hover-js');
    });
};

submitBtn.addEventListener('click', e => {
    if (rateSelected === 1) {
        ratingVisibleContainer.style.display = 'none';
        successContainer.style.display = 'flex';
        errorMessage.style.top = '40px';
        errorMessageText.textContent = 'Thank you';

        setTimeout(() => {
            errorMessage.style.top = '-10%';
        }, 3000);
    } else {
        errorMessage.style.top = '40px';
        errorMessageText.textContent = 'Please rate us.';

        setTimeout(() => {
            errorMessage.style.top = '-10%';
        }, 3000);
    };
});