import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import videos from '~/assets/videos';
import { CommentIcon, LikeIcon } from '~/components/Icon';
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
                <div>Avatar</div>
                <button>
                    <LikeIcon />
                </button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    );
}

export default Home;
