import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';

const teamMembers = [
  {
    name: 'Dr. VSN Narasimha Raju',
    role: 'Director',
    image: '/raju_sir.jpg',
    bio: 'PhD in IoT Systems',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Deva',
    role: 'Managing Director',
    image: '/deva.jpg',
    bio: 'ML Expert',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Srinivas Mukkuvalli',
    role: 'CEO',
    image: '/srinivas.jpg',
    bio: 'IoT Specialist',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Vamsi Sangeppu',
    role: 'CFO',
    image: '/vamsi.jpg',
    bio: 'Product Strategy',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Hema',
    role: 'CMO',
    image: '/hema.jpg',
    bio: 'AI/ML Expert',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Koushik',
    role: 'Lead IoT Engineer',
    image: '/koushik.jpg',
    bio: 'UX Research',
    linkedin: 'https://linkedin.com'
  }
  ,
  {
    name: 'Mohan Ram',
    role: 'Full Stack Developer',
    image: '/mohan.jpg',
    bio: 'UX Research',
    linkedin: 'https://linkedin.com'
  }
  ,
  {
    name: 'Avinash',
    role: 'Full Stack Developer',
    image: '/avinash.jpg',
    bio: 'UX Research',
    linkedin: 'https://linkedin.com'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team brings together expertise in IoT, AI, and energy management
            to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Updated grid layout to 4x4 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
