import './header.module.css'

const Header = () => {
    return (
        <div>
            <header className="header">
                <nav className='navbar navbar-expand-md navbar-light absolute-top'>
                    <div className='container'>
                        <div className='collapse navbar-collapse order-3 order-md-2'>
                            <ul className='navbar-nav me-auto'>
                                <li className='list nav-item dropdown active'>
                                    <a className='nav-link dropdown-toggle'>Home</a>
                                </li>

                                <li className='list nav-item dropdown'>
                                    <a className='nav-link dropdown-toggle'>Posts</a>
                                </li>

                                <li className='list nav-item dropdown'>
                                    <a className='nav-link dropdown-toggle'>Components</a>
                                </li>
                            </ul>
                        </div>

                        <a className='navbar-brand order-1 order-md-3'>Alfabøt</a>

                        <div className='collapse navbar-collapse order-4 order-md-4 navbar-right'>
                            <ul className='navbar-nav ms-auto'>
                                <li className='list nav-item'>
                                    <a className='nav-link'>About</a>
                                </li>

                                <li className='list nav-item'>
                                    <a className='nav-link'>Contact</a>
                                </li>
                            </ul>

                            <form className='form form-inline'>
                                <input className="input search js-search form-control form-control-rounded me-sm-2" placeholder="Search.." />
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header