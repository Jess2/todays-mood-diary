import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { ImSmile2, ImSad2, ImAngry2, ImConfused2, ImNeutral2, ImWondering2, ImFrustrated2, ImCrying2 } from 'react-icons/im';
import Style from 'components/List.module.scss';
import cn from 'classnames';
import Detail from "components/Detail";

export default function List({ match }) {
    const [moodList, setMoodList] = useState([]);
    const [currentId, setCurrentId] = useState(1);

    function onAdd(_type, _color) {
        const mood = { id: currentId, type: _type, color: _color};
        setCurrentId(currentId + 1);
        setMoodList([...moodList, mood]);
    }

    function onDelete(e) {
        const id = Number(e.target.dataset.id);
        const newMoodList = moodList.filter(mood => mood.id !== id);
        setMoodList(newMoodList);
    }
    function onSaveToServer() {}

    return (
        <div className={cn(Style.list)}>
            <h1>선택하세요</h1>
            <ul>
                <li onClick={() => onAdd('neutral', '#a9a9a9')}>
                    <ImNeutral2 size={80} color={'#a9a9a9'} />
                </li>
                <li onClick={() => onAdd('happy', '#ffd246')}>
                    <ImSmile2 size={80} color={'#ffd246'} />
                </li>
                <li onClick={() => onAdd('confused', '#78d237')}>
                    <ImConfused2 size={80} color={'#78d237'} />
                </li>
                <li onClick={() => onAdd('wondering', '#235e0a')}>
                    <ImWondering2 size={80} color={'#235e0a'} />
                </li>
                <li onClick={() => onAdd('sad', '#2d73f5')}>
                    <ImSad2 size={80} color={'#2d73f5'} />
                </li>
                <li onClick={() => onAdd('crying', '#0f3885')}>
                    <ImCrying2 size={80} color={'#0f3885'} />
                </li>
                <li onClick={() => onAdd('angry', '#fc2b1d')}>
                    <ImAngry2 size={80} color={'#fc2b1d'} />
                </li>
                <li onClick={() => onAdd('frustrated', '#9f0b00')}>
                    <ImFrustrated2 size={80} color={'#9f0b00'} />
                </li>
            </ul>
            <h2>나의 기분 목록</h2>
            <ul>
                {moodList.map(mood => (
                    <li key={mood.id}>
                        <Link to={`${match.url}/${mood.type}`}>
                            { mood.type === 'neutral' && <ImNeutral2 size={80} color={mood.color} /> }
                            { mood.type === 'happy' && <ImSmile2 size={80} color={mood.color} /> }
                            { mood.type === 'confused' && <ImConfused2 size={80} color={mood.color} /> }
                            { mood.type === 'wondering' && <ImWondering2 size={80} color={mood.color} /> }
                            { mood.type === 'sad' && <ImSad2 size={80} color={mood.color} /> }
                            { mood.type === 'crying' && <ImCrying2 size={80} color={mood.color} /> }
                            { mood.type === 'angry' && <ImAngry2 size={80} color={mood.color} /> }
                            { mood.type === 'frustrated' && <ImFrustrated2 size={80} color={mood.color} /> }
                            <button data-id={mood.id} onClick={onDelete}>
                                삭제
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>

            <Route path={`${match.url}/:listId`} component={Detail}/>
            <Route
                exact
                path={match.url}
                render={() => <h3>Choose one!</h3>}
            />
        </div>
    );
}
