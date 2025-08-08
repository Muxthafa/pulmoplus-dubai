import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="py-16 bg-[#0A2647] text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8">
          Let&apos;s discuss how we can help bring your vision to life
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#FFB800] text-[#0A2647] px-8 py-3 rounded-lg font-bold hover:bg-[#ffc93c] transition duration-300"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
