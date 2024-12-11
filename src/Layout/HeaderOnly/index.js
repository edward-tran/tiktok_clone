import PropTypes from 'prop-types';
import Header from '~/layout/components/Header';

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
