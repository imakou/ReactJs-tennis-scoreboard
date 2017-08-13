import { connect } from 'react-redux';
import TennisScoreBoard from '../components/TennisScoreBoard'
import * as actions from '../actions/scoreBoardActions';

function mapStateToProps(state) {
    return {
      score: state.score
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        init_players: (players) => {
            dispatch(actions.init_players(players))
        },
        give_point: (players,index) => {
            dispatch(actions.give_point(players,index))
        },
        give_set: (players) => {
            dispatch(actions.give_set(players))
        },
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TennisScoreBoard);