import { Input } from '../../component/Input';
import { DashStyle, FormStyled, ListStyled } from './style';
import bgDash from '../../assets/BGdash.svg';

export const DashboardPage = () => {
  console.log('Dashboard')

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
                  <FormStyled action="">
                      <div> 
                        <img src='../../assets/BGdash.svg' alt="" />
                        <input type="text" />
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

