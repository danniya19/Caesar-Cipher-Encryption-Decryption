const textInput = document.getElementById('text');
const shiftInput = document.getElementById('shift');
const encryptButton = document.getElementById('encrypt');
const resultParagraph = document.getElementById('result');

encryptButton.addEventListener('click', () => {
	const text = textInput.value;
	const shift = parseInt(shiftInput.value);
	const encryptedText = caesarEncrypt(text, shift);
	resultParagraph.textContent = encryptedText;
});

function caesarEncrypt(text, shift) {
	const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
	const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const num = '0123456789';
	const spl='/.,*%$#@+-!_';
	let encryptedText = '';

	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		if (lowerAlphabet.includes(char)) {
			const index = lowerAlphabet.indexOf(char);
			const shiftedIndex = (index + shift) % 25;
			encryptedText += lowerAlphabet[shiftedIndex];
		} else if (upperAlphabet.includes(char)) {
			const index = upperAlphabet.indexOf(char);
			const shiftedIndex = (index + shift) % 25;
			encryptedText += upperAlphabet[shiftedIndex];}
			else if (num.includes(char)) {
				const index = num.indexOf(char);
				const shiftedIndex = (index + shift) %10;
				encryptedText += num[shiftedIndex];
		}
		else if (spl.includes(char)) {
			const index = spl.indexOf(char);
			const shiftedIndex = (index + shift) %12;
			encryptedText += spl[shiftedIndex];}
			 else {
			encryptedText += char;
		}
	}
	return encryptedText;
}