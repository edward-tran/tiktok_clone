import Button from '~/components/Button';
function MenuItem({ item, onClick }) {
    return (
        <div
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={onClick}
        >
            <span style={{ minWidth: '20px' }}>{item.icon}</span>
            <Button to={item.to}>{item.title}</Button>
        </div>
    );
}

export default MenuItem;
