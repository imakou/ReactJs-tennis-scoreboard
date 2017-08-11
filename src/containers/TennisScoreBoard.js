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
        give_point: () => {
            dispatch(actions.give_point())
        },
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TennisScoreBoard);