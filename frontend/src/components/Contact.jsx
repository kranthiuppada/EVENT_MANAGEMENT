import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://event-management-1-f7lq.onrender.com/api/v1/message/send",  // Updated URL to match backend route
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>BENZ-CIRCLE,VIJAYAWADA ,520010</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>Call Us: +91-8688695801</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>kranthi.uppada1234@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15302.40772086983!2d80.64390174155484!3d16.49568212260461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fabf51d8f673%3A0xabcf19782fbb3309!2sBenz%20Circle%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520010!5e0!3m2!1sen!2sin!4v1725171153696!5m2!1sen!2sin"
      style={{ border: 0, width: "100%", height: "450px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
        </div>
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>Contact Us</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              rows={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
