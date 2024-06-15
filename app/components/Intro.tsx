import Image from 'next/image';

const Intro = () => {
    return (
      <div className="flex justify-around pt-10 pb-10 intro">
        <div className="flex flex-col">
          <h1 className="text-4xl font-medium p-2 text-teal-400">Hi there!</h1>
          <p className="text-2xl p-2">I am <span className="text-white">Sanskriti</span></p>
          <p className="text-xl p-2">Thanks for visiting my website</p>
          <p className="text-teal-500 beat">&#10084;</p>
        </div>
        <div className="rounded-md h-40 w-40">
          <Image className="rounded-full" src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=ais_user" alt="sanskriti"></Image>
        </div>
      </div>
    );
  };
  
  export default Intro;
  