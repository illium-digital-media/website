import { useState, useRef, ChangeEvent, FormEvent } from "react";
import Input from "./Input";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form className="border-l-2 border-cyan-400 p-5 bg-secondary" onSubmit={handleSubmit}>
      <Input
        value={formData.name}
        handleInputChange={handleChange}
        type={"text"}
        id={"name"}
        name={"name"}
        placeholder={"Name"}
      />
      <Input
        value={formData.email}
        handleInputChange={handleChange}
        type={"email"}
        id={"email"}
        name={"email"}
        placeholder={"Email"}
      />

      <div className="mb-4">
        <textarea
          className="w-full px-3 py-2 bg-tertiary text-white rounded focus:outline-none focus:border-blue-900 h-[150px]"
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {/* <button className="bg-orange-400 text-xs rounded font-bold uppercase text-white px-6 py-3 hover:bg-orange-400 hover:scale-105  hover:shadow-cyan-glow duration-200 focus:ring focus:outline-none"> */}

      <button className="bg-orange-400 text-sm rounded font-bold text-blue-900 px-6 py-3 text-white duration-200 hover:scale-105 hover:shadow-cyan-glow duration-200 focus:ring focus:outline-none" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
