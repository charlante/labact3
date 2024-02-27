function Header() {
    return (
      <header
        id="section-header"
        className="Header Header--center Header--initialized"
        data-section-id="header"
        data-section-type="header"
        data-section-settings={{
          navigationStyle: "center",
          hasTransparentHeader: false,
          isSticky: true,
        }}
        role="banner"
      >
        <div className="Header__Wrapper">
        <ul className="nav-links">
        <li className="nav-items">
          <a href="#">APPAREL</a>
        </li>
        <li className="nav-items">
          <a href="#">MUSIC</a>
        </li>
        <li className="nav-items">
          <a href="#">COLLECTIONS</a>
        </li>
        <li className="nav-items">
          <a href="#">ACCESSORIES</a>
        </li>
      </ul>

          <div className="Header__FlexItem">
            <a href="/" className="Header__LogoLink">
              <div className="Header__Logo">
                <img
                  className="Header__LogoImage Header__LogoImage--primary"
                  src="/photos/bp_logo.png"
                  width="245"
                  alt="BlackPink Official Website"
                />
              </div>
            </a>
          </div>
          <div className="Header__FlexItem Header__FlexItem--fill">
            <form
              action="/"
              method="get"
              className="Header__SearchBar"
              role="search"
            >
              <button type="submit" aria-label="Search">
                <img
                  src="/photos/search-icon.png"
                  alt="Search Icon"
                  width="16px"
                />
              </button>
              <input
                type="search"
                name="q"
                value=""
                autoComplete="off"
                autoCorrect="off"
                aria-label="Search our store"
                placeholder="Search our store"
              />
              <input type="hidden" name="type" value="product" />
            </form>
            <div className="container"></div>
          </div>
          <div className="Header__FlexItem Header__FlexItem--fill">
            <button
              className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-desk"
              aria-expanded="false"
              data-action="open-drawer"
              data-drawer-id="sidebar-menu"
              aria-label="Open navigation"
              buttonWithMargin
            >
              {/* cart icon */}
              <img src="/photos/cart.png" alt="Bag Icon" width="30px" />
            </button>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  