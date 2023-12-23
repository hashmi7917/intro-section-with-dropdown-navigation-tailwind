import './App.css';

import Logo from './assets/images/logo.svg';
import HambMenu from './assets/images/icon-menu.svg';
import HeroMobile from './assets/images/image-hero-mobile.png';
import Databiz from './assets/images/client-databiz.svg';
import Audiophile from './assets/images/client-audiophile.svg';
import Meet from './assets/images/client-meet.svg';
import Maker from './assets/images/client-maker.svg';

function App() {
  return (
    <div className="max-w-sm mx-auto shadow-md pb-20">
      <div className="flex flex-col justify-evenly items-center">
        <nav className="w-full flex justify-between items-center py-4 px-4">
          <img src={Logo} alt="logo" />
          <img src={HambMenu} alt="mobile menu" />
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
          <div className="w-full flex justify-around items-center pt-8">
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
