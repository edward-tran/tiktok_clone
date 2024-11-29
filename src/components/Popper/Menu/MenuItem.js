import Button from '~/components/Button';
function MenuItem({ item, onClick }) {
    return (
        <li onClick={onClick}>
            <span>{item.icon}</span>
            <Button to={item.to}>{item.title}</Button>
        </li>
    );
}

export default MenuItem;
