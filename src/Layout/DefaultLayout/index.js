import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layout/components/Header';
import Sidebar from '~/layout/components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left-side')}>
                    <Header />
                    <Sidebar />
                </div>
                <div className={cx('right-side')}>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
