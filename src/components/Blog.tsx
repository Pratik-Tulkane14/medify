import blogs from "../constants/blogs";
const Blog: React.FC = () => {
    return (
        <div className="blog-wrapper">
            <p className="blog-main-heading">Blog & News</p>
            <p className="blog-heading">Read Our Latest News</p>
            <div className="blogs">
                {blogs.map((item, index) => {
                    return (
                        <div key={index} className="blog-card">
                            <img src={item.picture} alt="picture" />
                            <div className="cards-wrapper">

                                <div className="details">
                                    <p>{item.topic}</p>
                                    <p>{item.date}</p>
                                </div>
                                <p className="blog-title">{item.title}</p>
                                <div className="blog-details">
                                    <img src={item.profile} alt="author image" />
                                    <p className="blog-author">{item.author}</p>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog