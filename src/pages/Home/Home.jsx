import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import VideoMore from '~/components/VideoMore';
import { VideoMoreIcon } from '~/components/Icon';
import UserActions from '~/components/UserActions';
import Video from '~/components/Video';
const cx = classNames.bind(styles);
function Home() {
    const videoSideRef = useRef(null);
    const [showVideoMore, setShowVideoMore] = useState(false);
    const [showMoreIcon, setShowMoreIcon] = useState(false);
    const videoMoreIconRef = useRef(null);
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
                    <Video />
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
                    <UserActions />
                </div>
            </div>
        </div>
    );
}

export default Home;
