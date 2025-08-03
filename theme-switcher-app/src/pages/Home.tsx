import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Card from '../components/Card';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`min-h-screen pt-16 ${theme} flex items-center justify-center`}>
      <div className="main-content">
        <div className={`flex flex-col items-center ${theme === 'theme3' ? 'w-full max-w-5xl' : 'w-full max-w-5xl'}`}>
          <h2 className="title text-center">Welcome to Our Store</h2>
          <div className="paragraph max-w-2xl text-center">
            <p className="mb-6">
              Explore our curated selection of high-quality products. Switch themes using the dropdown above to experience our clean designs!
            </p>
          </div>
          {loading ? (
            <p className="text-lg">Loading products...</p>
          ) : (
            <div className="list">
              {products.map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;