import { IComments } from '../../types/type';
import likeSVG from '../../assets/like.svg';
import Nolike from '../../assets/no-like.svg';
import { useState } from 'react';
import { Img } from '../ImgProfile';

interface ICommentsPostsProps {
  userImg: string | undefined;
  comment: IComments;
}

export const CommentsPosts = ({ userImg, comment }: ICommentsPostsProps) => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };

  return (
    <li className="card">
      <div className="box_user">
        <Img src={userImg} />

        <div>
          <p>User name</p>
          <span>user@mail.com</span>
        </div>
      </div>
      <p>{comment.comment}</p>
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
    </li>
  );
};
