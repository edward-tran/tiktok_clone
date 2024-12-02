import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import userAvatar from '~/assets/images/user_avatar.jpg';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={userAvatar} alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Full Name</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>User Name</span>
            </div>
        </div>
    );
}

export default AccountItem;
