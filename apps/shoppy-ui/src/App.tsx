import './App.css';
import LatestProducts from './components/LatestProducts';
import Cart from './features/cart/Cart';

const App = () => {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              shoppy!
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="bg-white">
              <div className="lg:max-w-7xl lg:px-8 max-w-2xl mx-auto py-8 sm:px-6">
                <LatestProducts></LatestProducts>
                <Cart></Cart>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
