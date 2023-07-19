import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import CloseButton from "./CloseButton";
import Input from "./Input";
import ReactDOM from "react-dom";
import getConfig from 'next/config'

interface ModalFormProps {
  handleClose: () => void;
}

const ModalForm = (props: ModalFormProps) => {
  const captchaRef = useRef<any>(null);
  const captchaKey = getConfig().publicRuntimeConfig.REACT_APP_SITE_KEY;

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    try {

      const formData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'Hello, this is a test message.'
      };
      
      const url = 'http://localhost:3001/send-email';
      
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' // Set mode to 'cors' to allow access to the response
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response data here
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      // const response = await fetch('https://localhost:3001/send-email', {
      //   method: 'POST',
      //   mode:"cors",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });

      // if (response.ok) {
      //   console.log('Email sent successfully');
      //   // Add any success message or further actions here
      // } else {
      //   console.log('Failed to send the email');
      //   // Handle the error or display an error message to the user
      // }
    } catch (error) {
      console.log('Error occurred:', error);
      // Handle the error or display an error message to the user
    }
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent | KeyboardEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      ((event instanceof KeyboardEvent && event.key === "Escape") || event.type === 'mousedown')
    ) {
      document.body.style.overflow = "auto";
      props.handleClose();
    }
  };

  const setupEventListeners = () => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleOutsideClick);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousedown", handleOutsideClick);
    document.removeEventListener("keydown", handleOutsideClick);
  };

  useEffect(() => {
    setupEventListeners();

    return () => {
      removeEventListeners();
    };
  }, [props.handleClose]);

  return (
    <>
      {ReactDOM.createPortal(<TintOverlay />, document.getElementById("tint") as Element)}
      {ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-screen h-screen flex z-20 items-center justify-center">
          <div
            className="bg-white p-7 w-96 rounded-lg max-lg:w-80"
            ref={modalRef}
          >
            <div className="relative">
              <CloseButton handleClose={props.handleClose} />
            </div>

            <p className="font-bold pb-5">
              Please fill out the form below and one of our experts will be in
              touch.
            </p>

            <form className="max-w-md text-sm" onSubmit={handleSubmit}>
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

              <div className="pb-3">
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900 h-48"
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                className="bg-blue-900 text-white font-bold py-2 px-4 rounded m-auto flex mt-2"
                type="submit"
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>,
        document.getElementById("modal") as Element
      )}
    </>
  );
};

const TintOverlay = () => {
  return <div className="absolute h-full bg-black bg-opacity-75 w-full z-10" />;
};

export default ModalForm;
