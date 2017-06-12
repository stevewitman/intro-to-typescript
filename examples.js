function add(a, b) {
    return a + b;
}

add(2, x);

//

class Forecast {

}

//

class Forecast {
    hi: number;
    low: number;
    sky: string;

    constructor(hi: number, low: number, sky: string) {

    }
}

//

class Forecast {
    hi: number;
    low: number;
    sky: string;

    constructor(hi: number, low: number, sky: string) {
        this.hi = hi;
        this.low = low;
        this.sky = sky;
    }
}

//

class Forecast {

    constructor(
        public hi: number,
        public low: number,
        private sky: string) {
    }

}

//

class Forecast {

    constructor(
        public hi: number,
        public low: number,
        private sky: string) {
    }

    getDetails() {
        return `
            Details: 
            Hi: ${this.hi} Low: ${this.low}
            Sky: ${this.sky}
        `
    }

}

//

let monday = new Forecast(90, 51, 'Sunny');

//

interface Details {
    hi: number,
    low: number,
    sky?: string
}

class Forecast {

    constructor() {
    }

    getDetails() {
        return `
            Details: 
            Hi: ${this.hi} Low: ${this.low}
            Sky: ${this.sky}
        `
    }

}

let monday = new Forecast(90, 51);

//

interface Details {
    hi: number,
    low: number,
    sky?: string
}

class Forecast {

    constructor(public details: Details) {
    }

    getDetails() {
        return `
            Details: 
            Hi: ${this.details.hi} Low: ${this.details.low}
            Sky: ${this.details.sky}
        `
    }

}

let monday = new Forecast({hi:72, low: 45});

