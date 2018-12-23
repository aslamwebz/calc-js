

var numberButtons = document.querySelectorAll('.number');
var display = document.getElementById('display');
var controller = document.querySelectorAll('.controller');
var total = '';
var tempVal = '';
var curOperator = '';

for (var i = 0 ; i < numberButtons.length; i++) {
   	numberButtons[i].addEventListener('click' , function(e){
	display.innerHTML += this.value;
	total += this.value
});

}

for (var i = 0 ; i < controller.length; i++) {
   	controller[i].addEventListener('click' , function(e){
	display.innerHTML += ' ' + this.value + ' ';

		if(this.value === '+'){
			calcStart('+');
			// if(curOperator == ''){
			// 	curOperator = '+';
			// 	//assining prev val to tempval
			// 	tempVal = Number(total);
			// 	total = '';
			// } else {
			// 	//sending both prev val and total to the machine
			// 	if(total != ''){
			// 		calc(tempVal, total, curOperator);
			// 	}
			// 	total = '';
			// 	curOperator = '+';

			// }
		}

		if(this.value === '-'){
			if(curOperator == ''){
				curOperator = '-';
				//assining prev val to tempval
				tempVal = Number(total);
				total = '';
			} else {
				//sending both prev val and total to the machine
				if(total != ''){
					calc(tempVal, total, curOperator);
				}
				total = '';
				curOperator = '-';

			}
		}

		if(this.value === '/'){
			if(curOperator == ''){
				curOperator = '/';
				//assining prev val to tempval
				tempVal = Number(total);
				total = '';
			} else {
				//sending both prev val and total to the machine
				if(total != ''){
					calc(tempVal, total, curOperator);
				}
				total = '';
				curOperator = '/';

			}
		}

		if(this.value === '*'){
			if(curOperator == ''){
				curOperator = '*';
				//assining prev val to tempval
				tempVal = Number(total);
				total = '';
			} else {
				//sending both prev val and total to the machine
				if(total != ''){
					calc(tempVal, total, curOperator);
				}
				total = '';
				curOperator = '*';

			}
		}



	});
}


function calcStart(operator){
	if(curOperator == ''){
			curOperator = operator;
			//assining prev val to tempval
			tempVal = Number(total);
			total = '';
		} else {
			//sending both prev val and total to the machine
			if(total != ''){
				calc(tempVal, total, operator);
			}
			total = '';
			curOperator = operator;

		}
}


function calc(num1, num2, operator){
	console.log(num1 + '/' + num2,operator);
	num1 = Number(num1);
	num2 = Number(num2);
	if(operator == '+'){
		tempVal = num1 + num2;
		console.log(tempVal);
	}
	if(operator == '-'){
		tempVal = num1 - num2;
		console.log(tempVal);
	}
	if(operator == '/'){
		tempVal = num1 / num2;
		console.log(tempVal);
	}
	if(operator == '*'){
		tempVal = num1 * num2;
		console.log(tempVal);
	}
	


}

function equals(){
	if(total != ''){
		calc(tempVal, total, curOperator);
	}
	total = '';
	display.innerHTML = tempVal + '';
}


function clearFunction(){
// display = document.getElementById('display');
 	total = '';
 	tempVal = '';
	display.innerHTML = '';
	curOperator = ''
}


$(document).keypress(function(e) {
	if(e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9 || 
		e.key == 0){
	total += Number(e.key);
	display.innerHTML += e.key;
	}

	if(e.key == '*' ||
		e.key == '+' ||
		e.key == '-' ||
		e.key == '/' ){
	
	}

	// if(e.key == 'Enter'){
	// 	 equals();
	// }
});