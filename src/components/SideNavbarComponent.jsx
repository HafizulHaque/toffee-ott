import IconDrama from '/src/assets/icon-drama.svg';
import IconMovie from '/src/assets/icon-movie.svg';
import IconInfo from '/src/assets/icon-info.svg';

import { sidenavWidth } from '../constants/uiConstants';

const SideNavbarComponent = () => {
  return (
    <nav className={`fixed top-0 left-0 h-screen w-nav-normal hover:w-nav-expanded bg-sidenav-gradient-normal hover:bg-sidenav-gredient-expanded`}>
      <div className="h-full w-full px-4 flex justify-center items-center">
        <ul className='flex flex-col gap-y-8'>
          <li><img src={IconDrama} alt="drama icon" height={36} width={36}/></li>
          <li><img src={IconMovie} alt="movie icon" height={36} width={36}/></li>
          <li><img src={IconInfo} alt="info icon" height={36} width={36}/></li>
        </ul>
      </div>
    </nav>
  )
}

export default SideNavbarComponent
