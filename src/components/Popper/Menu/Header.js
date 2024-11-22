import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <header className={cx('menu-item-header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('menu-item-title')}>{title}</h4>
        </header>
    );
}

export default Header;