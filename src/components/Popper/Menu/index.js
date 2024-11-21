import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items }) {
    const renderItems = () => {
        const className = cx('menu-item');
        return items.map((item, index) => (
            <MenuItem className={className} item={item} key={index} />
        ));
    };
    return (
        <Tippy
            interactive
            // visible
            placement="bottom-end"
            offset={[15, 74]}
            render={(attrs) => (
                <div className={cx('menu-item')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
