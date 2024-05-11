import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phone_number: "",
      your_message: "",
    },
    onSubmit: (values) => {
      alert(JSON?.stringify(values, null, 2));
    },
  });
  console.log(formik?.values, "{/}");

  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center my-5"
      >
        <motion.h2
          className="mt-10 text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-900 font-poppins font-normal cursor-default text-[40px] sm:text-[60px] md:text-[80px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2,
              type: "spring",
            },
          }}
          viewport={{ once: true }}
        >
          GET IN TOUCH
        </motion.h2>
        <motion.div
          className=""
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
            className="flex flex-col justify-center items-center w-[700px] bg-gray-950 p-[26px] rounded-[12px]"
            onSubmit={formik?.handleSubmit}
          >
            <div className="w-full mb-2">
              <label
                htmlFor="name"
                className="block py-2 text-[14px] font-bold font-poppins text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                name="name"
                className="border border-gray-800 text-gray-50 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                placeholder="Name"
                required
                value={formik?.values?.name}
                onChange={formik.handleChange}
              />
            </div>

            <div className="w-full mb-2">
              <label
                htmlFor="email"
                className="block py-2 text-[14px] font-bold font-poppins text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-800 text-gray-50 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                placeholder="Email"
                required
                name="email"
                value={formik?.values?.email}
                onChange={formik.handleChange}
              />
            </div>

            <div className="w-full mb-2">
              <label
                htmlFor="subject"
                className="block py-2 text-[14px] font-bold font-poppins text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="border border-gray-800 text-gray-50 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                placeholder="Subject"
                required
                name="subject"
                value={formik?.values?.subject}
                onChange={formik.handleChange}
              />
            </div>

            <div className="w-full mb-2">
              <label
                htmlFor="number"
                className="block py-2 text-[14px] font-bold font-poppins text-white"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                className="border border-gray-800 text-gray-50 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                placeholder="Mobile no."
                required
                name="phone_number"
                value={formik?.values?.phone_number}
                onChange={formik.handleChange}
              />
            </div>

            <div className="sm:col-span-2 w-full mb-2">
              <label
                htmlFor="message"
                className="block py-2 text-[14px] font-bold font-poppins text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="border border-gray-800 text-gray-50 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                placeholder="Leave a comment..."
                name="your_message"
                value={formik?.values?.your_message}
                onChange={formik.handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 mt-5 text-sm font-bold text-center text-white rounded-lg bg-gray-900 hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
