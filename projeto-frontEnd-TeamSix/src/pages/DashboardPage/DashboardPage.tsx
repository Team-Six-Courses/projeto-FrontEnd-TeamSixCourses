import { InputDash } from '../DashboardPage/InputDash';
import { DashText } from '../DashboardPage/DashText';
import { DashStyle, FormStyled, ListStyled } from './style';
import { useForm } from 'react-hook-form';

interface IDashForm{
  title: string;
  description: string;
  userId: number ;
}

export const DashboardPage = ()  => {
  console.log('Dashboard')

  const { register, handleSubmit, formState: { errors } } = useForm<IDashForm>();


  return (
           <DashStyle>
            <header></header>
            <section>
              <div className='filter_bg'>
              <div className='box_section_content'>
                <img />
                <div className='box_infos'>

                  <div className='box_infos_title'>
                  <h2>Interestelar</h2>
                  <p>(2014)</p>
                  </div>

                  <div className='box_infos_tags'>
                    <span>10</span>
                    <p>06/11/2014 (BR)</p>
                    <p className='circle'/>
                    <p>Aventura, Drama, Ficção cientifica</p>
                    <p className='circle'/>
                    <p>2h 49m</p>
                  </div>
                  
                  <strong>Reproduzir trailer</strong>

                  <div className='box_infos_sinopse'>
                    <h3>Sinopse</h3>
                    <p>As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.</p> 
                  </div>

                  <div className='director'>
                    <p>Christopher Nolan</p>
                    <span>Diretor</span>
                  </div>

                </div>
              </div>
              </div>
            </section>

            <div className='call_film'>
              <h1>Entre nessa aventura INTERESTELAR</h1>
            </div>

            <main>
              <div className='filter_bgmain'>
                <div className='box_main_content'>

                  <FormStyled onSubmit={handleSubmit(()=>{})}>
                      <div className='user_title'> 
                        <img src='../../assets/userImg.svg'/>
                        <InputDash
                         placeholder='O que você está pensando?'
                         type='text'
                         register={register('title')}
                         error={errors.title}
                          />
                      </div>
                        <DashText placeholder='O que você está pensando?' register={register('description')}/>
                        <div className='box_button'>
                          <button type='submit'>Enviar</button>
                        </div>

                  </FormStyled>

                  <ListStyled>
                 
                  </ListStyled>
                  
                </div>
              </div>
            </main>
           </DashStyle>
  ) 
}

