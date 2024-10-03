const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const input4 = document.querySelector('.input4');

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');

const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');

const heading2 = document.getElementById('heading2');
const heading4 = document.getElementById('heading4');

let attempts = 5;

button1.addEventListener('click', function() {
    if (input1.value === "" || !isNaN(input1.value)) {
        if (input1.value === "") {
            document.getElementById('error1').innerText = 'Enter a name';
        } else {
            document.getElementById('error1').innerText = 'Enter a Name';
        }
        input1.value = '';
    } else {
        heading2.innerText = input1.value ;
        box1.style.display = 'none';
        box2.style.display = 'flex';
    }
});

button2.addEventListener('click', function() {
    if (input2.value < 1 || input2.value > 9) {
        document.getElementById('error2').innerText = 'Enter a number between 1-9';
        input2.value = '';
    } else {
        box2.style.display = 'none';
        box3.style.display = 'flex';
    }
});

button3.addEventListener('click', function() {
    if (!isNaN(input3.value)) {
        document.getElementById('error3').innerText = 'Enter a Name';
        input3.value = '';
    } else {
        heading4.innerText = input3.value + ", you have " + attempts + " Chances";
        box3.style.display = 'none';
        box4.style.display = 'flex';
    }
});

button4.addEventListener('click', function() {
    const guess = parseInt(input4.value);
    if (guess !== parseInt(input2.value)) {
        attempts--;
        document.getElementById('error4').innerText = attempts + ' Chance left.';
        input4.value = '';

        if (attempts === 0) {
            box4.style.display = 'none';
            box5.innerHTML = '<h2>Game Over! The number was ' + input2.value + '.</h2>';
            box5.style.display = 'flex';
        }
    } else {
        box4.style.display = 'none';
        box5.innerHTML = '<h2>Congratulations ' + input3.value + '! You Win</h2>';
        box5.style.display = 'flex';
    }
});
