import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';
import { SeeLess, SeeMore } from '../Icon';
import { useState } from 'react';

const cx = classNames.bind(styles);
function FollowingAccounts({ title }) {
    const userData = {
        userName: 'nth.nhun_',
        fullName: 'Nguyễn Thị Hồng Nhung',
    };
    const [buttonName, setButtonName] = useState('See more');
    const changeButtonName = () => {
        if (buttonName == 'See less') {
            setButtonName('See more');
        } else {
            setButtonName('See less');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>{title}</span>
            <div className={cx('inner')}>
                <AccountItem userData={userData} />
                <AccountItem userData={userData} />
                <AccountItem userData={userData} />
                <button className={cx('more-less')} onClick={changeButtonName}>
                    {buttonName === 'See more' ? <SeeMore /> : <SeeLess />}
                    <span>{buttonName}</span>
                </button>
            </div>
        </div>
    );
}

export default FollowingAccounts;
