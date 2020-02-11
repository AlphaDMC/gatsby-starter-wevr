import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <header className="c-navbar">
      <a className="c-navbar__brand" href="/">
        <img src={"https://alphadmcfiles.blob.core.windows.net/images/blox-logo.jpg"} alt="Dashboard's Logo"></img>
      </a>
      <div className="c-navbar__title"> {siteTitle} </div>
      <nav className="c-nav" id="main-nav">
        <ul className="c-nav__list">
          <li className="c-nav__item">
            <a className="c-nav__link" href="/">Home</a>
          </li>
          <li className="c-nav__item">
            <a className="c-nav__link" href="/page-2">Page2</a>
          </li>
          <li className="c-nav__item">
            <a className="c-nav__link" href="#!">Your Ticket</a>
          </li>
        </ul>
      </nav>
      <div className="u-ml-auto">

        <div className="c-dropdown dropdown">
          <a className="c-avatar c-avatar--xsmall has-dropdown dropdown-toggle" href="#" id="dropdwonMenuAvatar"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="c-avatar__img" src="img/app-icon3.png" alt="User's Profile Picture" />
          </a>
          <div className="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="dropdwonMenuAvatar">
            <a className="c-dropdown__item dropdown-item">Logout</a>
          </div>
        </div>
      </div>
      <button className="c-nav-toggle" type="button" data-toggle="collapse" data-target="#main-nav">
        <span className="c-nav-toggle__bar"></span>
        <span className="c-nav-toggle__bar"></span>
        <span className="c-nav-toggle__bar"></span>
      </button>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
