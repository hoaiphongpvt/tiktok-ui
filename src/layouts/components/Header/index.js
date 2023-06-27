import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Header.module.scss'
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faLanguage, faKeyboard, faCoins, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faMessage, faUser, faBookmark } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css'; // optional
import config from '~/config/'

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';

const cx = classNames.bind(style)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'eng',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'spa',
                    title: 'Spanish'
                },
                {
                    type: 'language',
                    code: 'kor',
                    title: 'Korean'
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: 'Japanese'
                },
                {
                    type: 'language',
                    code: 'tha',
                    title: 'Thai'
                },
                {
                    type: 'language',
                    code: 'fli',
                    title: 'Filipino'
                },
                {
                    type: 'language',
                    code: 'fre',
                    title: 'French'
                },
                {
                    type: 'language',
                    code: 'rus',
                    title: 'Russian'
                }
            ]
        }
    }, 
    {
        icon: <FontAwesomeIcon icon={faMessage} />,
        title: 'Feedback and help',
        to: '/feedback'
    }, 
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]

function Header() {


    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language':
                console.log(menuItem)
                break
            default:
                throw new Error("Invalid")
        }
    }

    const currentUser = true

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favarites',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
            </div>
            
            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Button withIcon>
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Upload</span>
                        </Button>
                        <Tippy delay={200} content="Message" placement='bottom'>
                            <button className={cx('action-item')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </Tippy>
                        
                        <Tippy delay={200} content="Inbox">
                            <button className={cx('action-item')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button withIcon>
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Upload</span>
                        </Button>
                        <Button primary>Log in</Button>
                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <img className={cx('user-avtar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e4d910d90c976bb93de6330ffa6b8342.jpeg?x-expires=1687759200&x-signature=tN5SsU5oMxya3OGiLjO1WX3l%2Bpo%3D" alt='Nguyen Hoai Phong'/>
                    ) : (
                        <>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />  
                            </button>
                        </>
                    )}
                    
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;