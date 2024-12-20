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
                        controls
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
                <div className={cx('button-item')}>
                    <button>
                        <LikeIcon />
                    </button>
                    <span className={cx('total-number')}>100</span>
                </div>
                <div className={cx('button-item')}>
                    <button>
                        <CommentIcon />
                    </button>
                    <span className={cx('total-number')}>5</span>
                </div>
                <div className={cx('button-item')}>
                    <button>
                        <SaveIcon />
                    </button>
                    <span className={cx('total-number')}>3</span>
                </div>
                <div className={cx('button-item')}>
                    <button>
                        <ShareIcon />
                    </button>
                    <span className={cx('total-number')}>2</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
