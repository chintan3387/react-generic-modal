import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './simpleModalLauncherStyles';
import SimpleModal from './SimpleModal';

class SimpleModalLauncher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  //Handle the visibility of the modal.
  //If `state.showModal` is false, set it to true.
  // If is true, set it to false.

  handleToggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render(){
    const { buttonLabel, children, classes } = this.props;
    const { showModal } = this.state;

    return (
        <div>
          <button
            type="button"
            className={classes.modalButton}
            onClick={this.handleToggleModal}
          >
            {buttonLabel}
          </button>
          {showModal &&
            <SimpleModal onCloseRequest={this.handleToggleModal}>
              {children}
            </SimpleModal>
          }
      </div>
    );
  }
}

export default injectSheet(styles)(SimpleModalLauncher);
