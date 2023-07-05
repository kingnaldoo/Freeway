class Observer {
    constructor() { }

    onNotify(ev) {
        throw new Error("Método onNotify deve ser implementado");
    }
}