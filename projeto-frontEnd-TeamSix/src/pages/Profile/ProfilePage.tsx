import { useContext } from 'react';
import { Card } from '../../component/Cards';
import Header from '../../component/Header';
import { InformationProfile } from '../../component/InformationsProfile';
import { ProfileContext } from '../../Providers/ProfileContext/ProfileContext';
import { StyleBackgroundImage, StyledMain, StyledUl } from './styled';

export const ProfilePage = () => {
  const { activities, userForId } = useContext(ProfileContext);

  return (
    <>
      <StyleBackgroundImage>
        <Header background="rgba(26, 26, 26, 1)" />
        <StyledMain>
          <section className="accontActivities">
            <StyledUl>
              <div className="title">
                <h2>Atividades da conta</h2>
              </div>
              {activities.map((post) => {
                return (
                  <Card
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    descrition={post.description}
                    img={
                      userForId.find((element) => element.id === post.userId)
                        ?.avatar
                    }
                  />
                );
              })}
            </StyledUl>
          </section>
          <InformationProfile />
        </StyledMain>
      </StyleBackgroundImage>
    </>
  );
};
