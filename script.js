// complete the given function

function palindrome(str){

	let cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
	
	let newStr = cleanStr.split("").reverse().join("");
	
	if(cleanStr === newStr){
		console.log("true")
	}else{
		console.log("false")
	}
}

module.exports = palindrome
