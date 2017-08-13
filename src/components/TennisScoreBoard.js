import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TennisScoreBoard extends Component {
    componentDidMount() {
        var players = [
            {
                id: 1,
                name: "Peter",
                point: 0,
                game: [],
                set: [],
                current_game: 0,
                current_set: 0,
                match: 0,
                win: false,
                server: true,
            },
            {
                id: 2,
                name: "Allen",
                point: 0,
                game: [],
                set: [],
                current_game: 0,
                current_set: 0,
                match: 0,
                win: false,
                server: false,
            }
        ];
        this.props.init_players(players);
    }
    
    componentDidUpdate() {
        // console.log('Hello update');// log is here
        this.props.give_set(this.props.score.players);
    }
    handleClick(e,i) {
        console.log('Hello e', e);// log is here
        console.log('Hello i', i);// log is here
        this.props.give_point(this.props.score.players, i)
    }
    renderScore() {
        const players = this.props.score.players||[];
        const score = [];
        function server(bool) {
            return bool ? "Server" : "";
        }
        players.forEach(function (e,i) {
            score.push(
                <div key={i}>
                    <h5>
                        {`${e.name} (${e.set}) `}{server(e.server)}
                        <button onClick={this.handleClick.bind(this,e,i)}>Click</button>
                    </h5>
                    <span>
                        {`${e.current_game} | ${e.point}`}
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