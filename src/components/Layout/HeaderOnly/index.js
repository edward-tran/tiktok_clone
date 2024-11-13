import Header from '~/components/Layout/components/Header';

function HeaderOnLy({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnLy;
