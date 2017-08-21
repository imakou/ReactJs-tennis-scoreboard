import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Players_card extends Component {
    handelGivePoint(i) {
      const { player } = this.props;
      if (player.set.length <3) {
        this.props.give_point(i);
      }
    }
    render() {
      const { player, index } = this.props;
      const WinnerIndex = this.props.winner;
      const runnerUpStyle = style();
      function style() {
        if (WinnerIndex !== "") {
          if (WinnerIndex === index) {
            return { filter: "grayscale(0%)" }
          } else {
            return { filter: "grayscale(100%)" }
          }
        } else {
          return null;
        }
      }
        
        return (
          <div className="players_card" style={runnerUpStyle}>
              <div className="players_card_title">
                <div className="players_card_title_first_name">
                  { player.personal_info.f_name }
                </div>
                <div className="players_card_title_last_name">
                  { player.personal_info.l_name }
                </div>
              </div>
              <div className="players_card_photo">
                    <img src={ player.personal_info.img_url } alt='source:atpworldtour.com' />
              </div>
              <div className="players_card_description">
                <div className="players_card_description_item">
                  <div className="players_card_description_item_title">RANK</div>
                  <div className="players_card_description_item_value">{ player.personal_info.rank }</div>
                </div>
                <div className="players_card_description_item">
                  <div className="players_card_description_item_title">AGE</div>
                  <div className="players_card_description_item_value">{ player.personal_info.age }</div>
                </div>
                <div className="players_card_description_item">
                  <div className="players_card_description_item_title">WEIGHT</div>
                  <div className="players_card_description_item_value">{ player.personal_info.weight }<span className="players_card_description_item_value_unit">KG</span></div>
                </div>
                <div className="players_card_description_item">
                  <div className="players_card_description_item_title">HEIGHT</div>
                  <div className="players_card_description_item_value">{ player.personal_info.height }<span className="players_card_description_item_value_unit">CM</span></div>
                </div>
                <div className="players_card_description_item">
                  <div className="players_card_description_item_title">TITLES</div>
                  <div className="players_card_description_item_value">{ player.personal_info.titles }<span className="players_card_description_item_value_unit">(2017)</span></div>
                </div>
                <div className="players_card_description_item">
                  <div className="players_card_description_item_title">W-L</div>
                  <div className="players_card_description_item_value">{ player["W-L"] }<span className="players_card_description_item_value_unit">(2017)</span></div>
                </div>
              </div>
              <div className="players_card_addPoint" onClick={this.handelGivePoint.bind(this, index)}>
                Add Points!
              </div>
            </div>
            );
    }
}

Players_card.propTypes = {
  give_point: PropTypes.func.isRequired,
  player : PropTypes.object.isRequired,
  index : PropTypes.number.isRequired,

};

export default Players_card;