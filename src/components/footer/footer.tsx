const Footer = () => {
    return (
        <div>
            <footer className='site-footer bg-dark'>
                <div className='container'>
                    <ul className='nav justify-content-center'>
                        <li className='nav-item'>
                            <p className='nav-link'>Privacy</p>
                        </li>
                        <li className='nav-item'>
                            <p className='nav-link'> Terms</p>
                        </li>
                        <li className='nav-item'>
                            <p className='nav-link'>Feedback</p>
                        </li>
                        <li className='nav-item'>
                            <p className='nav-link'>Advertise</p>
                        </li>
                        <li className='nav-item '>
                            <p className='contact-line'>Contact</p>
                        </li>
                    </ul>
                </div>

                <div className='site-footer copy'>
                    © Alfabot 2023
                    <br></br>
                    All rights reserved
                </div>
            </footer>
        </div>
    )
}

export default Footer