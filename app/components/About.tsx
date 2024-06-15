const About = () => {
    return (
      <div id="about" className="about mt-20">
        <div className="resume flex flex-col items-center">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://www.myperfectresume.com/wp-content/uploads/2022/09/interest.svg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">My latest Resume</h2>
              <p>Any feedbacks would be highly appreciated!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">See Now<span className="loading loading-ring loading-md"></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  