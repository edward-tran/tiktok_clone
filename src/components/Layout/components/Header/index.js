import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faHouse,
    faA,
    faQuestion,
    faMoon,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import userAvatar from '~/assets/images/user_avatar.jpg';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, NotificationIcon, UploadIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faHouse} />,
        title: 'Tools for creator',
    },
    {
        icon: <FontAwesomeIcon icon={faA} />,
        title: 'Language',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback & Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Darkmode',
    },
];

const currentUser = true;
function Header() {
    const currentUserMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Logout',
            to: '/logout',
        },
    ];
    const handleMenuChange = () => {
        //
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={images.logo} />
                    </a>
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div>
                            <Tippy content="Upload Video" offset={[0, 0]}>
                                <button to="/uploads">
                                    <UploadIcon></UploadIcon>
                                </button>
                            </Tippy>
                            <Tippy content="Message" offset={[0, 0]}>
                                <button to="/message">
                                    <MessageIcon></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy content="Notifications" offset={[0, 0]}>
                                <button
                                    to="/notifications"
                                    className={cx('notify')}
                                >
                                    <NotificationIcon></NotificationIcon>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button flat to="/login">
                                Log in
                            </Button>
                            {/* <Button outline to="/register">
                                Register
                            </Button> */}
                        </>
                    )}
                    <Menu
                        items={currentUser ? currentUserMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={userAvatar}
                                alt="avatar"
                            />
                        ) : (
                            <button className={cx('menu-icon')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                    {/* <Button invisible to="/register">
                        Get app
                    </Button> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
