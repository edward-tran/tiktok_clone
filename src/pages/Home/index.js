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
    LikedIcon,
    SavedIcon,
    VideoMoreIcon,
} from '~/components/Icon';
import userAvatar from '~/assets/images/user_avatar.jpg';
import Image from '~/components/Image';
import VideoMore from '~/components/VideoMore';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
function Home() {
    const videoRef = useRef(null);
    const [soundIcon, setSoundIcon] = useState(<SoundOffIcon />);
    const videoSideRef = useRef(null);
    const [showMoreIcon, setShowMoreIcon] = useState(false);
    const videoMoreIconRef = useRef(null);
    const [showVideoMore, setShowVideoMore] = useState(false);
    const followRef = useRef(null);
    const [isFollow, setIsFollow] = useState(false);
    const likedRef = useRef(null);
    const [isLiked, setIsLiked] = useState(false);
    const savedRef = useRef(null);
    const [isSaved, setIsSaved] = useState(false);
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
    const handleLike = () => {
        setIsLiked(!isLiked);
    };
    const handleSaved = () => {
        setIsSaved(!isSaved);
    };
    const handleMouseEnter = () => {
        setShowMoreIcon(true);
    };

    const handleMouseLeave = (e) => {
        if (!videoMoreIconRef.current.contains(e.relatedTarget)) {
            setShowMoreIcon(false);
        }
    };

    const handleVideoMoreEnter = () => {
        setShowVideoMore(true);
    };

    const handleVideoMoreLeave = () => {
        setShowVideoMore(false);
    };

    return (
        <div className={cx('content-item')}>
            <div className={cx('video-container')}>
                <div
                    className={cx('video')}
                    ref={videoSideRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <video
                        autoPlay
                        muted
                        loop
                        ref={videoRef}
                        onClick={handlePlay}
                    >
                        <source src={videos.video1} />
                    </video>
                    <div className={cx('sound-off-icon')} onClick={handleMuted}>
                        {soundIcon}
                    </div>
                    <div className={cx('video-more')}>
                        {showMoreIcon && (
                            <div
                                ref={videoMoreIconRef}
                                onMouseEnter={handleVideoMoreEnter}
                                onMouseLeave={handleVideoMoreLeave}
                            >
                                <Tippy
                                    content={<VideoMore />}
                                    interactive={true}
                                    trigger="mouseenter"
                                    delay={[100, 200]}
                                    hideOnClick={false}
                                    onMouseEnter={handleVideoMoreEnter}
                                    onMouseLeave={handleVideoMoreLeave}
                                >
                                    <div>
                                        <VideoMoreIcon />
                                    </div>
                                </Tippy>
                            </div>
                        )}
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
                <div className={cx('button-item')} onClick={handleLike}>
                    <button>{isLiked ? <LikedIcon /> : <LikeIcon />}</button>
                    <span className={cx('total-number')}>100K</span>
                </div>
                <div className={cx('button-item')}>
                    <button>
                        <CommentIcon />
                    </button>
                    <span className={cx('total-number')}>5</span>
                </div>
                <div className={cx('button-item')} onClick={handleSaved}>
                    <button>{isSaved ? <SavedIcon /> : <SaveIcon />}</button>
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
