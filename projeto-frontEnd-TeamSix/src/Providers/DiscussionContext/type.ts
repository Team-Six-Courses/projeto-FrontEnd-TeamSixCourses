import { IComments, ILikePost, IPosts, IUser } from "../../types/type";

export interface IDiscussionProviderProps{
    children: React.ReactNode;
}

export interface IDiscussionProvider {
    post: IPosts;
    setPost: React.Dispatch<React.SetStateAction<IPosts>>
    getPost: (id: number) => Promise<void>
}

// export interface IPost{
//     title: string;
//     description: string;
//     userId: number;
//     like: number;
//     id: number;
//     comments: IComments[];
//     likePost: ILikePost[];
//     user: IUser
// }