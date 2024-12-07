import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import { Image as MedusaImage } from "@medusajs/medusa";
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="h-screen w-full border-b border-ui-border-base relative bg-ui-bg-subtle font-sans">
      <div className="w-full h-full relative">
        <Image
          src="https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg"
          alt="Main Banner"
          layout="fill"
          objectFit="cover"
          className="bannerImage"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full px-4 lg:px-0 lg:w-1/2 lg:left-[70%]">
          <div className="w-full lg:w-3/4 bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="text-left">
              <Heading className="text-center text-2xl mb-4">WHO WE ARE</Heading>
              <p className="text-center text-lg">
                MyMedha is a conscious and courageous initiative designed to assist young individuals in steering their careers towards success effortlessly and practically.
              </p>
              <br />
              <br />
              <Heading className="text-center text-2xl mb-4">OUR MISSION</Heading>
              <p className="text-center text-lg">
                To facilitate inner transformations in at least 10 million people by 2030 by harnessing immense inherent potential to the fullest for own growth and successes.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/4 bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="text-left">
              <Heading className="text-center text-2xl mb-4">OUR PURPOSE</Heading>
              <p className="text-center text-lg">
                To connect people with their inner self in order to harness immense inherent potential for their success and growths well as to manifest their dreams into reality.
                Facilitate organisations be future ready with right, passionate and committed talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
