import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleNavSelect} from '../../actions/views';

class NavButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        style={{width: '100', height: '50', border: 'solid 1px black', display:'flex', flexDirection:'column'}}
        onClick={() => this.props.handleNavSelect(this.props.view)}>
        {this.props.name}
        {'{' + this.props.view + '}'}
        {this.props.currentView === this.props.view ? 'Selected' : ''}
      </button>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  currentView: state.currentView,
  name: ownProps.title
});

const mapDispatchToProps = (dispatch) => ({
  handleNavSelect: (navButtonNum) => dispatch(handleNavSelect(navButtonNum))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(NavButton);
