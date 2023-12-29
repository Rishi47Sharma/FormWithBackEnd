import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
function App() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("Form submitted");

    // Basic form validation
    if (!username.trim()) {
      console.log("Name is required");
      alert("All fields are required");
      return;
    }

    try {
      // If validations pass, you can proceed with the form submission
      const response = await axios.post("/api/register", {
        username,
        email,
        number,
        address,
      });
      if (response.status === 200) {
        alert("Form submitted successfully!");
      } else {
        alert("There was an error submitting the form.");
      }
      console.log("Form submitted:", response.data);
    } catch (error) {
      console.error("Error submitting the form:", error.message);
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center p-12 ">
        <div className=" formbold-form-wrapper mx-auto  w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white">
          <div className="flex items-center justify-between rounded-t-lg bg-[#6A64F1] py-4 px-9">
            <h3 className="text-xl font-bold text-white">Registeration Form</h3>
          </div>
          <form onSubmit={handleSubmit} className="py-6 px-9">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Your Name
              </label>
              <input
                value={username}
                onChange={(ev) => setUserName(ev.target.value)}
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
                name="email"
                required
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="number"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                value={number}
                onChange={(ev) => setNumber(ev.target.value)}
                type="tel"
                name="number"
                id="number"
                placeholder="12345-67890"
                pattern="[0-9]{5}-[0-9]{5}"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Address
              </label>
              <textarea
                value={address}
                onChange={(ev) => setAddress(ev.target.value)}
                rows="4"
                name="Address"
                required
                id="addres"
                placeholder="Enter your Address"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className=" w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
