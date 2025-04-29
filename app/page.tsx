import Navbar from '../components/navbar';
import Header from '../components/header';
import Cards from '@/components/cards';
import Benefits from '@/components/benefits';
import Footer from '@/components/footer';
export default function Home() {
  return (
    <main>
       <Navbar/>
        <Header/>
       <Cards/>
        <Benefits/>
        <Footer/>
       </main>
  );
}
