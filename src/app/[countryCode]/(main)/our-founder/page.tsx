import { Heading } from "@medusajs/ui";
import Image from 'next/image';

const Founder = () => {
  return (
    <div className="p-4">
      <Heading level="h1" className="text-3xl font-bold text-center mb-8">Our Founder</Heading>

      <div className="hidden lg:flex flex-col space-y-8">
        {/* Large screens */}
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <Image
              src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
              alt="Founder image"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex-1 p-4">
            <p className="text-3xl font-bold">Kumar Priyaranjan</p> {/* Increased font size */}
            <p className="text-lg">Chief Mentor</p>
            <p className="text-lg mt-4 italic">
            &#34;No one should ever feel lonely on the path. Provide them guidance to enhance focus, concentration, and learning agility.&#34; - Kumar Priyaranjan
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center">
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, index) => (
              <Image
                key={index}
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
                alt={`Education image ${index + 1}`}
                width={250}
                height={150}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
          <div className="flex-1 p-4">
            <p className="text-lg mb-2">Kumar has a rich Educational Background across various fields:</p>
            <ul className="list-disc list-inside pl-4 text-lg">
              <li>Science & Law Graduate from Osmania University, Hyderabad</li>
              <li>PGD in Personnel Management from Delhi</li>
              <li>Strategic HRM from University of Michigan, USA</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, index) => (
              <Image
                key={index}
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
                alt={`Experience image ${index + 1}`}
                width={250}
                height={150}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
          <div className="flex-1 p-4">
            <p className="text-lg mb-2">About Kumar Priyaranjan:</p>
            <ul className="list-disc list-inside pl-4 text-lg">
              <li>A natural mentor and strength-based coach.</li>
              <li>32 years of corporate experience in India and overseas (USA, UK, Europe, Mexico, UAE, Sri Lanka).</li>
              <li>An ace wildlife photographer.</li>
              <li>A certified Yoga Teacher with over 25 years of Spiritual Teaching.</li>
              <li>Left the highest paying corporate role to enable young minds to follow the right path by recognizing and utilizing their inherent potential for a bright future.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        {/* Mobile screens */}
        <div className="mb-8">
          <Image
            src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
            alt="Founder image"
            width={500}
            height={300}
            className="w-full h-auto mb-4 rounded-lg"
          />
          <p className="text-3xl font-bold">Kumar Priyaranjan</p> {/* Increased font size */}
          <p className="text-lg mb-4">Chief Mentor</p>
          <p className="text-lg italic mb-4">
          &#34;No one should ever feel lonely on the path. Provide them guidance to enhance focus, concentration, and learning agility.&#34; - Kumar Priyaranjan
          </p>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[...Array(4)].map((_, index) => (
              <Image
                key={index}
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
                alt={`Education image ${index + 1}`}
                width={250}
                height={150}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
          <p className="text-lg mb-2">Kumar has a rich Educational Background across various fields:</p>
          <ul className="list-disc list-inside pl-4 text-lg">
            <li>Science & Law Graduate from Osmania University, Hyderabad</li>
            <li>PGD in Personnel Management from Delhi</li>
            <li>Strategic HRM from University of Michigan, USA</li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[...Array(4)].map((_, index) => (
              <Image
                key={index}
                src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
                alt={`Experience image ${index + 1}`}
                width={250}
                height={150}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
          <p className="text-lg mb-2">About Kumar Priyaranjan:</p>
          <ul className="list-disc list-inside pl-4 text-lg">
            <li>A natural mentor and strength-based coach.</li>
            <li>32 years of corporate experience in India and overseas (USA, UK, Europe, Mexico, UAE, Sri Lanka).</li>
            <li>An ace wildlife photographer.</li>
            <li>A certified Yoga Teacher with over 25 years of Spiritual Teaching.</li>
            <li>Left the highest paying corporate role to enable young minds to follow the right path by recognizing and utilizing their inherent potential for a bright future.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Founder;
