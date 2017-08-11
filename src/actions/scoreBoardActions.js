export const SCORE_ACTIONS = {
    GIVE_POINT_SUCCESSFUL :"SCORE_GIVE_POINT_SUCCESSFUL",    
    GIVE_GAME_SUCCESSFUL :"SCORE_GIVE_GAME_SUCCESSFUL",    
    GIVE_SET_SUCCESSFUL :"SCORE_GIVE_SET_SUCCESSFUL",    
    
    // CALCULATE_NON_CASH :"WORKBOOK_NON_CASH",

    ERROR: "LEARN_ERROR",
}



// ------------------------------
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

// ------------------------------
export function give_point(player_index) {
    return ((dispatch, getState) => {
        // const id = player.id;
        // // array -> Hashmap -> getID -> modify -> Hashmap -> Array.
        var players_array = getState().score.players;
        // var players_HashMap = new Map()
        
        // players_array.forEach(player=>{
        //     players_HashMap.set(player.id, player)
        // })

        // // search an object of the player
        // const player = players_HashMap.get(player_id);
        const player = { ...players_array[player_index] }
        const opponent = { ...players_array[player_index - 1 === 0 ? 0 : 1] };
        var is_game = false;
        if (player.point === 0) {
            player.point = 15;
        } else if (player.point === 15) {
            player.point = 30;
        } else if (player.point === 30) {
            player.point = 40;
        } else if (player.point === 40) {
            if (opponent.point === 40) {
                player.point = "AD";
            } else if (opponent.point === "AD") {
                player.point = 40;
                opponent.point = 40;
            } else if (opponent.point !== 40) {
                player.point = "Game";
                is_game = true;
                player.game++;
            }
        } else if (player.point === "AD") {
            if (opponent.point === 40) { 
                player.point = "Game";
                is_game = true;
                player.game++;
            }
        }
        
        console.log('Hello player', player);// log is here
        console.log('Hello opponent', opponent);// log is here
        const data = [player, opponent];
        data.sort((a, b) => {
            return a.id - b.id;
        })
        dispatch(give_point_successful(data))

        console.log('Hello foo', data[0]);// log is here

        if (is_game) {
            dispatch(give_game_successful(data));
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