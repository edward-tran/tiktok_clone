import React from 'react';
import styles from './VideoMore.module.scss';
import classNames from 'classnames/bind';
import {
    AutoScrollIcon,
    CaptionIcon,
    NotInterestedIcon,
    ReportIcon,
} from '../Icon';
const cx = classNames.bind(styles);
function VideoMore() {
    return (
        <ul className={cx('video-more-menu')}>
            <li>
                <CaptionIcon className={cx('video-more-item')} />
                <span className={cx('video-more-title')}>Captions</span>
            </li>
            <li>
                <AutoScrollIcon className={cx('video-more-item')} />
                <span className={cx('video-more-title')}>Auto scroll</span>
                <button className={cx('switch-button')}>
                    <div className={cx('div-switch')}>
                        <span className={cx('span-switch')}></span>
                    </div>
                </button>
            </li>
            <li>
                <NotInterestedIcon className={cx('video-more-item')} />
                <span className={cx('video-more-title')}>Not interested</span>
            </li>
            <li>
                <ReportIcon className={cx('video-more-item')} />
                <span className={cx('video-more-title')}>Report</span>
            </li>
        </ul>
    );
}

export default VideoMore;
