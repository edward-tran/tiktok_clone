import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import styles from './HomePage.module.scss';
import VideoMore from '~/components/VideoMore';
import { VideoMoreIcon } from '~/components/Icon';
import UserActions from '~/components/UserActions';
import Video from '~/components/Video';
import videos from '~/assets/videos';
const videoArray = Object.values(videos);
const cx = classNames.bind(styles);

function Home() {
    const [videoStates, setVideoStates] = useState(
        videoArray.map(() => ({ showMoreIcon: false, showVideoMore: false })),
    );

    const handleMouseEnterIcon = (index) => {
        setVideoStates((prev) =>
            prev.map((state, i) =>
                i === index ? { ...state, showMoreIcon: true } : state,
            ),
        );
    };

    const handleMouseLeaveIcon = (index) => {
        setVideoStates((prev) =>
            prev.map((state, i) =>
                i === index && !state.showVideoMore
                    ? { ...state, showMoreIcon: false }
                    : state,
            ),
        );
    };

    const handleMouseEnterMore = (index) => {
        setVideoStates((prev) =>
            prev.map((state, i) =>
                i === index ? { ...state, showVideoMore: true } : state,
            ),
        );
    };

    const handleMouseLeaveMore = (index) => {
        setTimeout(() => {
            setVideoStates((prev) =>
                prev.map((state, i) =>
                    i === index
                        ? {
                              ...state,
                              showVideoMore: false,
                              showMoreIcon: false,
                          }
                        : state,
                ),
            );
        }, 1000);
    };

    return (
        <Swiper
            direction="vertical"
            mousewheel={true}
            navigation={true}
            modules={[Pagination, Navigation, Mousewheel]}
            className={cx('swiper-container')}
        >
            {videoArray.map((videoItem, index) => (
                <SwiperSlide key={index}>
                    <div className={cx('content-item')}>
                        <div className={cx('video-container')}>
                            <div
                                className={cx('video')}
                                onMouseEnter={() => handleMouseEnterIcon(index)}
                                onMouseLeave={() => handleMouseLeaveIcon(index)}
                            >
                                <Video src={videoItem} />
                                <div className={cx('video-more')}>
                                    {videoStates[index].showMoreIcon && (
                                        <div
                                            onMouseEnter={() =>
                                                handleMouseEnterMore(index)
                                            }
                                            onMouseLeave={() =>
                                                handleMouseLeaveMore(index)
                                            }
                                        >
                                            <VideoMoreIcon />
                                        </div>
                                    )}
                                    {videoStates[index].showVideoMore && (
                                        <div
                                            onMouseEnter={() =>
                                                handleMouseEnterMore(index)
                                            }
                                            onMouseLeave={() =>
                                                handleMouseLeaveMore(index)
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
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Home;
