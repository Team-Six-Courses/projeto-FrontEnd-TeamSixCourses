import Header from '../../component/Header';
import { StyleMainDisc } from './style';
import userImg from '../../assets/userProfileimg.svg';
import likeSVG from '../../assets/like.svg';
import Nolike from '../../assets/no-like.svg';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Img } from '../../component/ImgProfile/index';
import { DiscussionContext } from '../../Providers/DiscussionContext/DIscussionContext';
import { CommentsPosts } from '../../component/CommentPost';
import { IUser } from '../../types/type';
import { api } from '../../API';
import { BsHandIndexThumb } from 'react-icons/bs';

export const DiscussionPage = () => {
  const { post, getPost } = useContext(DiscussionContext);
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(2);
  const [userForId, setUserForId] = useState<IUser[]>([] as IUser[]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const { id } = useParams();

  const getUser = async () => {
    const id = Number(localStorage.getItem('@USERID'));
    const token = localStorage.getItem('@TOKEN');
    try {
      const response = await api.get<IUser>(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserForId = async () => {
    const token = localStorage.getItem('@TOKEN');
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
    getUser();
    getPost(Number(id));
  }, []);

  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Header background="rgba(0, 0, 0, 1)" />
      <StyleMainDisc>
        <div className="filter">
          <section className="discussion_Current">
            <div className="box_user">
              <figure>
                <Img
                  src={
                    userForId.find((element) => element.id === post.userId)
                      ?.avatar
                  }
                />
              </figure>
              <p>{post.title}</p>
            </div>
            <p>{post.description}</p>
            <div className="box_like">
              <figure className="likes_size">
                {like ? (
                  <img
                    onClick={() => {
                      setLike(!like);
                      sub();
                    }}
                    src={likeSVG}
                    alt="like"
                    className="like"
                  />
                ) : (
                  <img
                    onClick={() => {
                      setLike(!like);
                      add();
                    }}
                    src={Nolike}
                    alt="no-like"
                    className="no_like"
                  />
                )}
              </figure>

              <p className="count_like">{count}</p>
            </div>
          </section>

          <section className="discussion_Coments">
            <div className="new_comments">
              <div className="new_comment">
                <Img src={user.avatar} />
                <input type="text" placeholder="Seu comentário" />
              </div>
              <button>Enviar</button>
            </div>

            <ul>
              {post.comments?.map((comment) => {
                return (
                  <CommentsPosts
                    key={comment.id}
                    comment={comment}
                    userImg={
                      userForId.find((element) => element.id === comment.userId)
                        ?.avatar
                    }
                  />
                );
              })}
            </ul>
          </section>
        </div>
      </StyleMainDisc>
    </div>
  );
};
