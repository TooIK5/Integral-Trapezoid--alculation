let N = 1000,
    EX = 0.05,
	integral;

let MatchFunction = (X) => {
	let y = Math.exp(-Math.sin(X*X));
	return y;
};

let Calculate = (x0, xk) => {
	let dx = (xk - x0)/N,
		xn = x0 + dx,
		sum = 0;
	for (let i = 0; i < N - 1; i++)
	{
		sum += ((MatchFunction(x0) + MatchFunction(xn))/2);
		x0 += dx;
		xn += dx;
	}
	integral = sum*dx;
	return document.write('Just integral: ' + integral.toFixed(5));
};

let ExactCalculate = (x0, xk) => {
	let Difference,
		EXintegral;
		do {
		N *= 2;
		let dx = (xk - x0)/N,
			sum = 0,
			xn = x0 + dx;
		for (let i = 0; i < N - 1; i++)
		{
			sum += ((MatchFunction(x0)+MatchFunction(xn))/2);
			x0 += dx;
			xn += dx;
		}
		 EXintegral = sum*dx;
		 Difference = Math.abs(EXintegral - integral);
	} while (Difference > EX);
return document.write('<br/>', 'Exact integral: ' + EXintegral.toFixed(5))
};

Calculate(-1,5);
ExactCalculate(-1,5);


