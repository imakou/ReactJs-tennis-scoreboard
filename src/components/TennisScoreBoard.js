import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss'
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


    handleClick(e, i) {
        // console.log('Hello e', e);// log is here
        // console.log('Hello i', i);// log is here
        this.props.give_point(this.props.score.players, i)
    }
    renderScore() {
        const players = this.props.score.players || [];
        const current_game = this.props.score.current_game || [];
        const current_point = this.props.score.current_point || [];
        const current_server = this.props.score.current_server || 0;
        const score = [];
        function server(index) {
            if (current_server === index) {
                console.log('Hello current_server', current_server); // log is here
                return "Server";
            }
        }
        players.forEach(function(e, i) {
            score.push(
                <div key={ i }>
                  <h5>
                                        { `${e.name} (${e.set},${current_game[i]}) ` }{ server(i) }
                                        <button onClick={ this.handleClick.bind(this, e, i) }>Click</button>
                                    </h5>
                  <span>
                                        { `| ${current_point[i]}` }
                                    </span>
                </div>
            )
        }, this);
        return score;
    }
    renderC() {
        return (
            <div>
              <div className="bg_">
                <div className="bg_grid_dots"></div>
                <video id="bgvid" src="../styles/videos_source_from_ATPWorldTour.mp4" playsInline autoPlay muted loop/>
              </div>
              <div className="container">
                <div className="players_cards">
                  <div className="players_card">
                    <div className="players_card_title">
                      <div className="players_card_title_first_name">
                        Roger
                      </div>
                      <div className="players_card_title_last_name">
                        FEDERER
                      </div>
                    </div>
                    <div className="players_card_photo">
                      <img src='http://www.atpworldtour.com/-/media/images/news/2017/08/11/20/44/federer-montreal-2017-friday.jpg' alt='source:atpworldtour.com' />
                      <div className="players_card_social_media">
                        <a href="#"><img src='https://dummyimage.com/30x30.png?text=Hello' alt='' /></a>
                        <a href="#"><img src='https://dummyimage.com/30x30.png?text=Hello' alt='' /></a>
                        <a href="#"><img src='https://dummyimage.com/30x30.png?text=Hello' alt='' /></a>
                        <a href="#"><img src='https://dummyimage.com/30x30.png?text=Hello' alt='' /></a>
                      </div>
                    </div>
                    <div className="players_card_description">
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">RANK</div>
                        <div className="players_card_description_item_value">3</div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">AGE</div>
                        <div className="players_card_description_item_value">36</div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">WEIGHT</div>
                        <div className="players_card_description_item_value">85<span className="players_card_description_item_value_unit">KG</span></div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">HEIGHT</div>
                        <div className="players_card_description_item_value">185<span className="players_card_description_item_value_unit">CM</span></div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">TITLES</div>
                        <div className="players_card_description_item_value">5<span className="players_card_description_item_value_unit">(2017)</span></div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">W-L</div>
                        <div className="players_card_description_item_value">35-3<span className="players_card_description_item_value_unit">(2017)</span></div>
                      </div>
                    </div>
                    <div className="players_card_addPoint">
                      Add Points!
                    </div>
                  </div>
                  <div className="players_card">
                    <div className="players_card_title">
                      <div className="players_card_title_first_name">
                        Roger
                      </div>
                      <div className="players_card_title_last_name">
                        FEDERER
                      </div>
                    </div>
                    <div className="players_card_photo">
                      <img src='http://www.atpworldtour.com/-/media/images/news/2017/08/11/20/44/federer-montreal-2017-friday.jpg' alt='source:atpworldtour.com' />
                      <div className="players_card_social_media">
                        <a href="#"><img src='https://dummyimage.com/30x30.png?text=Hello' alt='' /></a>
                        <a href="#"><img src='https://dummyimage.com/30x30.png?text=Hello' alt='' /></a>
                        <a href="#"><img src='https://dummyimage.com/30x30.png?text=Hello' alt='' /></a>
                        <a href="#"><img src='https://dummyimage.com/30x30.png?text=Hello' alt='' /></a>
                      </div>
                    </div>
                    <div className="players_card_description">
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">RANK</div>
                        <div className="players_card_description_item_value">3</div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">AGE</div>
                        <div className="players_card_description_item_value">36</div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">WEIGHT</div>
                        <div className="players_card_description_item_value">85<span className="players_card_description_item_value_unit">KG</span></div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">HEIGHT</div>
                        <div className="players_card_description_item_value">185<span className="players_card_description_item_value_unit">CM</span></div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">TURNED PRO</div>
                        <div className="players_card_description_item_value">1998</div>
                      </div>
                      <div className="players_card_description_item">
                        <div className="players_card_description_item_title">W-L</div>
                        <div className="players_card_description_item_value">35-3<span className="players_card_description_item_value_unit">(2017)</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="players_score_board">
                  <div className="player_row">
                    <div className="player_nation">
                      <p className="player_nation_name">SUI</p>
                      <img className="player_nation_flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/ch.svg" alt="flag" />
                    </div>
                    <div className="player_name">
                      <div className="player_name_id">R. Federer</div>
                      <div className="player_name_bg"></div>
                    </div>
                    <div className="player_score">
                      <div className="player_score_game player_score_got_set"><span>6</span></div>
                      <div className="player_score_point">
                        40
                      </div>
                    </div>
                  </div>
                  <div className="player_row">
                    <div className="player_nation">
                      <p className="player_nation_name">SUI</p>
                      <img className="player_nation_flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/es.svg" alt="flag" />
                    </div>
                    <div className="player_name">
                      <div className="player_name_id">R. Federer</div>
                      <div className="player_name_bg"></div>
                    </div>
                    <div className="player_score">
                      <div className="player_score_game"><span>1</span></div>
                      <div className="player_score_point">
                        AD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
    render() {
        // console.log('Hello this.props', this.props.score.players);// log is here
        const score = this.renderScore();
        const c = this.renderC();
        const winner = this.props.score.winner;
        return (
            <div>
              { c }
            </div>
            );
    }
}

TennisScoreBoard.propTypes = {

};

export default TennisScoreBoard;