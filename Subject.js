class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notify(ev) {
        for (const observer of this.observers) {
            observer.onNotify(ev);
        }
    }
}