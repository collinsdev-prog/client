import FAQs from '../../components/FAQs';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
// import Footer from '../../components/footer'
import Testimonials from '../../components/Testimonials';
import Values from '../../components/Values';
import './home.css';

const Home = () => {
  return (
    <>
   <MainHeader/>
   <Programs/>
   <Values/>
   {/* <FAQs/> */}
   <Testimonials/>
   {/* <Footer/> */}
   </>
  );
};

export default Home;

