function MenuItem({ item, className }) {
    return (
        <ul className={className}>
            <li>
                <span>{item.icon}</span>
                <span>{item.title}</span>
            </li>
        </ul>
    );
}

export default MenuItem;
