export const SCORE_ACTIONS = {
    GIVE_POINT_SUCCESSFUL: "SCORE_GIVE_POINT_SUCCESSFUL",
    GIVE_GAME_SUCCESSFUL: "SCORE_GIVE_GAME_SUCCESSFUL",
    GIVE_SET_SUCCESSFUL: "SCORE_GIVE_SET_SUCCESSFUL",
    INIT_PLAYERS_SUCCESSFUL: "SCORE_INIT_PLAYERS_SUCCESSFUL",
    SWITCH_SERVER_SUCCESSFUL: "SCORE_SWITCH_SERVER_SUCCESSFUL",
    WIN_THE_GMAE_SUCCESSFUL: "SCORE_WIN_THE_GMAE_SUCCESSFUL",
    RESET_SCORE_SUCCESSFUL: "SCORE_RESET_SCORE_SUCCESSFUL",

    // CALCULATE_NON_CASH :"WORKBOOK_NON_CASH",

    ERROR: "LEARN_ERROR",
}



// ------------------------------
function init_players_successful(data) {
    return {
        type: SCORE_ACTIONS.INIT_PLAYERS_SUCCESSFUL,
        players: data
    }
}

function give_point_successful(data) {
    return {
        type: SCORE_ACTIONS.GIVE_POINT_SUCCESSFUL,
        score: data
    }
}

function give_game_successful(data) {
    return {
        type: SCORE_ACTIONS.GIVE_GAME_SUCCESSFUL,
        data: data
    }
}

function give_set_successful(data) {
    return {
        type: SCORE_ACTIONS.GIVE_SET_SUCCESSFUL,
        data: data
    }
}

function switch_server_successful() {
    return {
        type: SCORE_ACTIONS.SWITCH_SERVER_SUCCESSFUL,
    }
}

function reset_current_score_successful() {
    return {
        type: SCORE_ACTIONS.RESET_SCORE_SUCCESSFUL,
        data: [0, 0]
    }
}

function win_the_game_successful(data) {
    return {
        type: SCORE_ACTIONS.WIN_THE_GMAE_SUCCESSFUL,
        winner: data
    }
}

// ------------------------------
export function init_players(players) {
    return ((dispatch, getState) => {
        dispatch(init_players_successful(players))
    })
}

export function reset_current_score(players) {
    return ((dispatch, getState) => {
        dispatch(reset_current_score_successful())
    })
}

export function give_match() {
    return ((dispatch, getState) => {
        const players = getState().score.players;
        const player_index = 0;
        const opponent_index = player_index - 1 === 0 ? 0 : 1;
        const player_sets = players[player_index].got_set.length !== 0 ? players[player_index].got_set.reduce((sum, value) => {
            return sum + value;
        }) : 0;
        const opponent_sets = players[opponent_index].got_set.length !== 0 ? players[opponent_index].got_set.reduce((sum, value) => {
            return sum + value;
        }) : 0;

        if (player_sets >= 3) {
            dispatch(win_the_game_successful(players[player_index].name))
        } else if (opponent_sets >=3){
            dispatch(win_the_game_successful(players[opponent_index].name))
        }
    })
}

export function give_set(players) {
    return ((dispatch, getState) => {
        var is_gave_set = false;
        const player_index = 0;
        const opponent_index = player_index - 1 === 0 ? 0 : 1;
        const current_game = getState().score.current_game;

        var player = {
            ...players[player_index],
            set: [...players[player_index].set],
            got_set: [...players[player_index].got_set],
        }

        var opponent = {
            ...players[opponent_index],
            set: [...players[opponent_index].set],
            got_set: [...players[opponent_index].got_set],
        }


        if (current_game[player_index] >= 2 && current_game[player_index] - current_game[opponent_index] >= 2) {
            updateSet(player_index)

        } else if (current_game[opponent_index] >= 2 && current_game[opponent_index] - current_game[player_index] >= 2) {
            updateSet(opponent_index)
        }

        function updateSet(INDEX) {
            if (player_index === INDEX) {
                // player got the set
                player.got_set.push(1);
                opponent.got_set.push(0);
            } else {
                player.got_set.push(0);
                opponent.got_set.push(1);
            }
            player.set.push(current_game[player_index]);
            opponent.set.push(current_game[opponent_index]);
            is_gave_set = true;
        }

        is_gave_set ? dispatch(give_set_successful([player, opponent])) : false
    }

    )

}

export function give_game(index) {
    return ((dispatch, getState) => {
        const game = [...getState().score.current_game];
        const opponent_index = index - 1 === 0 ? 0 : 1
        game[index]++;
        // console.log('Hello game', game);// log is here
        dispatch(give_game_successful(game));
        // give set down below
        if ((game[index] >= 2 ||
            game[opponent_index] >= 2) &&
            (game[index] - game[opponent_index] >= 2 ||
            game[opponent_index] - game[index] >= 2)) {
            console.log('Hello game', game); // log is here
        }
    })
}

export function give_point(players, index) {
    return ((dispatch, getState) => {

        var is_game = false;
        const is_match_over = getState().score.match_over;
        var current_score = [...getState().score.current_point];

        const opponent_index = index - 1 === 0 ? 0 : 1

        if (current_score[index] === 0) {
            current_score[index] = 15;
        } else if (current_score[index] === 15) {
            current_score[index] = 30;
        } else if (current_score[index] === 30) {
            current_score[index] = 40;
        } else if (current_score[index] === 40) {
            if (current_score[opponent_index] === 40) {
                current_score[index] = "AD";
            } else if (current_score[opponent_index] === "AD") {
                current_score[index] = 40;
                current_score[opponent_index] = 40;
            } else if (current_score[opponent_index] !== 40) {
                // player gets the game;
                dispatch(give_game(index));
                is_game = true
            }
        } else if (current_score[index] === "AD") {
            if (current_score[opponent_index] === 40) {
                // player gets the game;
                dispatch(give_game(index));
                is_game = true
            }
        }

        const op = current_score;
        if (is_game) {
            dispatch(reset_current_score_successful());
            dispatch(switch_server_successful());
        } else if(!is_match_over){
            dispatch(give_point_successful(op))
        }
    })
}
