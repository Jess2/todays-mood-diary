import React from 'react';
import { ImSmile2, ImSad2, ImAngry2, ImConfused2, ImNeutral2, ImWondering2, ImFrustrated2, ImCrying2 } from 'react-icons/im';
import Style from 'components/Detail.module.scss';
import cn from 'classnames';

export default function Detail({ match }) {
    return (
        <div className={cn(Style.detail)}>
            <div>
                <h3>{`I am ${match.params.listId}`}</h3>
                { match.params.listId === 'neutral' && <ImNeutral2 size={80} color={'#a9a9a9'} /> }
                { match.params.listId === 'happy' && <ImSmile2 size={80} color={'#ffd246'} /> }
                { match.params.listId === 'confused' && <ImConfused2 size={80} color={'#78d237'} /> }
                { match.params.listId === 'wondering' && <ImWondering2 size={80} color={'#235e0a'} /> }
                { match.params.listId === 'sad' && <ImSad2 size={80} color={'#2d73f5'} /> }
                { match.params.listId === 'crying' && <ImCrying2 size={80} color={'#0f3885'} /> }
                { match.params.listId === 'angry' && <ImAngry2 size={80} color={'#fc2b1d'} /> }
                { match.params.listId === 'frustrated' && <ImFrustrated2 size={80} color={'#9f0b00'} /> }
            </div>
        </div>
    );
}
