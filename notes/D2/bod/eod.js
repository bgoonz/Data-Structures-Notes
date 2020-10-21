function fib(n) {
	if (n === 1 || n === 2) {
		return 1;
	}

	return fib(n - 1) + fib(n - 2);
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
// console.log(fib(50));

function fibMemo(n, memo = { 1: 1, 2: 1 }) {
	if (n in memo) {
		return memo[n];
	}

	let result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
	memo[n] = result;
	return memo[n];
}

console.log(fibMemo(1));
console.log(fibMemo(2));
console.log(fibMemo(3));
console.log(fibMemo(4));
console.log(fibMemo(5));
console.log(fibMemo(50));

function fib(n) {
	if (n === 1 || n === 2) {
		return 1;
	}

	return fib(n - 1) + fib(n - 2);
}

function fibTab(n) {
	let table = [ 0, 1, 1 ];

	// if(n === 0 || n === 1){
	//    return 1;
	// }

	while (table.length - 1 < n) {
		table.push(table[table.length - 1] + table[table.length - 2]);
	}

	return table[n];
}

console.log(fibTab(1));
console.log(fibTab(2));
console.log(fibTab(3));
console.log(fibTab(4));
console.log(fibTab(5));
console.log(fibTab(50));
