import { Button } from "@/components/ui/button";
export default function ContactForm({ formAction, state, isPending }) {
  return (
    <form action={formAction} className="bg-gray-50 p-8 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-[#005b99] mb-6">Send Message</h2>
  <div className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-2 border border-[#3bbfab] rounded-lg focus:outline-none focus:border-[#0077cb]"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-2 border border-[#3bbfab] rounded-lg focus:outline-none focus:border-[#0077cb]"
    />
    <input
      type="tel"
      name="phone"
      placeholder="Your Phone"
      className="w-full px-4 py-2 border border-[#3bbfab] rounded-lg focus:outline-none focus:border-[#0077cb]"
    />
    <input
      type="text"
      name="subject"
      placeholder="Subject"
      required
      className="w-full px-4 py-2 border border-[#3bbfab] rounded-lg focus:outline-none focus:border-[#0077cb]"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="5"
      required
      className="w-full px-4 py-2 border border-[#3bbfab] rounded-lg focus:outline-none focus:border-[#0077cb]"
    ></textarea>

    {state?.status === "success" && (
      <div className="text-[#3bbfab] font-medium">Message sent successfully!</div>
    )}
    {state?.status === "error" && (
      <div className="text-red-600 font-medium">
        Failed to send message. Please try again.
      </div>
    )}

    

<Button
  type="submit"
  disabled={isPending}
  className="w-full bg-[#0077cb] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#005b99] transition duration-300 disabled:opacity-50"
>
  {isPending ? "Sending..." : "Send Message"}
</Button>

  </div>
</form>

  );
}
