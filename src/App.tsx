import Header from './components/common/header';
import React, { Component } from 'react';
import { AppRoutes } from './routes';
import './App.css';
import { State } from './store/state';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export interface AppProps {
  loading: boolean;
}

class App extends Component<AppProps> {
  constructor(props: AppProps, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div className="App container-fluid">
        <Header loading={this.props.loading} />
        <AppRoutes />
      </div>
    );
  }
}

function mapStateToProps(state: State, ownProps: any): AppProps {
  return {
    ...ownProps,
    loading: state.numAjaxCallsInProgress > 0
  }
}

// really subtle!  we need to require the router as well because redux connect detects there are 
// no changes to the store then even changes to the route will be ignored :O  To get around this
// we assume the app needs the router as well (even though really this is required lower).  nasty!
export default withRouter(connect(mapStateToProps)(App));

