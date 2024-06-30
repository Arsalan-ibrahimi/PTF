import React from 'react'
import './styles.css'
import profilePicture from './assets/prof.png'


/**
 * Profile component that displays the user's profile information.
 *
 * @return {JSX.Element} The profile component.
 */
export default function Profile() {
    // The profile component renders a div with the text "Profile".
    return (
        <div className='profile-custom'>
            <div className="picture"><img src={profilePicture.src}></img></div>
            <div className="text-content">
                
                <div className="top-cred"> 
               <div className='name-content'><h2>David Marrison</h2></div>
               <div className='designation'><h3>Project Manager</h3></div>
                </div>
         
                <div className='stat-wrap'>
                    <div className="articles">
                        <div className='title-article title-prof'>Articles</div>
                        <div className='value-article'>23</div>
                    </div>
                    <div className='followers'>
                    <div className='title-follower title-prof'>Followers</div>
                    <div className='value-follower'>962</div>
                    </div>
                    <div className='rating'>
                    <div className='title-rating title-prof'>Articles</div>
                    <div className='value-rating'>8.6</div>
                    </div>

                </div>

                <div className='button-wrap'>
                    <button className='secondary'>Chat</button>
                    <button className='primary'>Follow</button>
                </div>
            </div>
        </div>
    );
}
