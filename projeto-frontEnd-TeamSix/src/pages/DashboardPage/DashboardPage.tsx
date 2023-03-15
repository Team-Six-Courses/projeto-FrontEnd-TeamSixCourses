import { InputDash } from '../DashboardPage/InputDash';
import { DashText } from '../DashboardPage/DashText';
import { DashStyle, FormStyled, ListStyled, TrailerStyle } from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import Header from '../../component/Header';
import { useContext, useEffect, useState } from 'react';
import { DashContext } from '../../Providers/DashContext/DashContext';
import { Card } from '../../component/Cards';
import { IUser } from '../../types/type';
import { api } from '../../API';
import { Img } from '../../component/ImgProfile';
import { BsFillPlayFill } from 'react-icons/bs';
import { ModalTrailer } from '../../component/ModalTrailer';

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
  const [modalTrailer, setModalTrailer] = useState(false);

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

  const getUserForId = async (id: number, newPost: IUser[]) => {
    try {
      const response = await api.get<IUser>(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      newPost.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addUserForId = () => {
    let newPost: IUser[] = [];
    posts.forEach((post) => {
      getUserForId(post.userId, newPost);
    });
    setUserForId(newPost);
    return newPost;
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
    <>
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

                <TrailerStyle
                  onClick={() => {
                    setModalTrailer(true);
                  }}
                >
                  <BsFillPlayFill /> Reproduzir trailer
                </TrailerStyle>

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
                {posts.map((post, index) => {
                  // console.log(userForId[0]?.avatar)
                  return (
                    <Card
                      id={post.id}
                      key={post.id}
                      title={post.title}
                      descrition={post.description}
                      img={
                        userForId.find((element) => {
                          element.id === post.userId;
                        })?.avatar
                      }
                    />
                  );
                })}
              </ListStyled>
            </div>
          </div>
        </main>
      </DashStyle>
      {modalTrailer ? <ModalTrailer setModalTrailer={setModalTrailer} /> : null}
    </>
  );
};
