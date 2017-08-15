import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TennisScoreBoard extends Component {
    componentDidMount() {
        var players = [
            {
                id: 1,
                name: "Peter",
                point: 0,
                set: [],
                match: 0,
                got_set: [],
                win: false,
                server: true,
            },
            {
                id: 2,
                name: "Allen",
                point: 0,
                set: [],
                match: 0,
                got_set: [],
                win: false,
                server: false,
            }
        ];
        this.props.init_players(players);
    }
    

    componentDidUpdate(prevProps, prevState) {
        // console.log('Hello prevProps', prevProps.score);// log is here
        // console.log('Hello prevState', this.props.score);// log is here
        this.props.give_set(this.props.score.players)
        if (this.props.score.winner === "") {
            this.props.give_match()
        }
    }

    
    handleClick(e,i) {
        // console.log('Hello e', e);// log is here
        // console.log('Hello i', i);// log is here
        this.props.give_point(this.props.score.players, i)
    }
    renderScore() {
        const players = this.props.score.players||[];
        const current_game = this.props.score.current_game||[];
        const current_point = this.props.score.current_point||[];
        const current_server = this.props.score.current_server||0;
        const score = [];
        function server(index) {
            if (current_server === index) {
                console.log('Hello current_server', current_server);// log is here
                return "Server";
            }
        }
        players.forEach(function (e,i) {
            score.push(
                <div key={i}>
                    <h5>
                        {`${e.name} (${e.set},${current_game[i]}) `}{server(i)}
                        <button onClick={this.handleClick.bind(this,e,i)}>Click</button>
                    </h5>
                    <span>
                        {`| ${current_point[i]}`}
                    </span>
                </div>
            )
        }, this);
        return score;
    }
    render() {
        // console.log('Hello this.props', this.props.score.players);// log is here
        const score = this.renderScore();
        const winner = this.props.score.winner;
        return (
            <div>
                {score}
                <h4>
                Winner: {winner}
                </h4>
            </div>
        );
    }
}

TennisScoreBoard.propTypes = {

};

export default TennisScoreBoard;