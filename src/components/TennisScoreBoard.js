import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TennisScoreBoard extends Component {
    renderScore() {
        const players = this.props.score.players||[];
        const score = [];
        players.forEach(function (e,i) {
            // console.log('Hello foo', e);// log is here
            score.push(
                <div key={i}>
                    <h5>
                        {e.name}
                    </h5>
                    <span>
                        {e.point}
                    </span>
                </div>
            )
        }, this);
        return score;
    }
    render() {
        // console.log('Hello this.props', this.props.score.players);// log is here
        const score = this.renderScore();
        return (
            <div>
                {score}
            </div>
        );
    }
}

TennisScoreBoard.propTypes = {

};

export default TennisScoreBoard;