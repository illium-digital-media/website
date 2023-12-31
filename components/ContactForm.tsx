import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./Input";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.currentTarget; // Use currentTarget instead of target
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    }).catch((error) => alert(error));
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitted(true);
  };

  return (
    <>
      <form className="border-l-2 border-cyan-400 p-5 bg-secondary" onSubmit={handleSubmit} name="contact">
        <input type="hidden" name="form-name" value="contact" />
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
        <button className="bg-gradient-to-t from-orange-800 via-orange-700 to-orange-800 text-sm rounded px-6 py-3 text-orange-100 hover:scale-105 hover:shadow-cyan-glow duration-200 focus:ring focus:outline-none" type="submit">
          Submit
        </button>
      </form>
      {isSubmitted && <div className="bg-green-400 text-center text-green-800 p-3">
        <span className="font-bold">Thanks for contacting us!</span> We&apos;ll be in touch shortly
      </div>}
    </>

  );
};

export default ContactForm;
