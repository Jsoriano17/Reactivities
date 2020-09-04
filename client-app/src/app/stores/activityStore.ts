import {observable} from 'mobx';
import { createContext } from 'react';

class ActivityStore {
    @observable title = 'hello world'
}

export default createContext(new ActivityStore())