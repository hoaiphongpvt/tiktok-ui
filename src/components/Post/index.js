import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function Post({ user }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/07d6dd10837bce3b7b7bf09631e8b671~c5_100x100.jpeg?x-expires=1688137200&x-signature=q14W48ShmQp1sTQyYZNjxCzmCTw%3D"
                alt="avatar"
            />
            <div className={cx('main-content')}>
                <div className={cx('header')}>
                    <div className={cx('info')}>
                        <div className={cx('user-info')}>
                            <p className={cx('nickname')}>dinoedoeit2008</p>
                            <p className={cx('name')}>🔥Dino ~Edit 🎮</p>
                        </div>
                        <div className={cx('status')}>
                            <p className={cx('status-content')}>Hold me up, tie me down...</p>
                            <span className={cx('hashtag')}>#xuhuong</span>
                            <span className={cx('hashtag')}>#xuhuong</span>
                            <span className={cx('hashtag')}>#xuhuong</span>
                            <span className={cx('hashtag')}>#xuhuong</span>
                            <span className={cx('hashtag')}>#xuhuong</span>
                            <span className={cx('hashtag')}>#xuhuong</span>
                        </div>
                        <div className={cx('music')}>
                            <FontAwesomeIcon className="icon-music" icon={faMusic} />
                            <p className={cx('namesong')}>Tháng Tư Là Lời Nói Dối Của Em - Hà Anh Tuấn</p>
                        </div>
                    </div>
                    <div className={cx('btn-follow')}>
                        <Button primary outline small>
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={cx('video-content')}>
                    <div className={cx('video-wrapper')}>
                        <video className={cx('video')} controls>
                            <source src="https://youtu.be/e7sZiWf8yQw" type="video/mp4" />
                        </video>
                    </div>
                    <div className={cx('actions')}>
                        <div className={cx('action-item')}>
                            <div className={cx('action-icon-wrapper')}>
                                <FontAwesomeIcon className={cx('action-item-icon')} icon={faHeart} />
                            </div>
                            <span className={cx('action-item-info')}>63.7K</span>
                        </div>
                        <div className={cx('action-item')}>
                            <div className={cx('action-icon-wrapper')}>
                                <FontAwesomeIcon className={cx('action-item-icon')} icon={faCommentDots} />
                            </div>
                            <span className={cx('action-item-info')}>380</span>
                        </div>
                        <div className={cx('action-item')}>
                            <div className={cx('action-icon-wrapper')}>
                                <FontAwesomeIcon className={cx('action-item-icon')} icon={faBookmark} />
                            </div>
                            <span className={cx('action-item-info')}>7052</span>
                        </div>
                        <div className={cx('action-item')}>
                            <div className={cx('action-icon-wrapper')}>
                                <FontAwesomeIcon className={cx('action-item-icon')} icon={faShare} />
                            </div>
                            <span className={cx('action-item-info')}>986</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
