import { action, computed, observable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../api/agent";
import { IUser, IUserFormValues } from "../models/user";
import { RootStore } from "./rootStore";

export default class UserStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
      this.rootStore = rootStore;
    }
    
    @observable user: IUser | null = null;

    @computed get isLoggedIn() {return !!this.user}

    @action login = async (values: IUserFormValues) => {
        try {
            const user = await agent.User.login(values);
            runInAction('setting the user', () => {
                this.user = user;
            })
            history.push('/activities')
        } catch (error) {
            throw error;
        }
    }
}