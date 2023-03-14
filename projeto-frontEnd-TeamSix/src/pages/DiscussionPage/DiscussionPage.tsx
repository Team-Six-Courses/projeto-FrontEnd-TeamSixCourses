import Header from '../../component/Header';
import { StyleMainDisc } from './style'
import userImg from '../../assets/userImg.svg';
import like from '../../assets/like.svg';
import Nolike from '../../assets/no-like.svg';

export const DiscussionPage = () => {
  console.log('Discussion')
  return (
          <div>
              <Header background='rgba(0, 0, 0, 1)'/>
              <StyleMainDisc>
                <div className='filter'>
                     <section className='discussion_Current'>
                        <div className='box_user'>
                          <figure>
                            <img src={userImg} alt="User Avatar" />
                          </figure>
                          <p>Title Discussion</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id debitis dolor molestias, libero maxime maiores sint incidunt dignissimos inventore voluptatum optio quod rem laudantium modi? Mollitia nobis accusamus unde officia!</p>
                        <div className='box_like'>
                          <figure className='likes_size'>
                            <img src={like} alt="like" className='like' />
                            <img src={Nolike} alt="no-like" className='no_like'/>
                          </figure>
                          <p className='count_like'>0</p>
                        </div>
                     </section>
                     
                     <section className='discussion_Coments'>
                        <div className='new_comments'>
                          <div className='new_comment'>
                            <img src={userImg} alt="" /> 
                            <input type="text" placeholder='Seu comentário'/>
                          </div>
                              <button>Enviar</button>
                        </div>

                        <ul>
                            <li className='card'>
                                <div className='box_user'>
                                      <figure>
                                        <img src={userImg} alt="User Avatar" />
                                      </figure>
                                      <div >
                                        <p>User name</p>
                                        <span>user@mail.com</span>
                                      </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id debitis dolor             molestias, libero maxime maiores sint incidunt dignissimos inventore voluptatum             optio quod rem laudantium modi? Mollitia nobis accusamus unde officia!</p>
                                    <div className='box_like'>
                                      <figure className='likes_size'>
                                        <img src={like} alt="like" className='like' />
                                        <img src={Nolike} alt="no-like" className='no_like'/>
                                      </figure>
                                      <p className='count_like'>0</p>
                                </div>
                            </li>
                        </ul>
                     </section>
                </div>
              </StyleMainDisc>
          </div>
    
  );
};
