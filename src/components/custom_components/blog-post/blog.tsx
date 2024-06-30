import React from 'react'
import Likebutton from './assets/favoriteIcon.svg'
import Likebuttonactive from './assets/favoriteIconActive.svg'
import './styles.css'
export default function  StateObject()
{

    const [isFavorite, setIsFavorite] = React.useState(true);

    function changeFavorite()
    {
        setIsFavorite(prevFavorite =>!prevFavorite)
    }

    let likeIcon = isFavorite ? Likebutton:Likebuttonactive;
    return (
        <div>
           
           <div className='wrap social-card subtle-color full-height'>
            <div className='social-media-post'>

                <div className='post-picture'>
                    <img src='https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                </div>

                <div className='post-content'>
                  <h3 className='social-title'>Art of Minimalism: An Introduction to Modern World Trends</h3>
                  <p className='social-description'>Minimalism means a lot more than the generic definition of just living with the things you need. It is centred around what is important and removing everything that distracts us from our core purpose. It focuses on your intentions and thus can have striking improvements in many areas of your life.</p>
                    <div className='like-button post'>
                        <div className='btn'>
                      <img src={likeIcon.src} onClick={changeFavorite}/>
                        </div>
                    </div>
                </div>

            </div>
           </div>
        </div>
    )
}