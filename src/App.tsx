import React from 'react';
import {connect} from 'react-redux';

import {SystemState} from './store/system/types';
import {ChatState} from './store/chat/types';
import { AppState } from './store'
import {deleteMessage, sendMessage} from './store/chat/actions';

interface AppProps {
  sendMessage: typeof sendMessage;
  deleteMessage: typeof deleteMessage;
  system: SystemState;
  chat: ChatState;
}

const mapStateToProps = ({system, chat}: AppState) => ({
  system,
  chat,
});

class App extends React.Component<AppProps> {

  render() {
    return (
      <div>Hello world!!</div>
    )
  }
}

export default connect(mapStateToProps)(App);
