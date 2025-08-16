// complete the given function

function palindrome(str){
	let newStr = str.split("").reverse().join("");
	
	if(str === newStr){
		console.log("true")
	}else{
		console.log(false)
	}
}

module.exports = palindrome
