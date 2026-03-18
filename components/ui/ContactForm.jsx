import { Formik } from "formik";
import { Input } from "./input";
import { Button } from "./button";
import * as yup from "yup";

function ContactForm() {
  const validation = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Minimum 3 characters are required")
      .max(20, "Not more than 20 characters are allowed"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: yup
      .string()
      .min(3, "Minimum 3 characters are required")
      .max(50, "Not more than 50 characters are allowed"),
    message: yup.string().max(150, "Not more than 150 characters are allowed"),
  });

  return (
    <div className="w-full">
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Name */}
              <div className="w-full">
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Your Name"
                  className="w-full py-4 text-sm md:text-base focus:ring-0!"
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-xs md:text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="w-full">
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Your Email"
                  className="w-full py-4 text-sm md:text-base focus:ring-0!"
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-xs md:text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <Input
                type="text"
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                placeholder="Subject"
                className="w-full py-4 text-sm md:text-base focus:ring-0!"
              />
              {errors.subject && touched.subject && (
                <p className="mt-1 text-xs md:text-sm text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows={5}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                placeholder="Message"
                className="w-full border rounded-md px-3 py-3 text-sm md:text-base 
                           focus:outline-none focus:ring-1 focus:ring-[#0A4DB8]"
              />
              {errors.message && touched.message && (
                <p className="mt-1 text-xs md:text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-full 
                           text-sm md:text-base lg:text-lg 
                           bg-[#0A4DB8] hover:bg-[#0A4DB8]/80"
              >
                Send Message
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
