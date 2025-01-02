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
    CenterPlayIcon,
    CenterPauseIcon,
    CenterSoundOnIcon,
    CenterSoundOffIcon,
} from '~/components/Icon';
import userAvatar from '~/assets/images/user_avatar.jpg';
import Image from '~/components/Image';
import VideoMore from '~/components/VideoMore';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import VideoVolume from '~/components/VideoVolume';
import VideoTimeStream from '~/components/VideoTimeStream';

const cx = classNames.bind(styles);
function Home() {
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [soundIcon, setSoundIcon] = useState(<SoundOffIcon />);
    const [showVolume, setShowVolumne] = useState(false);
    const [volume, setVolume] = useState(1);
    const videoSideRef = useRef(null);
    const [showMoreIcon, setShowMoreIcon] = useState(false);
    const videoMoreIconRef = useRef(null);
    const [showVideoMore, setShowVideoMore] = useState(false);
    const followRef = useRef(null);
    const [isPlayed, setIsPlayed] = useState();
    const [showPlayIcon, setShowPlayIcon] = useState(false);
    const [isSoundOn, setIsSoundOn] = useState();
    const [showSoundIcon, setShowSoundIcon] = useState(false);
    const [isFollow, setIsFollow] = useState(false);
    const likedRef = useRef(null);
    const [isLiked, setIsLiked] = useState(false);
    const savedRef = useRef(null);
    const [isSaved, setIsSaved] = useState(false);
    const handlePlay = () => {
        if (videoRef.current.autoplay === false) {
            videoRef.current.play();
            videoRef.current.autoplay = true;
            setIsPlayed(true);
            setShowPlayIcon(true);
        } else {
            videoRef.current.pause();
            videoRef.current.autoplay = false;
            setIsPlayed(false);
            setShowPlayIcon(true);
        }
        setTimeout(() => setShowPlayIcon(false), 500);
    };
    const handleMuted = () => {
        if (videoRef.current) {
            if (videoRef.current.muted === true) {
                videoRef.current.muted = false;
                setSoundIcon(<SoundOnIcon style={{}} />);
                setShowVolumne(true);
                setIsSoundOn(false);
                setShowSoundIcon(true);
            } else {
                videoRef.current.muted = true;
                setSoundIcon(<SoundOffIcon />);
                setShowVolumne(false);
                setIsSoundOn(true);
                setShowSoundIcon(true);
            }
        }
        setTimeout(() => setShowSoundIcon(false), 500);
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
    const handleVolumeChange = (event) => {
        videoRef.current.muted = false;
        setSoundIcon(<SoundOnIcon />);
        const newVolume = event.target.value;
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
        if (videoRef.current.volume === 0) {
            videoRef.current.muted = true;
            setSoundIcon(<SoundOffIcon />);
        }
        event.target.style.setProperty('--value', newVolume * 100 + '%');
    };
    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
        videoRef.current.style.setProperty(
            '--value',
            (videoRef.current.currentTime / videoRef.current.duration) * 100 +
                '%',
        );
    };
    const handleTimeChange = (event) => {
        const newTime = event.target.value;
        setCurrentTime(newTime);
        videoRef.current.currentTime = newTime;
        event.target.style.setProperty(
            '--value',
            (newTime / duration) * 100 + '%',
        );
    };
    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
        videoRef.current.style.setProperty(
            '--value',
            (videoRef.current.currentTime / videoRef.current.duration) * 100 +
                '%',
        );
    };
    useEffect(() => {
        videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
        videoRef.current.addEventListener(
            'loadedmetadata',
            handleLoadedMetadata,
        );
        return () => {
            videoRef.current.removeEventListener(
                'timeupdate',
                handleTimeUpdate,
            );
            videoRef.current.removeEventListener(
                'loadedmetadata',
                handleLoadedMetadata,
            );
        };
    }, []);
    return (
        <div className={cx('content-item')}>
            <div className={cx('video-container')}>
                <div
                    className={cx('video')}
                    ref={videoSideRef}
                    onMouseEnter={() => {
                        setShowMoreIcon(true);
                    }}
                    onMouseLeave={() => {
                        if (showVideoMore === false) {
                            setShowMoreIcon(false);
                        }
                    }}
                >
                    <video
                        autoPlay
                        muted
                        loop
                        ref={videoRef}
                        onClick={handlePlay}
                    >
                        <source src={videos.video2} />
                    </video>
                    <div
                        className={cx('sound-off-icon')}
                        onClick={handleMuted}
                        onMouseEnter={() => setShowVolumne(true)}
                        onMouseLeave={() =>
                            setTimeout(() => setShowVolumne(false), 5000)
                        }
                    >
                        <span style={{ pointerEvents: 'none' }}>
                            {soundIcon}
                        </span>
                    </div>
                    <div>
                        {showVolume && (
                            <VideoVolume
                                volume={volume}
                                handleVolumeChange={handleVolumeChange}
                            />
                        )}
                    </div>
                    <div className={cx('video-more')}>
                        {showMoreIcon && (
                            <div
                                ref={videoMoreIconRef}
                                onMouseEnter={() => {
                                    setShowMoreIcon(true);
                                    setShowVideoMore(true);
                                }}
                            >
                                <VideoMoreIcon />
                            </div>
                        )}
                        {showVideoMore && (
                            <div
                                onMouseEnter={() => {
                                    setShowMoreIcon(true);
                                }}
                                onMouseLeave={() =>
                                    setTimeout(() => {
                                        setShowVideoMore(false);
                                        setShowMoreIcon(false);
                                    }, 1000)
                                }
                            >
                                <VideoMore />
                            </div>
                        )}
                    </div>
                    {showPlayIcon ? (
                        isPlayed === false ? (
                            <div className={cx('center-play-icon')}>
                                <CenterPlayIcon />
                            </div>
                        ) : (
                            <div className={cx('center-pause-icon')}>
                                <CenterPauseIcon />
                            </div>
                        )
                    ) : (
                        ''
                    )}
                    {showSoundIcon ? (
                        isSoundOn === false ? (
                            <div className={cx('center-sound-on-icon')}>
                                <CenterSoundOnIcon />
                            </div>
                        ) : (
                            <div className={cx('center-sound-off-icon')}>
                                <CenterSoundOffIcon />
                            </div>
                        )
                    ) : (
                        ''
                    )}

                    <VideoTimeStream
                        duration={duration}
                        currentTime={currentTime}
                        handleTimeChange={handleTimeChange}
                    />
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
