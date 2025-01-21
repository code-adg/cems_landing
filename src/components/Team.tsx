import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';

const teamMembers = [
  {
    name: 'Dr. Arun Kumar',
    role: 'Chief Technology Officer',
    image: '../public/raju_sir.jpg',
    bio: 'PhD in IoT Systems',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Priya Mehta',
    role: 'Head of AI Research',
    image: '../public/deva.jpg',
    bio: 'ML Expert',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Rahul Sharma',
    role: 'Lead IoT Engineer',
    image: '../public/vamsi.jpg',
    bio: 'IoT Specialist',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Sarah Wilson',
    role: 'Product Manager',
    image: '../public/srinivas.jpg',
    bio: 'Product Strategy',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Alex Chen',
    role: 'Data Scientist',
    image: '../public/hema.jpg',
    bio: 'AI/ML Expert',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Maya Patel',
    role: 'UX Designer',
    image: '../public/koushik.jpg',
    bio: 'UX Research',
    linkedin: 'https://linkedin.com'
  }
  ,
  {
    name: 'Maya Patel',
    role: 'UX Designer',
    image: '../public/mohan.jpg',
    bio: 'UX Research',
    linkedin: 'https://linkedin.com'
  }
  ,
  {
    name: 'Maya Patel',
    role: 'UX Designer',
    image: '../public/avinash.jpg',
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
