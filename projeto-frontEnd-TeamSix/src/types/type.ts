export interface IProfileProps {
  children: React.ReactNode;
}

export interface IProfileProvider {
  user: IUser | null;
  activities: IPosts[];
  userForId: IUser[];
}

export interface IPosts {
  title: string;
  description: string;
  userId: number;
}

export interface ILikePost {
  userId: number;
  postId: number;
  id: number;
}

interface ILikeCommet {
  userId: number;
  commnetId: number;
  id: number;
}

export interface IComments {
  postId: number;
  comment: SVGStringList;
  userId: number;
  id: number;
}

export interface IUser {
  email: string;
  password: string;
  avatar: string;
  name: string;
  id: number;
  posts: IPosts[];
  likePost: ILikePost[];
  likeComment: ILikeCommet[];
}

export interface IPosts {
  title: string;
  description: string;
  userId: number;
  filmId: number;
  id: number;
}
