const Newsletter = () => {
    return (
        <div>
            <div className='newsletter'>
                <h3 className='title-newsletter'>Subscribe to Newsletter</h3>
                <p className="text-muted">Join our monthly newsletter and never miss out on new stories and promotions.</p>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter