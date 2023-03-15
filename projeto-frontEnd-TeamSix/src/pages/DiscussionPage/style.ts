import styled from 'styled-components';

import bgDash2 from '../../assets/BGdash2.svg';

export const StyleMainDisc = styled.main`
  width: 100%;
  height: max-content;

  background-image: url(${bgDash2});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;

  .filter {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 45px;

    background: rgba(0, 0, 0, 0.6);
  }

  section {
    width: 770px;
    height: 423px;
    margin-top: 140px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    background: rgba(40, 40, 40, 0.8);
    border-radius: 8px;
  }
  .box_user {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .box_user > figure {
    width: 85px;
    height: 85px;
    display: flex;
    justify-content: center;

    border-radius: 50%;
  }
  .box_user > p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;

    color: #f5f5f5;
  }
  .box_user > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 34px;

    text-align: justify;

    color: #f5f5f5;
  }
  span {
    margin-top: -5px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;

    text-align: justify;

    color: #f5f5f5;
  }
  .box_like {
    height: 50px;

    display: flex;
    align-items: center;
    gap: 10px;
  }
  .box_like {
    display: flex;
    align-items: center;
  }
  .likes_size > img {
    width: 40px;
    height: 40px;
  }
  .discussion_Coments {
    width: 770px;
    height: 860px;
    margin-top: 30px;
    padding: 20px;

    justify-content: start;

    background: rgba(40, 40, 40, 0.8);
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .like {
    cursor: pointer;
  }
  .no_like {
    cursor: pointer;
  }
  .new_comments {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
  }
  .new_comments > button {
    width: 123px;
    height: 36px;
    background: #282828;
    box-shadow: 0px 0px 10px #ff7d04;
    border-radius: 5px;

    border: none;

    color: #f5f5f5;

    font-size: 16px;
  }
  .new_comments > button:hover {
    box-shadow: 0px 0px 25px #01b4e4;
    outline: none;
    cursor: pointer;
  }
  .new_comment {
    margin-top: 20px;

    display: flex;
    align-items: center;

    gap: 20px;
  }
  .new_comment > input {
    width: 657px;
    height: 52px;
    left: 434px;
    top: 704px;

    background: rgba(15, 15, 15, 0.6);
    border-radius: 5px;

    border: none;
  }
  .new_comment > input::placeholder {
    padding-left: 15px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    color: #f5f5f5;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 20px;

    background: rgba(15, 15, 15, 0.6);

    border-radius: 5px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 44px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
