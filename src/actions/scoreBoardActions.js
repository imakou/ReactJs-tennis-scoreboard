export const SCORE_ACTIONS = {
    GIVE_POINT_SUCCESSFUL: "SCORE_GIVE_POINT_SUCCESSFUL",
    GIVE_GAME_SUCCESSFUL: "SCORE_GIVE_GAME_SUCCESSFUL",
    GIVE_SET_SUCCESSFUL: "SCORE_GIVE_SET_SUCCESSFUL",
    INIT_PLAYERS_SUCCESSFUL: "SCORE_INIT_PLAYERS_SUCCESSFUL",
    SWITCH_SERVER_SUCCESSFUL: "SCORE_SWITCH_SERVER_SUCCESSFUL",

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
        data: data
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

function switch_server_successful(data) {
    return {
        type: SCORE_ACTIONS.SWITCH_SERVER_SUCCESSFUL,
        data: data
    }
}

// ------------------------------
export function init_players(players) {
    return ((dispatch, getState) => {
        dispatch(init_players_successful(players))
    })
}

export function switch_server(players) {
    return ((dispatch, getState) => {
        var p = { ...players[0],server:!players[0].server }
        var o = { ...players[1],server:!players[1].server }
        
        dispatch(switch_server_successful([p,o]))
    })
}

export function give_set(players) {
    return ((dispatch, getState) => {
        const index = 0;
        const Player = {
            ...players[index]
        };
        const opponent = {
            ...players[index - 1 === 0 ? 0 : 1]
        };
        var set = [...Player.set];
        var o_set = [...opponent.set];

        if ((Player.current_game >= 2 ||
            opponent.current_game >= 2) &&
            (Player.current_game - opponent.current_game >= 2 ||
                opponent.current_game - Player.current_game >= 2))
        {
            
            set.push(Player.current_game);
            o_set.push(opponent.current_game);
            // console.log('Hello set', set);// log is here
            var p = {
                ...Player,
                set: set,
                current_game: 0
            }
            var o = {
                ...opponent,
                set: o_set,
                current_game: 0
            }
            dispatch(give_set_successful([p, o]))
        } 
    }

    )

}

export function give_point(players, index) {
    return ((dispatch, getState) => {

        var is_game = false;

        const Player = {
            ...players[index]
        };
        const opponent = {
            ...players[index - 1 === 0 ? 0 : 1]
        };
        // console.log('Hello index', index); // log is here
        // console.log('Hello Player players', players); // log is here
        // console.log('Hello Player game', Player); // log is here
        // console.log('Hello opponent game', opponent); // log is here
        var c = {}
        if (Player.point === 0) {
            Player.point = 15;
        } else if (Player.point === 15) {
            Player.point = 30;
        } else if (Player.point === 30) {
            Player.point = 40;
        } else if (Player.point === 40) {
            if (opponent.point === 40) {
                Player.point = "AD";
            } else if (opponent.point === "AD") {
                Player.point = 40;
                opponent.point = 40;
            } else if (opponent.point !== 40) {
                // Player.point = "Game";
                getPoint();
            }
        } else if (Player.point === "AD") {
            if (opponent.point === 40) {
                // Player.point = "Game";
                getPoint();
            }
        }
        const data = [Player, opponent];
        data.sort((a, b) => {
            return a.id - b.id;
        })

        if (is_game) {
            dispatch(give_game_successful(data));
            dispatch(switch_server(data));
        } else {
            dispatch(give_point_successful(data))
        }

        function getPoint() {
            Player.point = 0;
            opponent.point = 0;
            is_game = true;
            Player.current_game++;
        }
    // player.point = cal_point(player, opponent);
    })
}

function cal_point(player, opponent) {
    if (player.point === 0) {
        player.point = 15;
    } else if (player.point === 15) {
        player.point = 30;
    } else if (player.point === 30) {
        player.point = 40;
    } else if (player.point === 40 && opponent.point === 40) {
        player.point = "AD"
    } else if (player.point === 40 && opponent.point !== 40 || player.point === "AD") {
        player.point = "Game"
    } else if (opponent.point === "AD") {
        player.point = 40;
    }


}