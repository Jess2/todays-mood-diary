import React from 'react';
import Style from 'components/Header.module.scss';
import cn from 'classnames';

console.log(Style)

export default function Header() {
    return (
        <header className={cn(Style.header)}>
            <div>"</div>
            <div>오</div>
            <div>늘</div>
            <div>의</div>
            <div>&nbsp;</div>
            <div>기</div>
            <div>분</div>
            <div>"</div>
        </header>
    );
}
