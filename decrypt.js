const textInput = document.getElementById('text');
const shiftInput = document.getElementById('shift');
const decryptButton = document.getElementById('decrypt');
const resultParagraph = document.getElementById('result');

decryptButton.addEventListener('click', () => {
	const text = textInput.value;
	const shift = parseInt(shiftInput.value);
	const decryptedText = caesarDecrypt(text, shift);
	resultParagraph.textContent = decryptedText;
});

function caesarDecrypt(text, shift) {
	const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
	const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const num = '0123456789';
	const spl='/.,*%$#@+-!_';
	let decryptedText = '';

	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		if (lowerAlphabet.includes(char)) {
			const index = lowerAlphabet.indexOf(char);
			const shiftedIndex = (index - shift + 25) % 25;
			decryptedText += lowerAlphabet[shiftedIndex];
		} else if (upperAlphabet.includes(char)) {
			const index = upperAlphabet.indexOf(char);
			const shiftedIndex = (index - shift + 25) % 25;
			decryptedText += upperAlphabet[shiftedIndex];}
			else if (num.includes(char)) {
				const index = num.indexOf(char);
				const shiftedIndex = (index - shift + 10) % 10;
				decryptedText += num[shiftedIndex];
		}else if (spl.includes(char)) {
			const index = spl.indexOf(char);
			const shiftedIndex = (index - shift + 12 ) %12;
			decryptedText += spl[shiftedIndex];}
			
		
		else {
			decryptedText += char;
		}
	}
	return decryptedText;
}
