import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
        <footer className="py-10 flex-col align-middle">
        <div className="flex justify-center">
          <div className="mr-5">
            <SocialIcon url="sanskriti.3026@gmail.com" />
          </div>
          <div className="mr-5">
            <SocialIcon url="https://www.linkedin.com/in/sanskriti-624459248/" />
          </div>
          <div className="mr-5">
            <SocialIcon url="https://github.com/Sans11Pentium" />
          </div>
          <div className="mr-5">
            <SocialIcon url="https://leetcode.com/Sanskriti31244/" />
          </div>
        </div>
        <div className="pt-12 text-center">
          Made with &#10084; by Sanskriti | Copyright | Privacy terms
        </div>
      </footer>
    );
  };
  
  export default Footer;
  