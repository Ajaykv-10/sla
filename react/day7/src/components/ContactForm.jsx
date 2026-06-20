import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);

    // Clear the form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div style={{ width: "400px", margin: "30px auto" }}>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <br />
        <br />

        <textarea
          name="message"
          placeholder="Enter Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Submitted Details</h2>

          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Mobile:</strong> {submittedData.mobile}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;