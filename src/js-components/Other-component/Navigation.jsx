function Menubar(props) {
  const { onClick, className } = props;

  return (
    <div className={`menu-icon ${className}`} onClick={onClick}>
      <div></div>
      <div></div>
    </div>
  );
}

export default Menubar;