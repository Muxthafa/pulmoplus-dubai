import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#005b99]">
          About PulmoPlus
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering respiratory health through innovation and care. We believe
          every breath matters.
        </p>
      </section>

      {/* Who We Are */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-[#0077cb] mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At PulmoPlus, we are committed to enhancing lives through innovative respiratory solutions. By combining cutting-edge medical technology with a deep commitment to patient well-being, we provide advanced products and personalized support that empower individuals to breathe easier and live healthier. Whether you're managing a chronic condition or seeking preventative care, PulmoPlus is here to support every breath you take.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/pulmo-bg-2.jpg"
            alt="About PulmoPlus"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid gap-8 md:grid-cols-2">
        <Card className="border border-[#3bbfab]">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-[#005b99] mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To revolutionize respiratory health by delivering accessible,
              affordable, and cutting-edge respiratory solutions that improve
              lives globally.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-[#0077cb]">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-[#005b99] mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the most trusted name in respiratory health, driven by
              innovation and compassion to help people breathe easier, every
              day.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="py-14 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-[#005b99] mb-12 text-center">
      Breathing Life Into Every Home
    </h2>

    {/* First Category - Image Right */}
    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-[#005b99] mb-3">
          Advanced Respiratory Devices
        </h3>
        <div className="h-2 w-20 bg-[#3bbfab] mb-8"></div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Explore our cutting-edge range of respiratory devices including oxygen concentrators, nebulizers, and ventilators. Designed with clinical precision, our devices provide consistent airflow, enhanced filtration, and adaptive pressure settings—ideal for patients managing asthma, COPD, or other respiratory conditions. Trust in hospital-grade technology, now available for your home.
        </p>
        <Link
          href="/products/respiratory-devices"
          className="bg-[#3bbfab] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#ffc93c] transition duration-300"
        >
          Browse Devices
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative">
          <Image
            src="/images/respiratory-device.jpg"
            alt="Oxygen concentrator with nasal cannula setup"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-xl object-cover h-[400px]"
            priority
          />
        </div>
      </div>
    </div>

    {/* Second Category - Image Left */}
    <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <Image
            src="/images/home-care-support.jpg"
            alt="Home respiratory support setup"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-xl object-cover h-[400px]"
            priority
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-[#005b99] mb-3">
          Personalized Home Respiratory Care
        </h3>
        <div className="h-2 w-20 bg-[#3bbfab] mb-8"></div>
        <p className="text-gray-700 leading-relaxed mb-6">
          We empower families with personalized respiratory care solutions tailored to individual needs. From CPAP/BiPAP therapy to humidification systems and portable oxygen kits, our products are designed for comfort, reliability, and ease of use—ensuring seamless support for long-term respiratory management at home.
        </p>
        <Link
          href="/services/home-care"
          className="bg-[#3bbfab] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#ffc93c] transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Meet the Team */}
      {/* <section className="text-center">
        <h2 className="text-3xl font-semibold text-[#005b99] mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((person) => (
            <div key={person} className="space-y-2">
              <Image
                src={`https://via.placeholder.com/200x200?text=Person+${person}`}
                alt={`Team member ${person}`}
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h4 className="text-lg font-semibold text-[#0077cb]">Member {person}</h4>
              <p className="text-gray-600 text-sm">Respiratory Specialist</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold text-[#005b99]">
          Want to know more?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Reach out to us or explore our wide range of respiratory health
          products tailored for every need.
        </p>
        <Button className="bg-[#0077cb] hover:bg-[#005b99] text-white px-6 py-3 text-lg">
          Contact Us
        </Button>
      </section>
    </main>
  );
}
