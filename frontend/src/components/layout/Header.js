// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { logout } from "../../actions/auth";

// export class Header extends Component {
//   static propTypes = {
//     auth: PropTypes.object.isRequired,
//     logout: PropTypes.func.isRequired,
//   };
//   render() {
//     const { isAuthenticated, user } = this.props.auth;

//     const authLinks = (
//       <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
//         <span className="navbar-text mr-3">
//           <strong>{user ? `Добро пожаловать, ${user.username}` : ""}</strong>
//         </span>
//         <li className="nav-item">
//           <button
//             onClick={this.props.logout}
//             className="nav-link btn btn-info btn-sm text-light"
//           >
//             Выйти
//           </button>
//         </li>
//       </ul>
//     );

//     const guestLinks = (
//       <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
//         <li className="nav-item">
//           <Link to="/register" className="nav-link">
//             Регистрация
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/login" className="nav-link">
//             Войти
//           </Link>
//         </li>
//       </ul>
//     );
//     return (
//       <nav className="navbar navbar-expand-sm navbar-light bg-light">
//         <div className="container">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <a className="navbar-brand" href="">
//               Sabat
//             </a>
//             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//               <li className="nav-item active">
//                 <a className="nav-link" href="">
//                   Главное <span className="sr-only">(current)</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <Link to="/form" className="nav-link">
//                   Добавить объявление
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/my_listings" className="nav-link">
//                   Мои объявления
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           {isAuthenticated ? authLinks : guestLinks}
//         </div>
//       </nav>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logout })(Header);

import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-blue bg-white sticky-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="" className="logo" alt=""></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item active mr-3">
                <a className="nav-link" href="index.html">
                  Башкы бет
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="about.html">
                  Курстар
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="listings.html">
                  Иш-чаралар
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3">
                <a className="nav-link" href="register.html">
                  <i className="fa fa-user-plus"> </i> Катталуу
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="login.html">
                  <i className="fa fa-sign-in"> </i>
                  Кирүү
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
