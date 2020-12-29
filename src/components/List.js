import React from 'react';
import { ImSmile2, ImSad2, ImAngry2, ImConfused2, ImNeutral2, ImWondering2, ImFrustrated2, ImCrying2 } from 'react-icons/im';
import Style from 'components/List.module.scss';
import cn from 'classnames';

console.log(Style)

export default function List() {
    function onClickButton() {
        console.log('onClickButton');
    }

    return (
        <div className={cn(Style.list)}>
            <button onClick={onClickButton}>
                <ImNeutral2 size={80} color={'#a9a9a9'} />
            </button>
            <button>
                <ImSmile2 size={80} color={'#ffd246'} />
            </button>
            <button>
                <ImConfused2 size={80} color={'#78d237'} />
            </button>
            <button>
                <ImWondering2 size={80} color={'#235e0a'} />
            </button>
            <button>
                <ImSad2 size={80} color={'#2d73f5'} />
            </button>
            <button>
                <ImCrying2 size={80} color={'#0f3885'} />
            </button>
            <button>
                <ImAngry2 size={80} color={'#fc2b1d'} />
            </button>
            <button>
                <ImFrustrated2 size={80} color={'#9f0b00'} />
            </button>
        </div>
    );
}
