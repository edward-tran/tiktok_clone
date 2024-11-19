import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
// import Tippy from '@tippyjs/react';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import userAvatar from '~/assets/images/user_avatar.jpg';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    {/* <Button text to="/uploads">
                        + Upload
                    </Button> */}
                    <Button flat to="/login">
                        Log in
                    </Button>
                    {/* <Button outline to="/register">
                        Register
                    </Button>
                    <Button invisible to="/register">
                        Get app
                    </Button> */}
                    <Tippy
                        interactive
                        visible
                        render={(attrs) => (
                            <div
                                className={cx('menu-items')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <p>
                                        <span>
                                            Công cụ dành cho nhà sáng tạo
                                        </span>
                                    </p>
                                    <p>
                                        <span>Tiếng Việt</span>
                                    </p>
                                    <p>
                                        <span>Phản hồi và giúp đỡ</span>
                                    </p>
                                    <p>
                                        <span>Chế độ tối</span>
                                    </p>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <button className={cx('menu-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
