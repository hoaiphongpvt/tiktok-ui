import classNames from "classnames/bind";
import style from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(style)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}> 
            <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/240cbf5c34172011e3b3fde82814c900~c5_100x100.jpeg?x-expires=1687672800&x-signature=IoDETGjJIlA3Nmw6qusROsNVyMs%3D"></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle }/>
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;