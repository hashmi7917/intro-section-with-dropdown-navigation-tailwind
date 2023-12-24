import ReactDOM from 'react-dom';
import './App.css';

// importing image assets
import Logo from './assets/images/logo.svg';
import HambMenu from './assets/images/icon-menu.svg';
import Closemenu from './assets/images/icon-close-menu.svg';
import HeroMobile from './assets/images/image-hero-mobile.png';
import Databiz from './assets/images/client-databiz.svg';
import Audiophile from './assets/images/client-audiophile.svg';
import Meet from './assets/images/client-meet.svg';
import Maker from './assets/images/client-maker.svg';

function App() {
  function openNav() {
    let sidemenu = document.getElementById('sidemenu');
    ReactDOM.findDOMNode(sidemenu).style.display = 'block';
  }
  function closeNav() {
    let sidemenu = document.getElementById('sidemenu');
    ReactDOM.findDOMNode(sidemenu).style.display = 'none';
  }

  return (
    <div className="max-w-sm mx-auto shadow-md pb-20">
      <div className="flex flex-col justify-evenly items-center">
        <nav className="w-full flex justify-between items-center py-4 px-4">
          <img src={Logo} alt="logo" />
          <img
            onClick={openNav}
            className="cursor-pointer"
            src={HambMenu}
            alt="mobile menu"
          />
          <div
            id="sidemenu"
            className="hidden bg-neutral-AlmostWhite absolute top-0 right-14 px-20 h-screen shadow-xl"
          >
            <div className="flex flex-col py-20">
              <img
                className="w-5 self-end fixed right-20 top-10 transition-all ease-in-out"
                onClick={closeNav}
                src={Closemenu}
                alt="close menu"
              />

              <ul className="w-full flex flex-col justify-around items-center mx-auto h-48 transition-all ease-in-out duration-75">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Careers</li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="flex flex-col items-center py-2">
          <img src={HeroMobile} alt="hero" />
          <div className="flex flex-col justify-around items-center h-60 pt-8">
            <h1 className="text-4xl font-medium text-neutral-AlmostBlack">
              Make remote work
            </h1>
            <p className="text-center text-sm text-neutral-MediumGray leading-relaxed mx-auto w-10/12 px-2">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button
              type="button"
              class="text-neutral-AlmostWhite bg-neutral-AlmostBlack hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-normal rounded-xl text-sm px-6 py-2.5 dark:bg-neutral-AlmostBlack dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Learn more
            </button>
          </div>
          <div className="w-full flex justify-around items-center pt-10">
            <img className="h-3" src={Databiz} alt="databiz" />
            <img className="h-5" src={Audiophile} alt="audiophile" />
            <img className="h-3" src={Meet} alt="meet" />
            <img className="h-5" src={Maker} alt="maker" />
          </div>
        </header>
      </div>
    </div>
  );
}
export default App;
