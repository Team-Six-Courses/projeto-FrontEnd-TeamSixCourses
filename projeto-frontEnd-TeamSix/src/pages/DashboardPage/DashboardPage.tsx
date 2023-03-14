import { InputDash } from '../DashboardPage/InputDash';
import { DashText } from '../DashboardPage/DashText';
import { DashStyle, FormStyled, ListStyled } from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import Header from '../../component/Header';
import { useContext, useEffect, useState } from 'react';
import { DashContext } from '../../Providers/DashContext/DashContext';
import { Card } from '../../component/Cards';
import { IPosts, IUser } from '../../types/type';
import { api } from '../../API';
import { IDashPosts } from '../../Providers/DashContext/type';
import { Img } from '../../component/ImgProfile';

interface IDashForm {
  title: string;
  description: string;
  userId: number;
  id: number;
}

export const DashboardPage = () => {
  const { film, posts, addPost } = useContext(DashContext);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [userForId, setUserForId] = useState<IUser[]>([] as IUser[]);
  const token = localStorage.getItem('@TOKEN');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IDashForm>({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const submit: SubmitHandler<IDashForm> = (formData) => {
    addPost(formData);
    reset();
  };

  const getUserForId = async (id: number) => {
    try {
      const response = await api.get<IUser>(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserForId([...userForId, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const addUserForId = () => {
    return posts.map((post) => {
      getUserForId(post.userId);
    });
  };

  const getUser = async () => {
    const id = Number(localStorage.getItem('@USERID'));
    try {
      const response = await api.get<IUser>(`users/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    addUserForId();
  }, [user]);

  return (
    <DashStyle>
      <Header background="rgba(3,35,65,1)" />
      <section className="section-one">
        <div className="filter_bg">
          <div className="box_section_content">
            <img />
            <div className="box_infos">
              <div className="box_infos_title">
                <h2>{film.title}</h2>
                <p>({film.year})</p>
              </div>

              <div className="box_infos_tags">
                <span>{film.classification}</span>
                <p>{film.data} (BR)</p>
                <p className="circle" />
                <p>{film.classification}</p>
                <p className="circle" />
                <p>{film.duration}</p>
              </div>

              <strong>Reproduzir trailer</strong>

              <div className="box_infos_sinopse">
                <h3>Sinopse</h3>
                <p>{film.synoyisis}</p>
              </div>

              <div className="director">
                <p>{film.director}</p>
                <span>Diretor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="call_film">
        <h1>Entre nessa aventura INTERESTELAR</h1>
      </div>

      <main>
        <div className="filter_bgmain">
          <div className="box_main_content">
            <FormStyled onSubmit={handleSubmit(submit)}>
              <div className="user_title">
                <Img src={user.avatar} />
                <InputDash
                  placeholder="O que você está pensando?"
                  type="text"
                  register={register('title')}
                  error={errors.title}
                />
              </div>
              <DashText
                placeholder="O que você está pensando?"
                register={register('description')}
              />
              <div className="box_button">
                <button type="submit">Enviar</button>
              </div>
            </FormStyled>

            <ListStyled>
              {posts.map((post,index) => { 
                return (
                  <Card
                    id={post.id}
                    key={post.id}
                    title={post.title}
                    descrition={post.description}
                    img={userForId[post.id]?.avatar}
                  />
                );
              })}
            </ListStyled>
          </div>
        </div>
      </main>
    </DashStyle>
  );
};
