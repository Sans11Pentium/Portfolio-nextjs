import Image from 'next/image';

const Contact = () => {
    return (
        <div id="contact" className="contact card lg:card-side bg-base-100 shadow-xl my-20">
          <figure><Image className="p-4 rounded-md" src="https://img.freepik.com/free-vector/staying-touch-modern-communication-means-phone-calls-letters-emails-person-contacting-friends-customers-via-email-encouraging-feedback-vector-isolated-concept-metaphor-illustration_335657-2779.jpg" height={500} width={300} alt="Album"/></figure>
          <div className="card-body">
          <p className="text-2xl card-title">Contact me</p>
              <p>Name: Sanskriti</p>
              <p>Email: sanskriti.3026@gmail.com</p>
              <p>Phone: 9XXXXXXXXX</p>
              <p>Where: New Delhi, India-XXXXXX</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Connect with me over socials!</button>
            </div>
          </div>
        </div>
    );
  };
  
  export default Contact;
  