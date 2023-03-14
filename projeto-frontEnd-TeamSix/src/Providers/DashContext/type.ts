import { ILikePost, IPosts, IUser } from '../../types/type';

export interface IDashProviderProps {
  children: React.ReactNode;
  
}

export interface IDashPosts {
  title: string;
  description: string;
  userId: number;
  filmsId: number;
  id: number;
  likePost: ILikePost[];
  user: IUser[];
}

export interface IDashProvider {
  posts: IDashPosts[];
  film: IFilm;
  addPost: (data: IPosts) => Promise<void>;
}

export interface IFilm {
  title: string;
  year: string;
  classification: number;
  data: string;
  category: string;
  duration: string;
  trailer: string;
  synoyisis: string;
  director: string;
  poster: string;
  id: number;
  posts: IPosts[];
}
