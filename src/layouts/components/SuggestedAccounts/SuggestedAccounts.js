import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import PropTypes from 'prop-types';
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles)

function SuggestedAccounts({ title, }) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See more</p>
        </div>

     );
}

SuggestedAccounts.prototype = {
    lable: PropTypes.string.isRequired
}

export default SuggestedAccounts;