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
    NotificationIcon,
    MessageIcon,
} from '~/components/Icon';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
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
                    to={config.routes.notification}
                    icon={<NotificationIcon />}
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
            </Menu>
        </aside>
    );
}

export default Sidebar;
