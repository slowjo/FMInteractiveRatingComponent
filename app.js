const form = document.querySelector('form');
const radios = document.querySelectorAll('input[name="rating"]');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const ratingDisplayPoints = document.querySelector('.rating-display-points');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let selectedValue = undefined;

    radios.forEach((radio) => {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    })

    console.log('submitted');
    console.log(selectedValue);

    if (!selectedValue) {
        return;
    }

    ratingDisplayPoints.textContent = selectedValue;

    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
});
