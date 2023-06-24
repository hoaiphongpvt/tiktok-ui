import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style)

const defaultFn = () => {}

function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items}])
    const current = history[history.length - 1]

    const renderItem = () => {
        
        return current.data.map((item, index) => {

            const isParent = !!item.children
            return <MenuItem key={index} data= {item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }}/>
        })
    }

    return ( 
        <Tippy 
            interactive={true}
            placement='bottom-end'
            delay={[0, 700]}
            render={attrs => (
            
                <div className={cx('content')} tabIndex="-1"  {...attrs}>
                        <PopperWrapper>
                            {history.length > 1 && <Header title='Language' onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length - 1))
                            }}/>}
                            {renderItem()}
                        </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory(pre => pre.slice(0, 1))
            }}
        >
           {children}
        </Tippy>
     );
}

export default Menu;