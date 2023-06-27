import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-wrapper')}>
                <p className={cx('footer-item')}>About</p>
                <p className={cx('footer-item')}>Newsroom</p>
                <p className={cx('footer-item')}>Contact</p>
                <p className={cx('footer-item')}>Carrers</p>
                <p className={cx('footer-item')}>ByteDance</p>
            </div>
            <div className={cx('footer-wrapper')}>
                <p className={cx('footer-item')}>TikTok for Good</p>
                <p className={cx('footer-item')}>Advertise</p>
                <p className={cx('footer-item')}>Developers</p>
                <p className={cx('footer-item')}>Transparency</p>
                <p className={cx('footer-item')}>TikTok Rewards</p>
                <p className={cx('footer-item')}>TikTok Embeds</p>
            </div>
            <div className={cx('footer-wrapper')}>
                <p className={cx('footer-item')}>Help</p>
                <p className={cx('footer-item')}>Safety</p>
                <p className={cx('footer-item')}>Terms</p>
                <p className={cx('footer-item')}>Privacy</p>
                <p className={cx('footer-item')}>Creator Portal</p>
                <p className={cx('footer-item')}>Community Guidelines</p>
            </div>
            <div className="footer-wrapper">
                <p className={cx('footer-item')}>© 2023 TikTok</p>
            </div>
        </div>
    );
}

export default Footer;
