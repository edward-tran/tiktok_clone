import PropTypes from 'prop-types';
import Header from '~/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};
export default HeaderOnly;
