const Navigation = () => (
  <div className="bg-white border-bottom">
    <div className="container">
      <nav className="navigation flex-between">
        <div className="left-nav">
          <h1 className="title">Little Princess BookStore</h1>
          <h2 className="nav-item">Books</h2>
          <h2 className="nav-item categories">Categories</h2>
        </div>
        <div className="right-nav">
          <img src="user_icon.png" alt="user" className="user-icon" />
        </div>
      </nav>
    </div>
  </div>
);

export default Navigation;
