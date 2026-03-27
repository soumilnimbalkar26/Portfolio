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
      className="w-full max-w-[700px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          type: "spring",
        },
      }}
      viewport={{ once: true }}
    >
      <form
        action="#"
        className={`flex flex-col justify-center items-center w-full ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } p-[26px] rounded-[12px] border shadow-lg transition-colors duration-300`}
        onSubmit={formik?.handleSubmit}
      >
        <div className="w-full mb-2">
          <label
            htmlFor="name"
            className={`block py-2 text-[14px] font-bold  ${
              darkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            id="Name"
            name="name"
            className={`border ${
              darkMode
                ? "border-gray-700 text-gray-100 bg-gray-900 focus:border-light-primary"
                : "border-gray-300 text-gray-900 bg-gray-50 focus:border-light-primary"
            } text-sm rounded-lg block w-full p-2.5 transition-colors duration-300`}
            placeholder="Name"
            required
            value={formik?.values?.name}
            onChange={formik.handleChange}
          />
        </div>

        <div className="w-full mb-2">
          <label
            htmlFor="email"
            className={`block py-2 text-[14px] font-bold  ${
              darkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`border ${
              darkMode
                ? "border-gray-700 text-gray-100 bg-gray-900 focus:border-light-primary"
                : "border-gray-300 text-gray-900 bg-gray-50 focus:border-light-primary"
            } text-sm rounded-lg block w-full p-2.5 transition-colors duration-300`}
            placeholder="Email"
            required
            name="email"
            value={formik?.values?.email}
            onChange={formik.handleChange}
          />
        </div>

        <div className="w-full mb-2 flex gap-4">
          <div className="flex-1">
            <label
              htmlFor="subject"
              className={`block py-2 text-[14px] font-bold  ${
                darkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className={`border ${
                darkMode
                  ? "border-gray-700 text-gray-100 bg-gray-900 focus:border-light-primary"
                  : "border-gray-300 text-gray-900 bg-gray-50 focus:border-light-primary"
              } text-sm rounded-lg block w-full p-2.5 transition-colors duration-300`}
              placeholder="Subject"
              required
              name="subject"
              value={formik?.values?.subject}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="number"
              className={`block py-2 text-[14px] font-bold  ${
                darkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              className={`border ${
                darkMode
                  ? "border-gray-700 text-gray-100 bg-gray-900 focus:border-light-primary"
                  : "border-gray-300 text-gray-900 bg-gray-50 focus:border-light-primary"
              } text-sm rounded-lg block w-full p-2.5 transition-colors duration-300`}
              placeholder="Mobile no."
              required
              name="phone_number"
              value={formik?.values?.phone_number}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* <div className="w-full mb-2">
          <label
            className={`block py-2 text-[14px] font-bold ${
              darkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            Attach JD (PDF or DOC)
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-300 ${
                darkMode
                  ? "border-gray-600 bg-gray-900 hover:bg-gray-800"
                  : "border-gray-300 bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-medium text-center">
                  {fileName ? (
                    <span className="text-light-primary font-bold">{fileName}</span>
                  ) : (
                    <>
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </>
                  )}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, DOC or DOCX (MAX. 50KB)
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div> */}

        <div className="sm:col-span-2 w-full mb-2">
          <label
            htmlFor="message"
            className={`block py-2 text-[14px] font-bold  ${
              darkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className={`border ${
              darkMode
                ? "border-gray-700 text-gray-100 bg-gray-900 focus:border-light-primary"
                : "border-gray-300 text-gray-900 bg-gray-50 focus:border-light-primary"
            } text-sm rounded-lg block w-full p-2.5 transition-colors duration-300`}
            placeholder="Leave a comment..."
            name="your_message"
            value={formik?.values?.your_message}
            onChange={formik.handleChange}
          ></textarea>
        </div>

        {submitStatus === "success" && (
          <div className="w-full p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-950 dark:text-green-300 font-bold">
            Email sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="w-full p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-950 dark:text-red-300 font-bold">
            Failed to send email. Please check your attachment size and try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`py-3 px-5 mt-5 text-sm font-bold text-center w-full transition-all duration-300 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          } text-white bg-light-primary rounded-lg shadow-md`}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
