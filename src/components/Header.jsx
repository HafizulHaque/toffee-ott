import { useAppState } from '../hooks/useAppState';
import ToffeeLogo from '/src/assets/toffee-logo.svg';

const Header = () => {

  const { menu } = useAppState();
  return (
    <header className='h-[100px] w-full sticky top-0 left-0 z-30 bg-gradient-to-r from-background to-black shadow-header'>
      <div className="h-full w-full ps-8 pe-16 py-8 flex justify-between items-center">
        <h1 className='text-3xl font-bold'>{menu}</h1>
        <img src={ToffeeLogo} alt="toffee logo" height={50} width={50}/>
      </div>
    </header>
  )
}

export default Header
