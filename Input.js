class Input {
    static x = 400;
    static y = 370;
    static velocity = 5;

    static calculatePosition(evt) {
        console.log(evt.key);
        if (Input.y < 400 && Input.y > 25) {
            if (evt.key == 'ArrowUp') {
                return Input.y -= Input.velocity;
            }
            if (evt.key == 'ArrowDown') {
                return Input.y += Input.velocity;
            }
        }
        return Input.y = 370;

    }
}