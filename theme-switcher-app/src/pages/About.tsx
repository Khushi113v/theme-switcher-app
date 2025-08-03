import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen pt-16 ${theme} flex items-center justify-center`}>
      <div className="main-content">
        <div className="flex flex-col items-center w-full max-w-5xl">
          <h2 className="title text-center">About Me</h2>
          <div className="paragraph max-w-2xl text-center">
            <p className="mb-6">
              I’m a Web Developer with 2 years of experience in HTML5, CSS3, JavaScript (ES6+), React.js, and PHP, building responsive, user-friendly websites for e-commerce and service industries. At Web Temple, Sirsa, Haryana.
            </p>
            <p className="mb-6">
              I’ve developed 50+ websites, optimized performance by 70%, and collaborated with teams to deliver high-quality solutions. Passionate about clean code and modern web technologies, I’m excited to create impactful digital experiences.
            </p>
            {/* <p>
              At our core, we value sustainability, transparency, and community engagement. We’re committed to making a positive impact, whether through eco-friendly practices or supporting local initiatives.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;