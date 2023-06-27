import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('account-item')}>
            
            <img 
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/e98703e3679ef9d9db968b2abadbba39~c5_100x100.jpeg?x-expires=1688022000&x-signature=0kvZZRfg6KBK8FIm3irBJUUH2Dk%3D"
                atl=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>thaotaotau</strong>
                    <FontAwesomeIcon className={cx("icon-check")} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Phương Thảo</p>
            </div>  
        </div>
     );
}

AccountItem.prototype = {

}

export default AccountItem;