import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

interface CardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, price, image }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <h3 className="text-lg sm:text-xl font-semibold mb-3 truncate">{title}</h3>
      <div className="flex flex-col items-center">
        <div className={`image-container ${theme}`}>
          <img src={image} alt={title} className="w-32 h-32 object-contain" />
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="price-label">
            <p className="text-base sm:text-lg font-bold">${price}</p>
          </span>
          <button className="button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;