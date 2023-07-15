import './Header.css';
// http://themes.pixelstrap.com/multikart/front-end/furniture-2.html#
const Header = () => {
    return <header>
        <div className="top-header top-header-dark2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="header-contact">
                            <ul>
                                <li>Welcome to Our store Multikart</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123 - 456 - 7890</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end top-header-right">
                        <ul className="header-dropdown">
                            <li className="onhover-dropdown mobile-account"> <i className="fa fa-user" aria-hidden="true"></i>
                                My Account
                                <ul className="onhover-show-div">
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">register</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="main_header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="main-menu">
                            <div className="menu-left">
                                <div className="brand-logo">
                                    <a href="index.html">
                                        <img src="http://themes.pixelstrap.com/multikart/assets/images/icon/logo/1.png" className="img-fluid blur-up lazyloaded" alt="" />
                                    </a>
                                </div>
                            </div>

                            <form className="form_search border-radius-0">
                                <input id="query search-autocomplete"
                                    type="search" placeholder="Search any Device or Gadgets..." className="nav-search nav-search-field" aria-expanded="true" />
                                <button type="button" name="nav-submit-button" class="btn-search">
                                    <i class="fa fa-search"></i>
                                </button>
                            </form>


                            <div className="menu-right pull-right">
                                <div>
                                    <div className="icon-nav">
                                        <ul>
                                            <li className="onhover-div mobile-cart">
                                                <div>
                                                    <img className="me-3" src="http://themes.pixelstrap.com/multikart/assets/images/icon/cart.png" />
                                                </div>
                                                <span class="cart_qty_cls">2</span>
                                                <ul className="show-div shopping-cart">
                                                    <li>
                                                        <div className="media">
                                                            <a href="#">
                                                                <img src="http://themes.pixelstrap.com/multikart/assets/images/fashion/product/1.jpg" />
                                                            </a>
                                                            <div className="media-body">
                                                                <a href="#">
                                                                    <h4>item name</h4>
                                                                </a>
                                                                <h4><span>1 x $ 299.00</span></h4>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="total">
                                                            <h5>subtotal : <span>$299.00</span></h5>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="buttons"><a href="cart.html" class="view-cart">view
                                                            cart</a> <a href="#" class="checkout">checkout</a></div>
                                                    </li>

                                                </ul>

                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>


    </header>
}

export {
    Header
}