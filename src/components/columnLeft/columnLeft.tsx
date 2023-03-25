
const ColumnLeft = () => {
    return (
        <div className="container">
            <div className="col-right">
                <aside>
                    <div className='card mb-4'>
                        <div className='card-body'>
                            <h4 className='card-title'>About</h4>
                            <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                        </div>
                    </div>
                </aside>

                <aside>
                    <div className='card mb-4'>
                        <div className='card-body'>
                            <h4 className='card-title'>Tags</h4>
                            <div className='list-tags'>
                                <p className='btn btn-light btn-sm mb-1'>Journey</p>
                                <p className='btn btn-light btn-sm mb-1'>Work</p>
                                <p className='btn btn-light btn-sm mb-1'>Lifestyle</p>
                                <p className='btn btn-light btn-sm mb-1'>Photograph</p>
                                <p className='btn btn-light btn-sm mb-1'>Foods & Drinks</p>
                            </div>

                        </div>
                    </div>

                    <div className='card mb-4'>
                        <div className='card-body'>
                            <h4 className='card-title'>Popular Posts</h4>
                            <div>
                                <h5 className='post-popular'>qui est esse</h5>
                                <img src="https://picsum.photos/seed/picsum/213/142" alt="a" className="post-cover-image" />
                                <p>1 year ago in Lifestyle</p>
                            </div>

                            <div>
                                <h5 className='post-popular'>ut quo aut ducimus alias</h5>
                                <img src="https://picsum.photos/seed/picsum/213/142" alt="a" className="post-cover-image" />
                                <p>2 years ago in Work</p>
                            </div>

                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default ColumnLeft