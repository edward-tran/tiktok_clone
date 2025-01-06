import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import VideoVolume from '~/components/VideoVolume';
import VideoTimeStream from '~/components/VideoTimeStream';
// import videos from '~/assets/videos/';
import {
    SoundOffIcon,
    SoundOnIcon,
    CenterPlayIcon,
    CenterPauseIcon,
    CenterSoundOnIcon,
    CenterSoundOffIcon,
} from '~/components/Icon';

const cx = classNames.bind(styles);
function Video({ src }) {
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [soundIcon, setSoundIcon] = useState(<SoundOffIcon />);
    const [showVolume, setShowVolumne] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isPlayed, setIsPlayed] = useState();
    const [showPlayIcon, setShowPlayIcon] = useState(false);
    const [isSoundOn, setIsSoundOn] = useState();
    const [showSoundIcon, setShowSoundIcon] = useState(false);
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
        <div>
            <video autoPlay muted loop ref={videoRef} onClick={handlePlay}>
                <source src={src} />
            </video>
            <div
                className={cx('sound-icon')}
                onClick={handleMuted}
                onMouseEnter={() => setShowVolumne(true)}
                onMouseLeave={() =>
                    setTimeout(() => setShowVolumne(false), 5000)
                }
            >
                <span>{soundIcon}</span>
            </div>
            <div>
                {showVolume && (
                    <VideoVolume
                        volume={volume}
                        handleVolumeChange={handleVolumeChange}
                    />
                )}
            </div>
            {showPlayIcon ? (
                isPlayed === false ? (
                    <div className={cx('center-icon')}>
                        <CenterPlayIcon />
                    </div>
                ) : (
                    <div className={cx('center-icon')}>
                        <CenterPauseIcon />
                    </div>
                )
            ) : (
                ''
            )}
            {showSoundIcon ? (
                isSoundOn === false ? (
                    <div className={cx('center-icon')}>
                        <CenterSoundOnIcon />
                    </div>
                ) : (
                    <div className={cx('center-icon')}>
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
    );
}

export default Video;
