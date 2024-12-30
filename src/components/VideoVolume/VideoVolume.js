import classNames from 'classnames/bind';
import styles from './VideoVolume.module.scss';
const cx = classNames.bind(styles);
function VideoVolume({ volume, handleVolumeChange }) {
    return (
        <div className={cx('volume')}>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
}

export default VideoVolume;
