export interface IUser {
    username: string;
    displayName: string;
    token: string;
    image?: string;
}

export interface IUserFormValues {
    emil: string;
    password: string;
    displayName?: string;
    username?: string;
}