import { IPosts } from '../../types/type';

export interface IDiscussionProviderProps {
  children: React.ReactNode;
}

export interface IDiscussionProvider {
  post: IPosts;
  setPost: React.Dispatch<React.SetStateAction<IPosts>>;
  getPost: (id: number, img?: string) => Promise<void>;
  imgPost: string | undefined;
}
