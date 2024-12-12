import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>{title}</span>
            <div className={cx('inner')}>
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
        </div>
    );
}

export default SuggestedAccounts;
