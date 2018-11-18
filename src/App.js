import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './appStyles';
import SimpleModalLauncher from './components/simpleModalLauncher';

class App extends Component {


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appWrapper}>
        <header>
          <h1>React Simple Modal</h1>
          <p>
            This is an example on how to build a simple modal window with React
            and JSS.<br />
            To close modal, click on [X] button on top right, ESC key,
            or simply outside the window.
          </p>
        </header>
        <SimpleModalLauncher buttonLabel="Open text modal">
            <div className={classes.textModal}>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi
                faucibus quam, sollicitudin posuere massa lacus cursus ligula.
                Quisque vel turpis a quam posuere lobortis. Aenean risus nunc,
                pretium eu massa tincidunt, dignissim tincidunt arcu. Integer et
                mauris vestibulum, pharetra eros nec, feugiat orci.
              </p>
            </div>
          </SimpleModalLauncher>

        <SimpleModalLauncher buttonLabel="Open Image Modal">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://placeimg.com/800/450/nature"
              alt="Nature"
            />
          </div>
        </SimpleModalLauncher>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
