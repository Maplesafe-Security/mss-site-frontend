import React, {useState,useEffect} from 'react';
import { Col, Container, Form, Row,Input, Alert, UncontrolledAlert  } from 'reactstrap';
import Recaptcha from './Recaptcha';
const Contact = (props) => {
    console.log("In contact. plan is", props.plan)
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        number:''

    });
    const [submitted, setSubmitted] = useState(false);
    const [captchaError,setCaptchaError] = useState(false);

    useEffect(()=>{
        setFormData({
            ...formData,
            "message": props.plan == "" ? "": props.plan ,
        })
    },[props.plan])
    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleCaptchaChange = (value) => {
        setIsCaptchaVerified(true);
  };
    // const handleCaptchaChange = (value) => {
    //     console.log(value)
    //     // Assuming a threshold of 0.5 for simplicity
    //     const threshold = 0.5;
    
    //     // Check if the reCAPTCHA score meets the threshold
    //     if (value && value.action === 'submit' && value.score >= threshold) {
    //       setIsCaptchaVerified(true);
    //     } else {
    //       setIsCaptchaVerified(false);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isCaptchaVerified) {

            // Fetch API to send POST request
            try {

                const ipResponse = await fetch("https://api.ipify.org/?format=json")
                const ipData = await ipResponse.json()

                // https://maplesafe-security-default-rtdb.firebaseio.com/
                const response = await fetch("https://maplesafe-security-default-rtdb.firebaseio.com/posts.json", 
                { 
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ "email": formData.email, "ip": ipData["ip"], "name":formData.name, "message":formData.message, "number":formData.number}),
                }
            )

            console.log(formData["email"]," -\n\n\n- ",ipData)

                if (response.ok) {
                    setSubmitted(true)
                console.log('Form data submitted successfully!');
                // You can add further logic here based on the API response
                } else {
                console.error('Failed to submit form data');
                }
            } catch (error) {
                console.error('Error during form submission:', error);
            }
    } else {
        setCaptchaError(true);

        // alert('Please verify that you are not a robot.');
      }
    };


    return (
        <React.Fragment>
            <section className="section" id="contact">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">Get In Touch  </h3>
                                <p className="text-muted mb-4 ff-secondary">If you have any inquiries or would like to leave a message, please use the form below.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                    <Col lg={4} >
                        <div>
                            <div className="mt-4">
                                <h5 className="fs-13 text-muted text-uppercase">Office Address 📍</h5>
                                <div className="ff-secondary fw-semibold">51 Wolseley St, Toronto,<br /> ON M5T 1A4</div>
                            </div>
                            {/* Additional content */}
                        </div>
                    </Col>
                    {submitted ? (
                        <Col lg={8}>


        <Alert color="success">
          Thank you for submitting the form!
        </Alert>
        </Col>

      ):

                        <Col lg={8}>
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-4">
                                                <label htmlFor="name" className="form-label fs-13">Name</label>
                                                <input name="name" id="name" type="text"
                                                    className="form-control bg-light border-light" placeholder="Your name*" 
                                                    value={formData.name}
                                                    onChange={handleInputChange}/>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-4">
                                                <label htmlFor="email" className="form-label fs-13">Email</label>
                                                <input name="email" id="email" type="email"
                                                    className="form-control bg-light border-light" placeholder="Your email*" 
                                                    value={formData.email}
                                                    onChange={handleInputChange}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col lg={6}>
                                            <div className="mb-4">
                                                <label htmlFor="number" className="form-label fs-13">Phone Number (+1)</label>
                                                <input name="number" id="number" type="tel"
                                                    className="form-control bg-light border-light" placeholder="123-456-7890*" 
                                                    value={formData.number}
                                                    onChange={handleInputChange}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    {/* <Row>
                                        <Col lg={12}>
                                            <div className="mb-4">
                                                <label htmlFor="subject" className="form-label fs-13">Subject</label>
                                                <input type="text" className="form-control bg-light border-light" id="subject"
                                                    name="subject" placeholder="Your Subject.." />
                                            </div>
                                        </Col>
                                    </Row> */}
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <label htmlFor="comments" className="form-label fs-13">Message</label>
                                                {/* <textarea name="comments" id="comments" rows="3"
                                                    className="form-control bg-light border-light"
                                                    placeholder="Your message..."
                                                    value={formData.message}
                                                    onChange={handleInputChange}></textarea> */}
                                                     <Input
          type="textarea"
          name="message"
          rows="5"
          id="message"
          placeholder={"Your message"}
          value={formData.message}
          onChange={handleInputChange}
        />

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                                   {/* reCAPTCHA component */}
      <Recaptcha onChange={handleCaptchaChange} />
                                        </Col>
                                        <Col lg={6} className="text-end">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary"
                                                value="Send Message" />
                                        </Col>
                                    
                                    </Row>
                                    { captchaError ? 
                                        (<Row className="mt-4">
                                        <Col>
                                        <UncontrolledAlert toggle={()=>{ setCaptchaError(false);}}color="danger">
          Please Submit the captcha to verify that you are not a robot!
        </UncontrolledAlert>
                                        </Col>
                                    </Row>) : <></>


                                    }
                                
                                </Form>
                            </div>
                        </Col>
}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Contact;