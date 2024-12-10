import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    flat,
    outline,
    invisible,
    text,
    onClick,
    children,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    const classes = cx('wrapper', {
        flat,
        outline,
        invisible,
        text,
    });
    return (
        <Component className={classes} {...props}>
            <span>{children}</span>
        </Component>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    flat: PropTypes.bool,
    outline: PropTypes.bool,
    invisible: PropTypes.bool,
    text: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};
export default Button;
