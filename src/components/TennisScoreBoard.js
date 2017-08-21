import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss'
//
import Background from './tennis/background'
import Players_card from './tennis/players_card'
import ScoreBoard from './tennis/scoreBoard'
import Footer from './tennis/Footer'

class TennisScoreBoard extends Component {
    componentDidMount() {
        var players = [
            {
                id: 1,
                personal_info: {
                    f_name: "Roger",
                    l_name: "Federer",
                    img_url: "http://www.atpworldtour.com/-/media/images/news/2017/08/11/20/44/federer-montreal-2017-friday.jpg",
                    national_flag: "https://lipis.github.io/flag-icon-css/flags/4x3/ch.svg",
                    nation:"SUI",
                    rank: 3,
                    age: 36,
                    weight: 85,
                    height: 185,
                    titles: 5,
                    "W-L": "35-3",
                },
                point: 0,
                set: [],
                match: 0,
                got_set: [],
                win: false,
                server: true,
            },
            {
                id: 2,
                personal_info: {
                    f_name: "Rafael",
                    l_name: "Nadal",
                    img_url: "http://www.atpworldtour.com/-/media/images/news/2017/07/10/21/54/nadal-wimbledon-2017-monday-2.jpg",
                    national_flag: "https://lipis.github.io/flag-icon-css/flags/4x3/es.svg",
                    nation:"ESP",
                    rank: 2,
                    age: 31,
                    weight: 85,
                    height: 185,
                    titles: 4,
                    "W-L": "47-8",
                },
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
        this.props.give_set(this.props.score.players)
        if (this.props.score.winner === "") {
            this.props.give_match()
        }
    }

    handleClick(e, i) {

        this.props.give_point(this.props.score.players, i)
    }

    renderScoreBoard() {
        const players = this.props.players;
        const score = this.props.score;
        const ScoreBoards = [];
        if (players) {
            players.forEach(function (p, i) {
                ScoreBoards.push(
                    <ScoreBoard key={i} index={i} score={score} player={ p } give_point={ this.props.give_point } />
                )
            }, this);
        }

        return (
            ScoreBoards
        )

    }
    renderPlayerCard() {
        const players = this.props.players;
        const Players = [];
        players.forEach(function(p, i) {
            Players.push(
                <Players_card key={i} index={i} player={p} winner={this.props.score.winner} give_point={ this.props.give_point } />
            )
        }, this);
        return (
            Players
        )
    }

    renderContent() {
        return (
            <div>
              <Background/>
              <div className="container">
                <div className="players_cards">
                  { this.renderPlayerCard() }
                    </div>
                    <div className="players_score_board">    
                        {this.renderScoreBoard()}
                </div>        
              </div>
            </div>
        )
    }
    render() {

        const Content = this.renderContent();
        return (
            <div>
                {Content}
              <Footer/>  
            </div>
            );
    }
}

TennisScoreBoard.propTypes = {

};

export default TennisScoreBoard;