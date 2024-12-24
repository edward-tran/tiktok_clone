import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import videos from '~/assets/videos';
import {
    CommentIcon,
    FollowIcon,
    UnFollowIcon,
    LikeIcon,
    SaveIcon,
    ShareIcon,
    SoundOffIcon,
    SoundOnIcon,
    VideoMore,
} from '~/components/Icon';
import userAvatar from '~/assets/images/user_avatar.jpg';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function Home() {
    const videoRef = useRef(false);
    const [soundIcon, setSoundIcon] = useState(<SoundOffIcon />);
    const followRef = useRef(null);
    const [isFollow, setIsFollow] = useState(false);
    const handlePlay = () => {
        if (videoRef.current.autoplay === false) {
            videoRef.current.play();
            videoRef.current.autoplay = true;
        } else {
            videoRef.current.pause();
            videoRef.current.autoplay = false;
        }
    };
    const handleMuted = () => {
        if (videoRef.current) {
            if (videoRef.current.muted === true) {
                videoRef.current.muted = false;
                setSoundIcon(<SoundOnIcon />);
            } else {
                videoRef.current.muted = true;
                setSoundIcon(<SoundOffIcon />);
            }
        }
    };
    const handleFollow = () => {
        setIsFollow(!isFollow);
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
                    <div
                        className={cx('sound-off-icon')}
                        status="true"
                        onClick={handleMuted}
                    >
                        {soundIcon}
                    </div>
                    <div className={cx('video-more')}>
                        <VideoMore />
                    </div>
                    <SoundOnIcon />
                </div>
            </div>
            <div className={cx('tools')}>
                <div className={cx('avatar')}>
                    <Image
                        className={cx('user-avatar')}
                        src={userAvatar}
                        alt="avatar"
                    />
                    <div
                        className={cx('feed-follow')}
                        ref={followRef}
                        onClick={handleFollow}
                    >
                        {isFollow ? <FollowIcon /> : <UnFollowIcon />}
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
