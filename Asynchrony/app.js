function random(min, max, delay, callback) {
    let data;
    let error;
    if (min < max) {
        data = Math.floor(Math.random() * (max - min) + min);
    } else if (min > max) {
        error = new Error('min > max')
    };
    setTimeout(() => callback(error, data), delay);
};
function callback(error, data){
    if (error) throw error;
    console.log(data);
};
random(-100, 100, 2000, callback);
random(1, 300, 3000, callback);
random(1000, 100, 4000,callback);
random(1, 300, 5000, callback);
