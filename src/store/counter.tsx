import { makeAutoObservable } from "mobx";

class Counter {
    count: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increase = (): void => {
        this.count = this.count + 1;
        console.log("incr", this.count)
    }
    
    decrease =  (): void => {
        this.count = this.count - 1;
        console.log("decr", this.count)
    }
}

export default new Counter();