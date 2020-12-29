import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ImSmile2, ImSad2, ImAngry2, ImConfused2, ImNeutral2, ImWondering2, ImFrustrated2, ImCrying2 } from 'react-icons/im';
import Style from 'components/List.module.scss';
import cn from 'classnames';
import Detail from "components/Detail";

console.log(Style)

export default function List({ match }) {
    return (
        <div className={cn(Style.list)}>
            <ul>
                <li>
                    <Link to={`${match.url}/neutral`}>
                        <ImNeutral2 size={80} color={'#a9a9a9'} />
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/happy`}>
                        <ImSmile2 size={80} color={'#ffd246'} />
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/confused`}>
                        <ImConfused2 size={80} color={'#78d237'} />
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/wondering`}>
                        <ImWondering2 size={80} color={'#235e0a'} />
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/sad`}>
                        <ImSad2 size={80} color={'#2d73f5'} />
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/crying`}>
                        <ImCrying2 size={80} color={'#0f3885'} />
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/angry`}>
                        <ImAngry2 size={80} color={'#fc2b1d'} />
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/frustrated`}>
                        <ImFrustrated2 size={80} color={'#9f0b00'} />
                    </Link>
                </li>
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
