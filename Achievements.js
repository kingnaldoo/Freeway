class Achievements extends Observer {
    onNotify(ev) {
        switch (ev) {
            case EVENTS.PLAYER_SCORED:
                console.log("Achievement:  Jogador Pontuou");
                break;
            case EVENTS.PLAYER_RUN_OVER:
                console.log("Achievement: Jogador foi atropelado");
                break;
            default:
                break;
        }
    }
}