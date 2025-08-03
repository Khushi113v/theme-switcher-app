import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen pt-16 ${theme} flex items-center justify-center`}>
      <div className="main-content">
        <div className={`flex flex-col items-center ${theme === 'theme3' ? 'w-full max-w-5xl' : 'w-full max-w-5xl'}`}>
          <h2 className="title text-center">Get in Touch</h2>
          <div className="paragraph max-w-2xl text-center">
            <p className="mb-6">
              I’m eager to discuss how my web development skills can contribute to your team. Reach me at:
            </p>
            <p className="mb-6">
              <strong>Email:</strong> khushiverma3052002@gmail.com<br />
              <strong>Phone:</strong> +91 93505 30281<br />
            </p>
            <p>
              {/* Follow us on social media for updates and promotions: <br /> */}
              <a href="https://www.linkedin.com/in/khushi-verma-b28159309/" target="_blank" className="underline hover:text-blue-400 transition-colors">LinkedIn</a> |  
              <a href="https://github.com/Khushi113v/" target="_blank" className="underline hover:text-blue-400 transition-colors"> Github</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;