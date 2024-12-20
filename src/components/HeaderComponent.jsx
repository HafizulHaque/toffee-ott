import ToffeeLogo from '/src/assets/toffee-logo.svg';

const HeaderComponent = () => {
  return (
    <header className='h-[100px] w-full sticky top-0 left-0 bg-gradient-to-r from-background to-black shadow-header'>
      <div className="h-full w-full pe-16 py-8 flex justify-between items-center">
        <h1 className='text-2xl font-bold'>Movie</h1>
        <img src={ToffeeLogo} alt="toffee logo" height={50} width={50}/>
      </div>
    </header>
  )
}

export default HeaderComponent
