const API_URL = 'https://api.adviceslip.com/advice';

if(screen.width >= 824) {
    Divider.src = "./assets/images/pattern-divider-desktop.svg"
} else {
    Divider.src = "./assets/images/pattern-divider-mobile.svg"
}

const getAdvice = async () => {
    AdviceId.innerHTML = '';
    Advice.innerHTML = '';

    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data.slip.advice);

    const adviceIdTextContainer = document.createElement('span');
    const adviceIdText = document.createTextNode(`ADVICE #${data.slip.id}`);
    adviceIdTextContainer.append(adviceIdText);
    AdviceId.append(adviceIdTextContainer);

    const adviceTextContainer = document.createElement('p');
    const adviceText = document.createTextNode(`${data.slip.advice}`)
    adviceTextContainer.append(adviceText);
    Advice.append(adviceTextContainer);
}

DiceButton.addEventListener('click', getAdvice);
getAdvice();