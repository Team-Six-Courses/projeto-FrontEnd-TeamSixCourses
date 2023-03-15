import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { api } from '../../API';
import {
  IComments,
  ILikePost,
  IPosts,
  IProfileProps,
  IProfileProvider,
  IUser,
} from '../../types/type';

export const ProfileContext = createContext<IProfileProvider>(
  {} as IProfileProvider
);

export const ProfileProvider = ({ children }: IProfileProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [activities, setActivities] = useState<IPosts[]>([] as IPosts[]);
  const [userForId, setUserForId] = useState<IUser[]>([] as IUser[]);

  const token = localStorage.getItem('@TOKEN');
  const id = Number(localStorage.getItem('@USERID'));

  const getUser = async () => {
    try {
      const response = await api.get<IUser>(
        `/users/${id}?_embed=posts&_embed=likePost&_embed=likeComment`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const getPost = async () => {
    try {
      const responsePost = await api.get<IPosts[]>('/posts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseLikePost = await api.get<ILikePost[]>('/likePost', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      /*  const responseComments = await api.get<IComments[]>('/comments', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); */

      const posts = responsePost.data.filter((post) => post.userId === id);
      const likePosts = responseLikePost.data.filter(
        (likeComment) => likeComment.userId === id
      );
      /*  const commentsPost = responseComments.data.filter(
        (comment) => comment.userId === id
      ); */

      const postFilterLike = likePosts.map((like) =>
        responsePost.data.filter((post) => post.id === like.postId)
      );
      /* const postFilterCommentPost = commentsPost.map((comment) =>
        responsePost.data.filter((post) => post.id === comment.postId)
      ); */

      setActivities(posts);
      postFilterLike.map((post) => setActivities([...activities, ...post]));
      /*  postFilterCommentPost.map((post) =>
        setActivities([...activities, ...post])
      ); */
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const getUserForId = async () => {
    try {
      const response = await api.get<IUser[]>(`/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserForId(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserForId();
  }, []);

  return (
    <ProfileContext.Provider value={{ user, activities, userForId }}>
      {children}
    </ProfileContext.Provider>
  );
};
