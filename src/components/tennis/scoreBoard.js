import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScoreBoard extends Component {
    renderPoint() {
        const index = this.props.index;
        const Point = this.props.score.current_point[index]
        console.log("fff,", this.props.score.current_point)
        return (
            <div className="player_score_point">
                {Point===0? 0 : Point}
            </div>
        )
        
    }
    renderGame() {
        const index = this.props.index;
        const Current_Game = this.props.score.current_game[index]
        const GotTheGame = this.props.player.got_set
        const winner = this.props.score.winner;
        const Game = this.props.player.set
        const Games = [];
        Game.forEach(function (g, i) {
            const GameStyle = GotTheGame[i]===1 ? "player_score_game player_score_got_set":"player_score_game"
            Games.push(
                <div key={i} className={GameStyle}>
                    {g=== 0? 0:g}
                </div>
            )
        }, this);

        if (Game.length !== 3 && Game.length<=3 && winner==="") {
            Games.push(
                <div key="999" className="player_score_game">
                {Current_Game}
            </div>
            )
        }
        
        return (
            Games
        )
    }
    render() {
        const index = this.props.index;
        const { player, score } = this.props;
        const { current_server } = score;
        const player_name = `${player.personal_info.f_name.slice(0, 1)}. ${player.personal_info.l_name}`;
        const Server = current_server === index ? { width: "320px" } : { width: "0px" };

        return (
            
            <div className="player_row">
              <div className="player_nation">
                        <p className="player_nation_name">{player.personal_info.nation}</p>
                <img className="player_nation_flag" src={player.personal_info.national_flag} alt="flag" />
              </div>
              <div className="player_name">
                    <div className="player_name_id">{player_name}</div>
                    <div className="player_name_bg" style={Server}></div>
              </div>
              <div className="player_score">
                {this.renderGame()}
                {this.renderPoint()}
              </div>
            </div>
        );
    }
}

ScoreBoard.propTypes = {
    index: PropTypes.number.isRequired,
    score: PropTypes.object.isRequired,
};

export default ScoreBoard;