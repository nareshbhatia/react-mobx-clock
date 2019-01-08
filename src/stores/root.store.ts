import { ClockStore } from './clock.store';

export class RootStore {
    clockStore = new ClockStore(this);
}

export const rootStore = new RootStore();
