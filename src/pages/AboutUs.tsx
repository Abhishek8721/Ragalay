
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Book, BookOpen, User } from 'lucide-react';

// Mentor data
const mentors = [
  {
  id: 1,
  name: "Manash Saikia",
  instrument: "Violin",
  bio: "Manash Saikia offers Hindustani violin lessons. With a Master's and Bachelor's in Performing Arts from Banaras Hindu University, he caters to students of all ages and skill levels, providing online classes ",
  image: "https://ik.imagekit.io/bxgl5da6x/WhatsApp%20Image%202025-05-21%20at%2021.34.05_5a7e72f5.jpg?updatedAt=1747900557989"
},
  {
    id: 2,
    name: "Dawor Deka",
    instrument: "Vocal",
    bio: "Dawor Deka is a multi-talented musician, composer, singer-songwriter, and western music coach from Assam, now based in Chennai. With roots in both Hindustani classical and Western classical/jazz traditions, Dawor’s musicality reflects years of dedicated training—two years in Hindustani vocal music and five years in Western classical and jazz vocal technique.",
    image: "https://ik.imagekit.io/bxgl5da6x/WhatsApp%20Image%202025-05-21%20at%2021.34.17_67143bdd.jpg?updatedAt=1747900257756",
  },
  {
    id: 3,
    name: "Vivek Gogoi",
    instrument: "Songwriting",
    bio: "Vivek Gogoi is an emerging singer-songwriter from Assam, India, known for his soulful voice and heartfelt compositions. He is master in Hindi and Assamese words and has great experience in making lyrics and composition.",
    image: "https://ik.imagekit.io/bxgl5da6x/WhatsApp%20Image%202025-05-22%20at%2013.44.29_aa18de08.jpg?updatedAt=1747901725652",
  },
  {
    id: 4,
    name: "Skiddy Dx",
    instrument: "Production and Mixing Engineer",
    bio: "Skiddy Dx is an emerging Production and Mixing Engineer from Assam, India, known for his contributions to the Indian Hip Hop and indie music scenes. He has collaborated with various artists and released several singles that showcase his versatility and musical talent.",
    image: "https://ik.imagekit.io/bxgl5da6x/486103118_18399785776100176_6223413126589279450_n.png?updatedAt=1747905267499",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* About Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About राग ALAY</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transforming music education through accessible, high-quality online courses
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <p className="mb-6">
                राग ALAY was founded in 2025 by a group of passionate musicians and educators who believed that high-quality music education should be accessible to everyone, regardless of location or schedule constraints.
              </p>
              <p className="mb-6">
                Our mission is to provide structured, comprehensive music courses that allow students to progress at their own pace while receiving guidance from world-class instructors. We've carefully designed our curriculum to ensure a balance between theory, practice, and creative expression.
              </p>
              <p>
                Whether you're picking up an instrument for the first time or looking to refine advanced techniques, राग ALAY offers the resources, support, and community you need to achieve your musical goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Expert Curriculum</h3>
                  <p className="text-muted-foreground">Carefully structured lessons designed by professional musicians and educators</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Personal Feedback</h3>
                  <p className="text-muted-foreground">Receive personalized guidance and feedback on your progress</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Book className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Flexible Learning</h3>
                  <p className="text-muted-foreground">Study at your own pace with lifetime access to course materials</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Mentors Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Mentors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentors.map(mentor => (
                <Link 
                  key={mentor.id} 
                  to={`/instructor/${mentor.id}`} 
                  className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-64 object-cover" 
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{mentor.name}</h3>
                    <p className="text-primary font-medium mb-3">{mentor.instrument} Instructor</p>
                    <p className="text-muted-foreground">{mentor.bio}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
