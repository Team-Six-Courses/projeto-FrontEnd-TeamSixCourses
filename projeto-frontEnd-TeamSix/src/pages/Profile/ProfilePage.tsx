import { height } from '@mui/system';
import React, { useContext } from 'react';
import { Card } from '../../component/Cards';
import { InformationProfile } from '../../component/InformationsProfile';
import { ProfileContext } from '../../Providers/ProfileContext/ProfileContext';
import { StyleBackgroundImage, StyledMain, StyledUl } from './styled';

export const ProfilePage = () => {
  const { activities, userForId } = useContext(ProfileContext);

  return (
    <>
      <StyleBackgroundImage>
        <header>Profile</header>
        <StyledMain>
          <section className="accontActivities">
            <StyledUl>
              <div className="title">
                <h2>Atividades da conta</h2>
              </div>
              {activities.map((post, index) => {
                return (
                  <Card
                    key={post.id}
                    title={post.title}
                    descrition={post.description}
                    img={userForId[index]?.avatar}
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
