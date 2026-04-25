import React, { useState } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = ({ darkMode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [fileName, setFileName] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phone_number: "",
      your_message: "",
      attachment: "", // Base64 string of the file
    },
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitStatus(null);

      // Mapping formik values to match EmailJS template variables
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        phone_number: values.phone_number,
        message: values.your_message,
        attachment: values.attachment, // This must be a base64 string
        to_name: "Soumil Nimbalkar",
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSubmitStatus("success");
            setIsSubmitting(false);
            setFileName("");
            resetForm();
            setTimeout(() => setSubmitStatus(null), 5000);
          },
          (err) => {
            console.log("FAILED...", err);
            setSubmitStatus("error");
            setIsSubmitting(false);
          }
        );
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      // Basic check for file size (EmailJS Free Tier has limits, usually around 50KB - 200KB)
      if (file.size > 50000) {
        alert("File is too large. Please select a file smaller than 50KB.");
        event.target.value = null;
        return;
      }

      setFileName(file.name);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        formik.setFieldValue("attachment", reader.result);
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
    }
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          type: "spring",
        },
      }}
      viewport={{ once: true }}
    >
      <form
        action="#"
        className="flex flex-col w-full gap-5 transition-colors duration-300"
        onSubmit={formik?.handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <div className="flex-1 relative">
            <input
              type="text"
              id="Name"
              name="name"
              className={`peer border ${
                darkMode
                  ? "border-slate-600 text-white bg-slate-800/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                  : "border-gray-200 text-gray-900 bg-white/50 focus:border-blue-500 focus:ring-blue-500/20"
              } text-sm rounded-xl block w-full p-4 pt-6 transition-all duration-300 focus:outline-none focus:ring-4 backdrop-blur-sm`}
              placeholder=" "
              required
              value={formik?.values?.name}
              onChange={formik.handleChange}
            />
            <label
              htmlFor="Name"
              className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
                darkMode ? "text-slate-400 peer-focus:text-cyan-400" : "text-gray-500 peer-focus:text-blue-600"
              } font-medium`}
            >
              Name
            </label>
          </div>

          <div className="flex-1 relative">
            <input
              type="email"
              id="email"
              className={`peer border ${
                darkMode
                  ? "border-slate-600 text-white bg-slate-800/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                  : "border-gray-200 text-gray-900 bg-white/50 focus:border-blue-500 focus:ring-blue-500/20"
              } text-sm rounded-xl block w-full p-4 pt-6 transition-all duration-300 focus:outline-none focus:ring-4 backdrop-blur-sm`}
              placeholder=" "
              required
              name="email"
              value={formik?.values?.email}
              onChange={formik.handleChange}
            />
            <label
              htmlFor="email"
              className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
                darkMode ? "text-slate-400 peer-focus:text-cyan-400" : "text-gray-500 peer-focus:text-blue-600"
              } font-medium`}
            >
              Email Address
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <div className="flex-1 relative">
            <input
              type="text"
              id="subject"
              className={`peer border ${
                darkMode
                  ? "border-slate-600 text-white bg-slate-800/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                  : "border-gray-200 text-gray-900 bg-white/50 focus:border-blue-500 focus:ring-blue-500/20"
              } text-sm rounded-xl block w-full p-4 pt-6 transition-all duration-300 focus:outline-none focus:ring-4 backdrop-blur-sm`}
              placeholder=" "
              required
              name="subject"
              value={formik?.values?.subject}
              onChange={formik.handleChange}
            />
            <label
              htmlFor="subject"
              className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
                darkMode ? "text-slate-400 peer-focus:text-cyan-400" : "text-gray-500 peer-focus:text-blue-600"
              } font-medium`}
            >
              Subject
            </label>
          </div>
          <div className="flex-1 relative">
            <input
              type="number"
              id="number"
              className={`peer border ${
                darkMode
                  ? "border-slate-600 text-white bg-slate-800/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                  : "border-gray-200 text-gray-900 bg-white/50 focus:border-blue-500 focus:ring-blue-500/20"
              } text-sm rounded-xl block w-full p-4 pt-6 transition-all duration-300 focus:outline-none focus:ring-4 backdrop-blur-sm`}
              placeholder=" "
              required
              name="phone_number"
              value={formik?.values?.phone_number}
              onChange={formik.handleChange}
            />
            <label
              htmlFor="number"
              className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
                darkMode ? "text-slate-400 peer-focus:text-cyan-400" : "text-gray-500 peer-focus:text-blue-600"
              } font-medium`}
            >
              Phone Number
            </label>
          </div>
        </div>

        {/* <div className="w-full mb-2"> ... */}

        <div className="w-full relative">
          <textarea
            id="message"
            rows="4"
            className={`peer border ${
              darkMode
                ? "border-slate-600 text-white bg-slate-800/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                : "border-gray-200 text-gray-900 bg-white/50 focus:border-blue-500 focus:ring-blue-500/20"
            } text-sm rounded-xl block w-full p-4 pt-6 transition-all duration-300 focus:outline-none focus:ring-4 backdrop-blur-sm`}
            placeholder=" "
            name="your_message"
            value={formik?.values?.your_message}
            onChange={formik.handleChange}
          ></textarea>
          <label
            htmlFor="message"
            className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${
              darkMode ? "text-slate-400 peer-focus:text-cyan-400" : "text-gray-500 peer-focus:text-blue-600"
            } font-medium`}
          >
            Your message
          </label>
        </div>

        {submitStatus === "success" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full p-4 mt-2 text-sm text-green-700 bg-green-100/90 rounded-xl border border-green-200 dark:bg-emerald-900/30 dark:border-emerald-800/50 dark:text-emerald-300 font-bold backdrop-blur-sm tracking-wide text-center shadow-lg">
            Email sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full p-4 mt-2 text-sm text-red-700 bg-red-100/90 rounded-xl border border-red-200 dark:bg-rose-900/30 dark:border-rose-800/50 dark:text-rose-300 font-bold backdrop-blur-sm tracking-wide text-center shadow-lg">
            Failed to send email. Please check your attachments or try again later.
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`py-4 px-8 mt-4 text-base font-bold text-center w-full transition-all duration-300 tracking-wide uppercase ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"
          } rounded-xl shadow-lg border ${
            darkMode
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-transparent hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          }`}
        >
          {isSubmitting ? "Sending details..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
