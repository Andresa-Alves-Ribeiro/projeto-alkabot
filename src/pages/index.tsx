import ColumnLeft from '@/components/columnLeft/columnRight';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import HomePosts from '@/pages/posts/homePosts';
import Newsletter from '@/components/newsletter/newsletter';
import "../styles/Home.module.css"

const Posts = () => {
  return (
    <div className="container">
      <Header />

      <HomePosts />

      <ColumnLeft />

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Posts;
