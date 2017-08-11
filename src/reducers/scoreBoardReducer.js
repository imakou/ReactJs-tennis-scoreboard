import {SCORE_ACTIONS} from '../actions/scoreBoardActions'

const initialState = {
    players: [
        {
            id:1,
            name: "Peter",
            point: 15,
            game: 0,
            match: 0,
            win: false,
            server: true,
        },
        {
            id:2,
            name: "Allen",
            point: 15,
            game: 0,
            match: 0,
            win: false,
            server: true,
        }
    ],

}



export const score = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return {
                ...state
            }
    }
}