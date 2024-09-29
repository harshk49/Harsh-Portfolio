const Technologies = () => {
  return (
    <div className="px-4 pb-24 border-b border-neutral-800 sm:px-0">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-3xl sm:text-4xl lg:text-5xl text-transparent pb-2 my-10 sm:my-20 text-center"
        style={{ whiteSpace: "nowrap" }}
      >
        Technologies Known
      </motion.h2>
      {/* Rest of your component remains unchanged */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* ... your icons here ... */}
      </motion.div>
    </div>
  );
};

export default Technologies;
