import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import userAvatar from '~/assets/images/user_avatar.jpg';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccountItem({ accountInfo }) {
    return (
        <Link to={`/@${accountInfo.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={accountInfo.avatar}
                alt={accountInfo.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx('user-name')}>
                        {accountInfo.nickname}
                    </span>

                    {accountInfo.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <span className={cx('full-name')}>{accountInfo.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    accountInfo: PropTypes.object.isRequired,
};
export default AccountItem;
