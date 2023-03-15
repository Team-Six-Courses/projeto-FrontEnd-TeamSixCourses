import { IPosts, IUser } from '../../types/type';

export interface IDiscussionProviderProps {
  children: React.ReactNode;
}

export interface IDiscussionProvider {
  post: IPosts;
  setPost: React.Dispatch<React.SetStateAction<IPosts>>;
  getPost: (id: number, img?: IUser[]) => Promise<void>;
}
