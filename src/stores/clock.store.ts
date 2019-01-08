import { action, observable } from 'mobx';

export class ClockStore {
    rootStore: any;
    intervalId = 0;

    @observable
    now: Date = new Date();

    constructor(rootStore: any) {
        this.rootStore = rootStore;
    }

    start = (delay: number) => {
        this.intervalId = window.setInterval(() => {
            this.set(new Date());
        }, delay);
    };

    stop = () => {
        clearInterval(this.intervalId);
        this.intervalId = 0;
    };

    @action
    set = (date: Date) => {
        this.now = date;
    };
}
