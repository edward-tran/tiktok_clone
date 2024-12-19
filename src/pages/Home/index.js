import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import videos from '~/assets/videos';
import {
    CommentIcon,
    FeedFollow,
    LikeIcon,
    SaveIcon,
    ShareIcon,
} from '~/components/Icon';
import userAvatar from '~/assets/images/user_avatar.jpg';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function Home() {
    const videoRef = useRef(false);
    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
        }
    };
    return (
        <div className={cx('content-item')}>
            <div className={cx('video-container')}>
                <div className={cx('video')}>
                    <video
                        autoPlay
                        muted
                        loop
                        ref={videoRef}
                        onClick={handlePlay}
                    >
                        <source src={videos.video1} />
                    </video>
                </div>
            </div>
            <div className={cx('tools')}>
                <div className={cx('avatar')}>
                    <Image
                        className={cx('user-avatar')}
                        src={userAvatar}
                        alt="avatar"
                    />
                    <div className={cx('feed-follow')}>
                        <FeedFollow />
                    </div>
                </div>
                <button>
                    <LikeIcon />
                    <span>100</span>
                </button>
                <button>
                    <CommentIcon />
                    <span>5</span>
                </button>
                <button>
                    <SaveIcon />
                    <span>3</span>
                </button>
                <button>
                    <ShareIcon />
                    <span>2</span>
                </button>
            </div>
        </div>
    );
}

export default Home;
