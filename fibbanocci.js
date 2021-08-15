const fib = (n) => {

    let last = 0;
    let current = 1;

    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            console.log( i );
        } else {
            current = last + current;
            last = current - last;
            console.log(current);
        }
    }
};


fib(20)
