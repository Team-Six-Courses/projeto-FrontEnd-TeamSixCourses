export interface IProfileProps {
  children: React.ReactNode
}

export interface IProfileProvider {
  user: IUser;
}
 
export interface IPosts {
  title: string;
  description: string;
  userId: number;
}

interface ILikePost {
  userId: number;
  postId: number;
  id: number;
}

interface ILikeCommet {
  userId: number;
  commnetId: number;
  id: number
}

export interface IUser {
  email: string;
  password: string;
  avatar: string | null;
  name: string;
  id: number;
  posts: IPosts;
  likePost: ILikePost;
  likeComment: ILikeCommet;
}