import styled from 'styled-components';
import bgDash from '../../assets/BGdash.svg';
import bgDash2 from '../../assets/BGdash2.svg';

import cover from '../../assets/Cover.svg';

export const DashStyle = styled.div`
    max-width: 1440px;
    width: 100%;
    height: max-content;

    section{
        max-width: 1440px;
        width: 100%;
        height: 688px;
        margin: 0px;

        background-image: url(${bgDash});
        background-repeat: no-repeat;
        background-position: right top;
        background-attachment: fixed;
    }
    .filter_bg{
        width: 100%;
        height: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        background: rgba(219, 247, 255, 0.8);
    }
    .box_section_content{
        width: 90%;
        height: 90%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 70px;

        border: none;
          
    }
    .box_section_content > img{
        width: 351px;
        height: 536px;

        border-radius: 15px;
        border: none;
        
        background-image: url(${cover});
        background-repeat: no-repeat;
        background-position: center;
    }
    .box_infos{
        width: 750px;
        height: 350px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

    }
    .box_infos_title{
        display: flex;
        gap: 15px;
    }
    .box_infos_title > h2{
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
    }
    .box_infos_title > p{
        font-weight: 500;
        font-size: 26px;
        line-height: 34px;
    }
    .box_infos_tags{
        display: flex;
        align-items: center;
        gap: 10px;

        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
    }
    .box_infos_tags > span{
        width: 20px;
        height: 20px;

        font-weight: 600;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #000;
    }
    .circle{
        width: 5px;
        height: 5px;
        background-color: #000;

        border-radius: 10px;
    }
    .box_infos > strong{
        font-size: 15px;
        font-weight: 600;
        line-height: 18px;

    }
    .box_infos_sinopse > h3{
        font-size: 28px;
        font-weight: 700;
        line-height: 34px;
    }
    .box_infos_sinopse > p{
        margin-top: 15px;
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: justify;
    }
    .director > p{
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;

    }
    .director > span{
        font-size: 15px;
        font-weight: 200;
        line-height: 18px;
    }




    .call_film{
        max-width: 1440px;
        width: 100%;
        height: 260px;
        display: flex;
        justify-content: center;
        align-items: center;

        background: rgba(186,240,255,0.6808298319327731);
        background: linear-gradient(180deg, rgba(186,240,255,0.6808298319327731) 0%, rgba(173,190,194,5) 59%, rgba(0,0,0,0.689233193277311) 100%);
    }
    
    h1 {
        font-weight: bold;
        font-size: 40px;
        color: black;
    }
    main{
        max-width: 1440px;
        width: 100%;
        height: 800px;

        background-image: url(${bgDash2});
        background-repeat: no-repeat;
        background-position: right top;
        background-attachment: fixed;
    }
    .filter_bgmain{
        width: 100%;
        height: 100%;
        
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;
        
        background: rgba(0, 0, 0, 0.6);
    }
    .box_main_content{
        width: 90%;
        height: 90%;
        

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        gap: 70px;

        border: none;
        background: rgba(21, 81, 31, 0.6);
    }

`

export const FormStyled = styled.form`
        width: 700px;
        height: 360px;

        background: rgba(0, 0, 0, 0.6);

        img{
            width: 80px;
            height: 80px;

            border-radius: 50%;
        }
`
export const ListStyled = styled.ul`
        width: 700px;
        height: 860px;

        background: rgba(110, 0, 0, 0.6);
`
