import { InputDash } from '../DashboardPage/InputDash';
import { DashText } from '../DashboardPage/DashText';
import { DashStyle, FormStyled, ListStyled } from './style';
import { useForm } from 'react-hook-form';
import Header from '../../component/Header';
import { useContext } from 'react';
import { DashContext } from '../../Providers/DashContext/DashContext';
import { Card } from '../../component/Cards';

interface IDashForm {
  title: string;
  description: string;
  userId: number;
}

export const DashboardPage = () => {
  const { film, posts } = useContext(DashContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDashForm>();

  return (
    <DashStyle>
      <Header></Header>
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
            <FormStyled onSubmit={handleSubmit(() => {})}>
              <div className="user_title">
                <img src="../../assets/userImg.svg" />
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
              {posts.map((post) => {
                return (
                  <Card
                    title={post.title}
                    descrition={post.description}
                    img={'null'}
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
