import React from 'react';
import moment from 'moment';
import './clock.css';

import { inject, observer } from 'mobx-react';

export const Clock = inject('rootStore')(
    observer(({ rootStore }) => {
        const { clockStore } = rootStore;
        const m = moment(clockStore.now.getTime());
        return (
            <div className="clock">
                <span className="clock__time">{m.format('h:mm:ss')}</span>
                <span className="clock__date">{m.format('dddd, MMMM D')}</span>
            </div>
        );
    })
);
