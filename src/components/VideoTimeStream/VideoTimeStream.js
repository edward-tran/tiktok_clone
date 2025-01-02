import classNames from 'classnames/bind';
import styles from './VideoTimeStream.module.scss';
const cx = classNames.bind(styles);
function VideoTimeStream({ duration, currentTime, handleTimeChange }) {
    return (
        <div className={cx('video-time-stream')}>
            {' '}
            <input
                type="range"
                min="0"
                max={duration}
                step="0.1"
                value={currentTime}
                onChange={handleTimeChange}
            />{' '}
            {/* <div>
                {' '}
                {Math.floor(currentTime)} / {Math.floor(duration)}
            </div>{' '} */}
        </div>
    );
}

export default VideoTimeStream;
