import React,{useEffect} from 'react'
import './Contact.css'
import com from '../../Assets/images/communication.png'
import map from '../../Assets/images/map.png'
import phone from '../../Assets/images/phone.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cd979cca-6df4-473c-8162-781854c7e2a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



     useEffect(() => {
          document.body.classList.add('contact-bg');
          return () => {
            document.body.classList.remove('contact-bg');
          };
        }, []);
  return (
    <div className='contact'>
    <div className="contact-colm">
        <h3>Address</h3>
      
        <ul>
                    <li><img src={com} alt=""/>sivatsm0210@gmail.com</li>
                    <li><img src={phone} alt=""/>7010422586</li>
                    <li><img src={map} alt=""/>Tiruvengadam street,west tambaram,Chennai</li>
                </ul>
    </div>
    <div className='msg-card'>
       <h1>Send us any message</h1>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tell" name='phone' placeholder='Enter your Mobile Number' required/>
            <label>Address</label>
            <input type='text' name='address' placeholder='Enter your Address' required />
            <label>Write a message</label>
            <input type="text" name='message' placeholder='Write a own message' required/>
            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>

    </div>

</div>

  )
}

export default Contact
