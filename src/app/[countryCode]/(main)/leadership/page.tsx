import { Heading } from "@medusajs/ui";
import Image from 'next/image';

const leadership = [
  { name: 'Priyaranjan Kumar', designation: 'Founder/CEO', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'Archana Kumar', designation: '', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'Swami Purnatej Ji', designation: '', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'BalaKrishna L.', designation: '', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'Satyavathi B.', designation: '', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  // Add more leadership members as needed
];

const honoraryAdvisors = [
  { name: 'Nilotpal K Dutta', designation: 'Honorary Advisor', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'Neeraj Kant', designation: 'Honorary Advisor', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'Ravi Venkataramanan', designation: 'Honorary Advisor', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'L. Gurulingaswamy', designation: 'Honorary Advisor', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'Dr. Myra White', designation: 'Honorary Advisor', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'Dr. Kameshwar Prasad', designation: 'Honorary Advisor', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  // Add more honorary advisors as needed
];

const softwareTeam = [
  { name: 'Shivam Saluja', designation: '', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  { name: 'Vaibhav Kumar', designation: '', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  //{ name: 'Emily Johnson', designation: 'UI/UX Designer', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  //{ name: 'Michael Brown', designation: 'DevOps Engineer', imageUrl: 'https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app/uploads/1721452550574-Picture1.jpg' },
  // Add more software team members as needed
];

const MeetOurLeaders = () => {
  return (
    <div className="w-full bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <Heading className="text-3xl font-bold text-center mb-8">Our Leadership</Heading>
        
        <div className="mb-12">
          <Heading className="text-2xl font-semibold mb-4">Apex Resource Team</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <div className="relative w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={leader.imageUrl}
                    alt={leader.name}
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="rounded-lg"
                    priority // Add priority for faster loading on mobile
                  />
                </div>
                <Heading className="text-lg font-semibold mb-2 text-center">{leader.name}</Heading>
                <p className="text-gray-600 text-center">{leader.designation}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <Heading className="text-2xl font-semibold mb-4">Honorary Advisory Council</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {honoraryAdvisors.map((advisor, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <div className="relative w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="rounded-lg"
                    priority // Add priority for faster loading on mobile
                  />
                </div>
                <Heading className="text-lg font-semibold mb-2 text-center">{advisor.name}</Heading>
                <p className="text-gray-600 text-center">{advisor.designation}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Heading className="text-2xl font-semibold mb-4">Technology & Design Team</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {softwareTeam.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <div className="relative w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="rounded-lg"
                    priority // Add priority for faster loading on mobile
                  />
                </div>
                <Heading className="text-lg font-semibold mb-2 text-center">{member.name}</Heading>
                <p className="text-gray-600 text-center">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default MeetOurLeaders;
