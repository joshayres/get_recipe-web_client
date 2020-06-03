import React from "react";
import { search, fetchRecipie } from '../actions/recipieActions'
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function mapStateToProps(state) {
  return {
    recipie: state.recipie,
  };
}

const mapDispatchToProps = {
  fetchRecipie,
  search,
};

class Next extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log(this.props.recipie.resultNum);
    this.props.fetchRecipie(
      this.props.recipie.search,
      this.props.recipie.resultNum
    );
  }
  render() {
    return (
      <div className="next">
        <button className="nextButton" onClick={this.handleClick.bind(this)}><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);