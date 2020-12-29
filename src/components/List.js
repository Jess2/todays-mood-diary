import React from 'react';
import { ImSmile2, ImSad2, ImAngry2, ImConfused2, ImNeutral2, ImWondering2, ImFrustrated2, ImCrying2 } from 'react-icons/im';
import Style from 'components/List.module.scss';
import cn from 'classnames';

console.log(Style)

export default function List() {
    return (
        <div className={cn(Style.list)}>
            <div>
                <ImNeutral2 size={80} color={'#a9a9a9'} />
            </div>
            <div>
                <ImSmile2 size={80} color={'#ffd246'} />
            </div>
            <div>
                <ImConfused2 size={80} color={'#78d237'} />
            </div>
            <div>
                <ImWondering2 size={80} color={'#235e0a'} />
            </div>
            <div>
                <ImSad2 size={80} color={'#2d73f5'} />
            </div>
            <div>
                <ImCrying2 size={80} color={'#0f3885'} />
            </div>
            <div>
                <ImAngry2 size={80} color={'#fc2b1d'} />
            </div>
            <div>
                <ImFrustrated2 size={80} color={'#9f0b00'} />
            </div>
        </div>
    );
}
