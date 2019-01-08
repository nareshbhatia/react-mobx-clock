import React from 'react';
import { Provider } from 'mobx-react';

import { Clock } from './components';
import { rootStore } from './stores';

// Start the clock with one second granularity
rootStore.clockStore.start(1000);

export class App extends React.Component {
    render() {
        return (
            <Provider rootStore={rootStore}>
                <Clock />
            </Provider>
        );
    }
}
