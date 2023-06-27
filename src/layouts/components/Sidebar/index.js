import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import Menu from './Menu';
import { MenuItem } from './Menu';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '../SuggestedAccounts/SuggestedAccounts';
import Footer from '../Footer';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<FontAwesomeIcon className={cx('icon')} icon={faHouse} />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FontAwesomeIcon className={cx('icon')} icon={faUserGroup} />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<FontAwesomeIcon className={cx('icon')} icon={faCompass} />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<FontAwesomeIcon className={cx('icon')} icon={faVideo} />}
                />
            </Menu>

            <SuggestedAccounts title="Suggested accounts" />

            <Footer />
        </aside>
    );
}

export default Sidebar;
