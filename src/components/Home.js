import React from 'react';
import Style from 'components/Home.module.scss';
import cn from 'classnames';

export default function Home() {
    return (
        <div className={cn(Style.home)}>
            <h1>Welcome!</h1>
        </div>
    );
}
