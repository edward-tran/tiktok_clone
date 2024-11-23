import Button from '~/components/Button';
function MenuItem({ item, className, onClick }) {
    return (
        <ul className={className}>
            <li onClick={onClick}>
                <span>{item.icon}</span>
                <Button to={item.to}>{item.title}</Button>
            </li>
        </ul>
    );
}

export default MenuItem;
