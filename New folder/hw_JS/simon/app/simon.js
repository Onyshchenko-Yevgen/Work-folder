let organs = 'abcdefghijklmnopqrstuvwxyz0123456789_-!@#$%^&*()',
		orgLen = organs.length, // len ==> length
		len = parseInt(prompt('Enter a len of string', 0)), // ==> 0
		answ = '',
		char = '';

for(let i = 0; i < len; i++){
	char = organs[Math.floor(Math.random() * orgLen)];
	if(Math.random() > 0,5){
		char = char.toLowerCase();
	}
	answ += char;
}

console.log("Random string with length " + len + " is: " + answ);