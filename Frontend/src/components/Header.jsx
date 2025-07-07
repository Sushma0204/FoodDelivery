import bg from '../assets/bg.jpg';

const Header = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] flex justify-center items-center px-2 pt-5 sm:px-4">
      <div
        className="h-full w-11/12 sm:w-3/4 mx-auto bg-no-repeat bg-center bg-cover rounded-xl sm:rounded-2xl flex items-center justify-center sm:justify-end"
        style={{ backgroundImage: `url(${bg})` }}
      >

        <div className="w-full sm:w-3/4 text-center sm:text-right text-white p-2 sm:p-6 max-w-full">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 break-words leading-tight">
            Welcome to <span className='text-amber-600'>QuickBite!</span>
          </h1>

          <p className="mb-4 sm:mb-8 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose">
            Savor our mouthwatering dishes crafted with fresh ingredients, perfect for sharing memorable moments with your friends and family. Experience a delightful blend of flavors and refreshing beverages all in one place.
          </p>

          <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm">
            View our Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
