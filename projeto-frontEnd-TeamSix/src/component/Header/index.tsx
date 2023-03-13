import React, { useState } from 'react'
import { IHeaderProps, StyledHeader } from './style'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Header = ({background}: IHeaderProps ) => {
    const [modalProfile, setModalProfile] = useState(false)
    const token = localStorage.getItem("@TOKEN")
    const navigate = useNavigate()

    return (
        <StyledHeader background={background}>
            <div>
                <h1>TEAM SIX</h1>
                <small>Films</small>
            </div>
           { token ?  
           <div onClick={() => setModalProfile(!modalProfile)}>
                <figure>
                    <img src="AVATAR" alt="AVATARPROFILE" />
                </figure>
                    {!modalProfile ? <MdOutlineKeyboardArrowDown /> : (
                        <>
                            <MdOutlineKeyboardArrowUp />
                            <div className='modalProfile'>
                                <p onClick={() => { navigate('/perfil') }}>Perfil</p>
                                <p onClick={() => { }}>Avatar</p>
                                <p onClick={() => { localStorage.removeItem("@TOKEN"); navigate('/') }}>Sair</p>
                            </div>
                        </>
                    )}
              </div>  : null }
           
        </StyledHeader>
    )
}

export default Header
