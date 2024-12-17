import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import video from '~/assets/videos';
const cx = classNames.bind(styles);
function Home() {
    console.log(video.demoVideo);
    return (
        <div className={cx('content-item')}>
            <video autoPlay={true} loop>
                <source src={video.demoVideo} />
            </video>
        </div>
    );
}

export default Home;
