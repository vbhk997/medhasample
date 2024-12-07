import { Heading } from "@medusajs/ui";
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="p-4">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] mb-8">
        <Image
          src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/ny.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <Heading level="h1" className="text-5xl font-bold text-white">
            About Us
          </Heading>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <Heading level="h2" className="text-2xl font-semibold text-center mb-4">
          What is Medha?
        </Heading>
        <p className="text-lg text-center max-w-2xl mx-auto">
          MyMedha is a conscious initiative designed to assist young individuals in steering their careers toward success.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <Heading level="h2" className="text-xl font-semibold text-center mb-4">
          Our Mission
        </Heading>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our mission is to empower young adults through spirituality, helping them achieve mental health and career success.
        </p>
      </div>

      {/* Our Approach Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <Image
            src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
            alt="Purpose image"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <p className="text-lg mt-2">
            We cultivate adaptability and innovativeness, encouraging our members to embrace change.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <Image
            src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
            alt="Learning agility"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <p className="text-lg mt-2">
            Our programs emphasize learning agility, helping participants adapt to new trends.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <Heading level="h2" className="text-xl font-semibold text-center mb-4">
          Join Us
        </Heading>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Ready to take the next step in your career? Join MyMedha today and unlock your full potential!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
