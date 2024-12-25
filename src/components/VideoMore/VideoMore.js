import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
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
        <div>
            <Tippy offset={[100, 1000]} placement="top">
                <ul className={cx('video-more-menu')}>
                    <li>
                        <CaptionIcon className={cx('video-more-item')} />
                        <span>Captions</span>
                    </li>
                    <li>
                        <AutoScrollIcon className={cx('video-more-item')} />
                        <span>Auto scroll</span>
                    </li>
                    <li>
                        <NotInterestedIcon className={cx('video-more-item')} />
                        <span>Not interested</span>
                    </li>
                    <li>
                        <ReportIcon className={cx('video-more-item')} />
                        <span>Report</span>
                    </li>
                </ul>
            </Tippy>
        </div>
    );
}

export default VideoMore;
