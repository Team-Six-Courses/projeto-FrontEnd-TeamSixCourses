import Header from '../../component/Header';
import { StyleMainDisc } from './style';
import userImg from '../../assets/userProfileimg.svg';
import likeSVG from '../../assets/like.svg';
import Nolike from '../../assets/no-like.svg';
import { useContext, useState } from 'react';
import { Img } from '../../component/ImgProfile/index';
import { DiscussionContext } from '../../Providers/DiscussionContext/DIscussionContext';
import { CommentsPosts } from '../../component/CommentPost';

export const DiscussionPage = () => {
  const { post, imgPost } = useContext(DiscussionContext);
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(2);

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
                <Img src={imgPost} />
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
                <img src={userImg} alt="" />
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
                    userImg={userImg}
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
