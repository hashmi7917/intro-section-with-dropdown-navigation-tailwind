import ReactDOM from 'react-dom';
import './App.css';

// importing image assets
import Logo from './assets/images/logo.svg';
import HambMenu from './assets/images/icon-menu.svg';
import Closemenu from './assets/images/icon-close-menu.svg';
import HeroMobile from './assets/images/image-hero-mobile.png';
import HeroDesktop from './assets/images/image-hero-desktop.png';
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
    <div className="max-w-md mx-auto pb-20 md:max-w-2xl xl:max-w-full bg-neutral-AlmostWhite">
      <div className="flex flex-col justify-evenly items-center">
        <nav className="w-full flex justify-between items-center py-4 px-4">
          <div className="hidden w-1/2 max-md:w-full xl:flex justify-around max-md:justify-between max-lg:pt-4">
            <img src={Logo} alt="logo" />
            <ul className="hidden w-1/2 xl:flex justify-between items-start  transition-all ease-in-out duration-75">
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Company</li>
              <li className="cursor-pointer">Careers</li>
              <li className="cursor-pointer">About</li>
            </ul>
          </div>
          <div className="hidden xl:block pr-20">
            <button className="text-sm py-2 px-10 self-end" type="submit">
              Login
            </button>
            <button
              className="text-sm hover:ring-0 ring-2 rounded-xl ring-neutral-MediumGray py-2 px-6"
              type="submit"
            >
              Register
            </button>
          </div>
          <img className="xl:hidden" src={Logo} alt="logo" />
          <img
            onClick={openNav}
            className="hidden max-xl:block cursor-pointer"
            src={HambMenu}
            alt="mobile menu"
          />
          <div
            id="sidemenu"
            className="hidden w-60 max-lg:hidden max-xl:hidden bg-white absolute top-0 right-0 px-10 h-screen shadow-xl"
          >
            <div className="flex flex-col py-20 text-neutral-MediumGray">
              <img
                className="w-5 self-end fixed right-5 top-10 transition-all ease-in-out"
                onClick={closeNav}
                src={Closemenu}
                alt="close menu"
              />

              <ul className="w-full flex flex-col justify-around items-start mx-auto h-48 transition-all ease-in-out duration-75 pb-6">
                <li className="cursor-pointer">Features</li>
                <li className="cursor-pointer">Company</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">About</li>
              </ul>
              <button className="text-sm py-2 px-10 mb-2" type="button">
                Login
              </button>
              <button
                className="text-sm hover:ring-0 ring-2 rounded-xl ring-neutral-MediumGray py-2 px-10 mb-2"
                type="button"
              >
                Register
              </button>
            </div>
          </div>
        </nav>
        <header className="flex flex-col xl:flex-row-reverse items-center py-2 xl:w-10/12 xl:px-20 xl:pt-20">
          <img className="xl:hidden" src={HeroMobile} alt="hero mobile" />
          <img
            className="hidden xl:block max-w-md"
            src={HeroDesktop}
            alt="hero desktop"
          />
          <div className="xl:w-8/12 flex flex-col justify-around items-center  xl:items-start xl:pb-10 pt-10 pb-10">
            <h1 className="hidden xl:block text-4xl font-medium text-neutral-AlmostBlack xl:text-6xl xl:w-11/12">
              <span>Make</span>
              <br /> remote work
            </h1>
            <h1 className="xl:hidden text-4xl font-medium text-neutral-AlmostBlack xl:text-6xl xl:w-11/12">
              Make remote work
            </h1>
            <p className="text-center xl:text-left text-sm text-neutral-MediumGray leading-relaxed mx-auto w-10/12 px-2 xl:mx-0 xl:w-7/12 xl:pr-4 xl:py-8 py-4">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <div className="py-6">
              <button
                type="button"
                className="text-neutral-AlmostWhite bg-neutral-AlmostBlack hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-normal rounded-xl text-sm px-6 py-2.5 dark:bg-neutral-AlmostBlack dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Learn more
              </button>
            </div>
            <div className="w-full flex justify-around items-center  xl:justify-between xl:w-8/12 pt-20 align-bottom xl:-mb-24">
              <img className="h-3" src={Databiz} alt="databiz" />
              <img className="h-5" src={Audiophile} alt="audiophile" />
              <img className="h-3" src={Meet} alt="meet" />
              <img className="h-5" src={Maker} alt="maker" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
export default App;
