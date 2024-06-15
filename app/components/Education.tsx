import Image from 'next/image';

const Education = () => {
    return (
      <div className="education">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><Image src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/09/12/Pictures/_fa7b4cb0-d521-11e9-98d7-43b78744c7ea.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <div className="text-lg font-black">Class 10</div>
                  <time className="font-mono italic">2019 - 2020</time>
                  <p>St. Mark&apos;s World School</p>
                  <p>94.8%</p>
                </div>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><Image src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/09/12/Pictures/_fa7b4cb0-d521-11e9-98d7-43b78744c7ea.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                    <div className="text-lg font-black">Class 12</div>
                    <time className="font-mono italic">2021 - 2022</time>
                    <p>St. Mark&apos;s World School</p>
                    <p>97%</p>
                    </div>
                </div>
            </div>
            <hr className="bg-primary" />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><Image src="https://qph.cf2.quoracdn.net/main-qimg-76d512d1dda6e9c6fadd11fb59a8f73d-lq" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="text-lg font-black">BTech CSE</div>
                            <time className="font-mono italic">2022 - 2026</time>
                            <p>NSUT, Dwarka, New Delhi</p>
                            <p>Sem wise CGPA</p>
                            <ul className="steps">
                            <li className="step step-primary">9.60</li>
                            <li className="step step-primary">9.00</li>
                            <li className="step step-primary">9.60</li>
                            <li className="step step-primary">9.20</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="bg-primary" />
            </li>
        </ul>
      </div>
    );
};
  
export default Education;