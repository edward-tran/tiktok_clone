import Button from '~/components/Button';
function MenuItem({ item, className }) {
    return (
        <ul className={className}>
            <li>
                <span>{item.icon}</span>
                <Button to={item.to}>{item.title}</Button>
            </li>
        </ul>
    );
}

export default MenuItem;
