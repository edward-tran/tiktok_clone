import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './UserActions.module.scss';
import userAvatar from '~/assets/images/user_avatar.jpg';
import Image from '~/components/Image';
import {
    FollowIcon,
    UnFollowIcon,
    LikeIcon,
    LikedIcon,
    CommentIcon,
    SaveIcon,
    SavedIcon,
    ShareIcon,
} from '../Icon';

const cx = classNames.bind(styles);

function UserActions() {
    const followRef = useRef(null);
    const [isFollow, setIsFollow] = useState(false);
    const likedRef = useRef(null);
    const [isLiked, setIsLiked] = useState(false);
    const savedRef = useRef(null);
    const [isSaved, setIsSaved] = useState(false);

    const handleFollow = () => {
        setIsFollow(!isFollow);
    };
    const handleLike = () => {
        setIsLiked(!isLiked);
    };
    const handleSaved = () => {
        setIsSaved(!isSaved);
    };

    return (
        <div className={cx('tools')}>
            <div className={cx('avatar')}>
                <Image
                    className={cx('user-avatar')}
                    src={userAvatar}
                    alt="avatar"
                />
                <div
                    className={cx('feed-follow')}
                    ref={followRef}
                    onClick={handleFollow}
                >
                    {isFollow ? <FollowIcon /> : <UnFollowIcon />}
                </div>
            </div>
            <div className={cx('button-item')} onClick={handleLike}>
                <button>{isLiked ? <LikedIcon /> : <LikeIcon />}</button>
                <span className={cx('total-number')}>100K</span>
            </div>
            <div className={cx('button-item')}>
                <button>
                    <CommentIcon />
                </button>
                <span className={cx('total-number')}>5</span>
            </div>
            <div className={cx('button-item')} onClick={handleSaved}>
                <button>{isSaved ? <SavedIcon /> : <SaveIcon />}</button>
                <span className={cx('total-number')}>3</span>
            </div>
            <div className={cx('button-item')}>
                <button>
                    <ShareIcon />
                </button>
                <span className={cx('total-number')}>2</span>
            </div>
        </div>
    );
}

export default UserActions;
