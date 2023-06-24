import classNames from "classnames/bind";
import style from './Button.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(style)

function Button({ to, href, primary, outline, withIcon, rounded, small, large, children, disabled, className, onClick, ...passProps }) {

    let Component = 'button'
    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }


    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        withIcon,
        disabled,
        rounded,
        [className]: className
    })

    return ( 
        <Component className={classes} {...props}>
            <span>{children}</span>
        </Component>
     );
}

export default Button;