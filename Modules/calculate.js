module.exports = {
    perimeter: (a, b) => {
        if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
            console.log('calc this:' + this);            
            return a * 2 + b * 2;
        }else{
            throw new Error('there must be a numbers');
        };
    },
    square: (a, b) => {
        if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
            return a * b;
        };
    }
};