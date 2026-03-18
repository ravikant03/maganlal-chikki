function ContactCard({ icon: Icon, title, content, width = false }) {
  return (
    <div
      className={`
        border shadow-lg lg:shadow-xl 
        flex flex-col items-center text-center gap-4
        px-5 py-5  sm:px-6 sm:py-6  lg:px-10 lg:py-7 my-3
        ${width ? "w-full lg:flex-1" : "w-full sm:w-auto"}
      `}
    >
      {/* Icon */}
      <div
        className="border-2 lg:border-4 border-[#0A4DB8] border-dotted rounded-full p-3 lg:p-5 flex items-center justify-center"
      >
        <Icon className="text-lg md:text-2xl lg:text-3xl text-[#0A4DB8]" />
      </div>

      {/* Title */}
      <p className="text-sm md:text-lg lg:text-xl font-semibold capitalize">
        {title}
      </p>

      {/* Content */}
      <p className="text-xs md:text-sm lg:text-base wrap-break-word">{content}</p>
    </div>
  );
}

export default ContactCard;
