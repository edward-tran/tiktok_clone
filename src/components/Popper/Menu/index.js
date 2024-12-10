import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFunction = {};

function Menu({
    children,
    items = [],
    hideOnClick = false,
    onChange = defaultFunction,
    ...passProps
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <li key={index} className={cx('menu-item')}>
                    <MenuItem
                        item={item}
                        key={index}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else {
                                onChange(item);
                            }
                        }}
                    />
                </li>
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-item')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {history.length > 1 && (
                    <Header title={current.title} onBack={handleBack} />
                )}
                <ul className={cx('menu-body')}>{renderItems()}</ul>
            </PopperWrapper>
        </div>
    );
    const backToParentMenu = () => setHistory((prev) => prev.slice(0, 1));
    return (
        <Tippy
            {...passProps}
            interactive
            delay={[0, 300]}
            // visible
            offset={[12, 8]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={backToParentMenu}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
