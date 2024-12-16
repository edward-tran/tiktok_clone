import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import Image from '~/components/Image';
import userAvatar from '~/assets/images/user_avatar.jpg';
import {
    ForYou,
    Following,
    Live,
    Explore,
    Friends,
    UploadIcon,
    Activity,
    MessageIcon,
    More,
    Profile,
} from '~/components/Icon';
import FollowingAccounts from '~/components/FollowingAccounts';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    const [isLogIn, setIsLogin] = useState(false);
    return (
        <div className={cx('container')}>
            <aside className={cx('wrapper')}>
                <Menu>
                    {isLogIn ? (
                        <>
                            <MenuItem
                                title="For You"
                                to={config.routes.home}
                                icon={<ForYou />}
                            />
                            <MenuItem
                                title="Explore"
                                to={config.routes.explore}
                                icon={<Explore />}
                            />
                            <MenuItem
                                title="LIVE"
                                to={config.routes.live}
                                icon={<Live />}
                            />
                            <MenuItem
                                title="Following"
                                to={config.routes.following}
                                icon={<Following />}
                            />
                            <MenuItem
                                title="Friends"
                                to={config.routes.friends}
                                icon={<Friends />}
                            />
                            <MenuItem
                                title="Upload"
                                to={config.routes.upload}
                                icon={<UploadIcon />}
                            />
                            <MenuItem
                                title="Activity"
                                to={config.routes.activity}
                                icon={<Activity />}
                            />
                            <MenuItem
                                title="Messages"
                                to={config.routes.messages}
                                icon={<MessageIcon />}
                            />
                            <MenuItem
                                title="Profile"
                                to={config.routes.profile}
                                icon={
                                    <Image
                                        className={cx('user-avatar')}
                                        src={userAvatar}
                                        alt="avatar"
                                    />
                                }
                            />
                            <MenuItem
                                title="More"
                                to={config.routes.more}
                                icon={<More />}
                            />
                            <FollowingAccounts title="Following accounts" />
                        </>
                    ) : (
                        <>
                            <MenuItem
                                title="For You"
                                to={config.routes.home}
                                icon={<ForYou />}
                            />
                            <MenuItem
                                title="Explore"
                                to={config.routes.explore}
                                icon={<Explore />}
                            />
                            <MenuItem
                                title="LIVE"
                                to={config.routes.live}
                                icon={<Live />}
                            />
                            <MenuItem
                                title="Following"
                                to={config.routes.following}
                                icon={<Following />}
                            />
                            <MenuItem
                                title="Upload"
                                to={config.routes.upload}
                                icon={<UploadIcon />}
                            />
                            <MenuItem
                                title="Profile"
                                to={config.routes.profile}
                                icon={<Profile />}
                            />
                            <MenuItem
                                title="More"
                                to={config.routes.more}
                                icon={<More />}
                            />
                            <Button
                                flat
                                to={config.routes.home}
                                onClick={() => setIsLogin(true)}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <div className={cx('footer')}>
                        <ul>
                            <li>Company</li>
                            <li>Program</li>
                            <li>Terms & Policies</li>
                            <span>© 2024 TikTok</span>
                        </ul>
                    </div>
                </Menu>
            </aside>
        </div>
    );
}

export default Sidebar;
