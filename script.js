function messageVerify() {
	let messageToVerify = prompt('Enter a message to verify.')

	if ((messageToVerify.indexOf('FR') >= 0) && (messageToVerify.indexOf('AI') >= 0)) {
		document.getElementById('result').innerHTML = `The message ${messageToVerify} is legit frfr!`;
	} else if (messageToVerify.indexOf('AI') >= 0 || messageToVerify.indexOf('aI') >= 0 || messageToVerify.indexOf('Ai') >= 0) {
		document.getElementById('result').innerHTML = `The message ${messageToVerify} is so not real grrrr`;
	} else if (messageToVerify.indexOf('FR') >= 0) {
		document.getElementById('result').innerHTML = `The message ${messageToVerify} is legitimate on skibidi`;
	} else {
		document.getElementById('result').innerHTML = `The message ${messageToVerify} not encoded yet yo try again yo!`;
	}
}
