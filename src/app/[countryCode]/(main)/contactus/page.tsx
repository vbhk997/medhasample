import { Heading } from "@medusajs/ui";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg">
        <Heading level="h1" className="text-3xl mb-2 text-center">Contact Us</Heading>
        <p className="text-lg mb-6 text-center">
          We&#39;d love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </p>
        <form className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Name:</span>
            <input
              type="text"
              name="name"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Email:</span>
            <input
              type="email"
              name="email"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Phone Number:</span>
            <input
              type="tel"
              name="phone"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Phone Number"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">City:</span>
            <input
              type="text"
              name="city"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your City"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Subject:</span>
            <input
              type="text"
              name="subject"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Subject"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Priority:</span>
            <select
              name="priority"
              className="p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Message:</span>
            <textarea
              name="message"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Message"
              rows={5}
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
