import React from 'react';
// import avatar from '../../img/9-Dicas.png';
import './ColaboradorCard.css';

function ColaboradorCard(props) {
    return (
        <div className='card-container'>
            <header>
                <img src='https://media-exp1.licdn.com/dms/image/D4E35AQGShv2hWW_heg/profile-framedphoto-shrink_200_200/0/1642011070370?e=1663693200&v=beta&t=fwXQud5Ab8TnEBexPfAzEutCBg0fq7zNGBGBhfDIVNA' alt={props.name} />
            </header>
            <h1 className='bold-text'>
                {props.name}
                <span className='normal-text'>{props.age}</span>
            </h1>
            <h2 className='normal-text'>{props.charge}</h2>
            <div className='social-container'>
                <div className="followers">
                    <h1 className='bold-text'>{props.followers}</h1>
                    <h2 className='smaller-text'>Followers</h2>
                </div>
                <div className="likes">
                    <h1 className='bold-text'>{props.likes}</h1>
                    <h2 className='smaller-text'>Likes</h2>
                </div>
            </div>
        </div>
    );
}

export default ColaboradorCard;
