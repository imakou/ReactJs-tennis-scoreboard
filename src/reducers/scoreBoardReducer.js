import {SCORE_ACTIONS} from '../actions/scoreBoardActions'

const initialState = {
    players: [
        // {
        //     id:1,
        //     name: "Peter",
        //     point: 0,
        //     game: [],
        //     set:[],
        //     current_game:0,
        //     current_set:0,
        //     match: 0,
        //     win: false,
        //     server: true,
        // },
    ],
    current_point:[],
    current_set: 1,
    current_server:0,
}



export const score = (state = initialState, action) => {
    switch (action.type) {
        case SCORE_ACTIONS.INIT_PLAYERS_SUCCESSFUL:
            return {
                ...state,
                players: action.players,
            }
        case SCORE_ACTIONS.GIVE_POINT_SUCCESSFUL:
            return {
                ...state,
                players: action.data,
            }
        case SCORE_ACTIONS.GIVE_GAME_SUCCESSFUL:
            return {
                ...state,
                players: action.data,
            }
        case SCORE_ACTIONS.GIVE_SET_SUCCESSFUL:
            return {
                ...state,
                players: action.data,
            }
        case SCORE_ACTIONS.SWITCH_SERVER_SUCCESSFUL:
            return {
                ...state,
                players: action.data,
            }
        default:
            return {
                ...state
            }
    }
}