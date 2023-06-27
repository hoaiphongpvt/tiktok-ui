import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss'
import Header from "~/layouts/components/Header";
import Sidebar from "~/layouts/components/Sidebar";

const cx = classNames.bind(style)

function DefaultLayout({ children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;