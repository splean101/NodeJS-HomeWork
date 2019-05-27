const EventEmitter = require('events');

class Hare extends EventEmitter {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y
    }
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    mooving() {
        this.x = Math.round(Math.random() * 100);
        this.y = Math.round(Math.random() * 100);
    }
};

const hare = new Hare(0, 0);

class Wolf extends EventEmitter {
    watch() {
        console.log(`hare cordinates x: ${hare.x} y: ${hare.y}`)
    }
};

const wolf = new Wolf();

hare.on('jump', hare.mooving);
hare.on('jump', wolf.watch)
hare.emit('jump');



