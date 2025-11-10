import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center px-6 md:px-20 py-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-10 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Have a question, collaboration idea, or just want to say hi?  
        I would love to hear from you! Fill out the form below...
      </motion.p>

      {/* Contact Form */}
      <motion.form
        action="https://formsubmit.co/el/ditozo"
        method="POST"
        className="bg-gray-900 rounded-xl p-8 shadow-lg w-full max-w-lg border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hidden FormSubmit field (prevents spam) */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-300">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition-all py-3 rounded-lg font-semibold"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex space-x-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="https://github.com/Jasbir012"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400 transition-all"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jasbir-singh12/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400 transition-all"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://nightmare1n.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400 transition-all"
        >
          <i className="fab fa-itch-io"></i>
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
