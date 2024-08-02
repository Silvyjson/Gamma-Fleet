import PropTypes from "prop-types";
function Menubar(props) {
  const { onClick, className } = props;

  return (
    <div className={`menu-icon ${className}`} onClick={onClick}>
      <div></div>
      <div></div>
    </div>
  );
}

Menubar.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Menubar;