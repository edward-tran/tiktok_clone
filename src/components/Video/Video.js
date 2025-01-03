// import { useState, useEffect, useRef, forwardRef } from 'react';
// import classNames from 'classnames/bind';
// import styles from './Video.module.scss';
// import {
//     SoundOffIcon,
//     SoundOnIcon,
//     CenterPlayIcon,
//     CenterPauseIcon,
//     CenterSoundOnIcon,
//     CenterSoundOffIcon,
// } from '../Icon';
// import VideoVolume from '~/components/VideoVolume';
// import VideoTimeStream from '~/components/VideoTimeStream';

// const cx = classNames.bind(styles);
// const Video = forwardRef(({ src }, ref) => {
//     const localRef = useRef(null);
//     const videoRef = ref || localRef;
//     const [currentTime, setCurrentTime] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const [isMuted, setIsMuted] = useState(true);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [volume, setVolume] = useState(1);
//     const [showVolume, setShowVolume] = useState(false);
//     const [showPlayIcon, setShowPlayIcon] = useState(false);
//     const [showSoundIcon, setShowSoundIcon] = useState(false);

//     useEffect(() => {
//         if (videoRef.current) {
//             console.log('Video element ready:', videoRef.current);
//         }
//     }, [videoRef]);
//     const togglePlay = () => {
//         if (videoRef.current.paused) {
//             videoRef.current.play();
//             setIsPlaying(true);
//         } else {
//             videoRef.current.pause();
//             setIsPlaying(false);
//         }
//         setShowPlayIcon(true);
//         setTimeout(() => setShowPlayIcon(false), 500);
//     };

//     const toggleMute = () => {
//         const muted = !isMuted;
//         videoRef.current.muted = muted;
//         setIsMuted(muted);
//         setShowSoundIcon(true);
//         setTimeout(() => setShowSoundIcon(false), 500);
//     };

//     const handleVolumeChange = (event) => {
//         const newVolume = parseFloat(event.target.value);
//         videoRef.current.volume = newVolume;
//         setVolume(newVolume);
//         if (newVolume === 0) {
//             videoRef.current.muted = true;
//             setIsMuted(true);
//         } else {
//             videoRef.current.muted = false;
//             setIsMuted(false);
//         }
//     };

//     const handleTimeUpdate = () => {
//         setCurrentTime(videoRef.current.currentTime);
//     };

//     const handleTimeChange = (event) => {
//         const newTime = parseFloat(event.target.value);
//         videoRef.current.currentTime = newTime;
//         setCurrentTime(newTime);
//     };

//     useEffect(() => {
//         const handleLoadedMetadata = () => {
//             setDuration(videoRef.current.duration);
//         };

//         videoRef.current.addEventListener(
//             'loadedmetadata',
//             handleLoadedMetadata,
//         );
//         videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

//         return () => {
//             videoRef.current.removeEventListener(
//                 'loadedmetadata',
//                 handleLoadedMetadata,
//             );
//             videoRef.current.removeEventListener(
//                 'timeupdate',
//                 handleTimeUpdate,
//             );
//         };
//     }, []);

//     return (
//         <div className={cx('video-container')}>
//             <div className={cx('video')}>
//                 <video
//                     ref={videoRef}
//                     src={src}
//                     muted={isMuted}
//                     autoPlay
//                     loop
//                     onClick={togglePlay}
//                 />
//                 <div className={cx('controls')}>
//                     <div
//                         className={cx('sound-icon')}
//                         onClick={toggleMute}
//                         onMouseEnter={() => setShowVolume(true)}
//                         onMouseLeave={() =>
//                             setTimeout(() => setShowVolume(false), 5000)
//                         }
//                     >
//                         {isMuted ? <SoundOffIcon /> : <SoundOnIcon />}
//                     </div>
//                     {showVolume && (
//                         <VideoVolume
//                             volume={volume}
//                             handleVolumeChange={handleVolumeChange}
//                         />
//                     )}
//                     {showPlayIcon &&
//                         (isPlaying ? (
//                             <CenterPauseIcon className={cx('center-icon')} />
//                         ) : (
//                             <CenterPlayIcon className={cx('center-icon')} />
//                         ))}
//                     {showSoundIcon &&
//                         (isMuted ? (
//                             <CenterSoundOffIcon className={cx('center-icon')} />
//                         ) : (
//                             <CenterSoundOnIcon className={cx('center-icon')} />
//                         ))}
//                 </div>
//                 <VideoTimeStream
//                     duration={duration}
//                     currentTime={currentTime}
//                     handleTimeChange={handleTimeChange}
//                 />
//             </div>
//         </div>
//     );
// });

// export default Video;
