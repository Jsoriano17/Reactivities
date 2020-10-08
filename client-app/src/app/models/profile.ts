export interface IProfile {
    displayName: string, 
    username: string,
    bio: string, 
    image: string, 
    photo: IPhoto[]

}

export interface IPhoto {
    id: string, 
    url: string,
    isMain: boolean
}