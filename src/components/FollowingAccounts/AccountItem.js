import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import userAvatar from '~/assets/images/user_avatar.jpg';

const cx = classNames.bind(styles);
function AccountItem({ userData }) {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('user-avatar')}
                src={userAvatar}
                alt="userAvatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx('user-name')}>{userData.userName}</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('full-name')}>{userData.fullName}</span>
            </div>
        </div>
    );
}

export default AccountItem;
