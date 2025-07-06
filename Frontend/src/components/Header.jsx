
import bg from '../assets/bg.jpg';

const Header = () => {
  return (
    <div className="h-[400px] flex justify-center items-center px-4 pt-10">
      <div
        className="h-[400px] w-3/4 bg-no-repeat bg-center bg-cover rounded-2xl flex items-center justify-end pr-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-right text-white p-6 max-w-2xl">
          <h1 className="text-5xl font-bold mb-8">Welcome to <span className='text-amber-600'>QuickBite!</span></h1>

          <p className="mb-8 text-sm/6.5">
            Savor our mouthwatering dishes crafted with fresh ingredients, perfect for sharing memorable moments with your friends and family. Experience a delightful blend of flavors and refreshing beverages all in one place.
          </p>

          <button className="bg-amber-600 cursor-pointer hover:bg-amber-500 text-white px-4 py-2 rounded-full text-sm">
            View our Menu
          </button>

        </div>
      </div>
    </div>
  )
}

export default Header