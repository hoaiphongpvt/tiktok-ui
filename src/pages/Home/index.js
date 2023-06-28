import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Post from '~/components/Post';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Home;
