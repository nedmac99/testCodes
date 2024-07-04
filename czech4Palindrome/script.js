const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (input) => {
    const originalInput = input;

    if(input === ''){
        alert("Please enter a valid input");
        return;
    }

    result.replaceChildren();

    const lowerCaseString = input.replace(/[^A-Z0-9a-z]/gi, '').toLowerCase();
    let resMess = `<strong>${originalInput}</strong> ${lowerCaseString === [...lowerCaseString].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

    const pElm = document.createElement('p');
    // pElm.className = 'user-input';
    pElm.innerHTML = resMess;
    result.appendChild(pElm);
    // result.classList.remove('hidden');
};

checkBtn.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
} );

userInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        checkPalindrome(userInput.value);
        userInput.value;
    }
});