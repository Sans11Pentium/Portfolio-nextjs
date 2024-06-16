import Image from "next/image";
 
const Intern = () => {
    return (
        <div className="intern flex justify-around mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Web development Intern</h2>
                <p>Solid State Physics Laboratory</p>
                <p>Built Personel Information System for office staff</p>
                <p>May - June 2024</p>
              </div>
              <figure>
                <Image 
                  src="https://data1.ibtimes.co.in/en/full/727208/drdo.png?h\u003d450\u0026l\u003d50\u0026t\u003d40" 
                  alt="Shoes"
                  width={500}  
                  height={400}  />
              </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">MERN TA</h2>
                <p>Apna College</p>
                <p>Debugged MERN related projects of batch students</p>
                <p>Feb - April 2024</p>
              </div>
              <figure>
                <Image 
                  src="https://cdn-1.webcatalog.io/catalog/apna-college/apna-college-social-preview.png?v=1714776932959" 
                  alt="Shoes" 
                  width={500}  
                  height={400} />
              </figure>
            </div>
        </div>
    );
}

export default Intern;