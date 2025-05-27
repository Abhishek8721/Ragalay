
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Extended instructor data with more details and Instagram video links
const instructorDetails = [
  {
    id: 1,
    name: "Manash Saikia",
    instrument: "Violin",
    bio: "Manash Saikia offers Hindustani violin lessons. With a Master's and Bachelor's in Performing Arts from Banaras Hindu University, he caters to students of all ages and skill levels, providing online classes",
    image: "https://ik.imagekit.io/bxgl5da6x/WhatsApp%20Image%202025-05-21%20at%2021.34.05_5a7e72f5.jpg?updatedAt=1747900557989",
    experience: "Manash Saikia is a Hindustani violinist and educator based in Mumbai, India. With a Master's and Bachelor's degree in Performing Arts from Banaras Hindu University (BHU), he has been teaching violin for over three years. His teaching approach emphasizes both traditional techniques and creative expression, aiming to help students develop their own understanding and depth in music",
    portfolio: [
      "Performed with the New York Philharmonic",
      "Released three solo albums featuring classical compositions",
      "Conducted master classes across Europe and North America"
    ],
    instagramVideos: [
      "https://ik.imagekit.io/bxgl5da6x/@arindamhaz_music's%20original%20'EKA%20BEKA'%20out%20on%20all%20platforms.%20Beautifully%20written%20by%20@heemangxoo_swooteya_xoikiya.%20Glad%20to%20be%20a%20part%20of%20this%20project%20with%20an%20insanely%20talented%20bunch%20of%20artists.%20Go%20stream%20%20_assame.mp4?updatedAt=1747903039891",
      "https://ik.imagekit.io/bxgl5da6x/Presenting%20an%20original,%20Jaane%20bhi%20do%20_%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A5%87%20%E0%A4%AD%E0%A5%80%20%E0%A4%A6%E0%A5%8B%20%20COMMENT%20AND%20SHARE%20IF%20YOU%20WANT%20US%20TO%20RELEASE%20THIS%20!!Credits-%20Vocals%20and%20Composition-%20@aainapadiath%20Lyrics-%20@acousticscreams%20Guitar%20and%20Composition-%20@acousticscre.mp4?updatedAt=1747903468289"
    ]
  },
  {
    id: 2,
    name: "Dawor Deka",
    instrument: "Vocal",
    bio: "Dawor Deka is a multi-talented musician, composer, singer-songwriter, and western music coach from Assam, now based in Chennai. With roots in both Hindustani classical and Western classical/jazz traditions, Dawor’s musicality reflects years of dedicated training—two years in Hindustani vocal music and five years in Western classical and jazz vocal technique. Her sound is a vivid blend of elegance and edge, shaped by jazz standards, pop, rock n roll, and a bold flair for dark dissonance.",
    image: "https://ik.imagekit.io/bxgl5da6x/WhatsApp%20Image%202025-05-21%20at%2021.34.17_67143bdd.jpg?updatedAt=1747900257756",
    experience: `Dawor Deka is a multi-talented musician, composer, singer-songwriter, and western music coach from Assam, now based in Chennai. With roots in both Hindustani classical and Western classical/jazz traditions, Dawor’s musicality reflects years of dedicated training—two years in Hindustani vocal music and five years in Western classical and jazz vocal technique. Her sound is a vivid blend of elegance and edge, shaped by jazz standards, pop, rock ’n’ roll, and a bold flair for dark dissonance.

A graduate of Swarnabhoomi Academy of Music—South Asia’s leading contemporary jazz institute—Dawor holds a Diploma in Music Performance, along with a certificate recognizing her outstanding potential in music education and performance. She also holds a Diploma in Audio Engineering, and recently completed a Musical Theatre course at A.R. Rahman’s KM College of Music and Technology, further broadening her artistic range.

An accomplished pianist and a master of western music theory, Dawor’s work resonates with clarity, sophistication, and soul. She draws inspiration from a diverse spectrum of musical icons including Bach, Mozart, Yanni, Ella Fitzgerald, Aretha Franklin, Norah Jones, Louis Armstrong, Mahalia Jackson, Mariah Carey, Jennifer Hudson, RAYE, and Morissette Amon.

Dawor has performed at numerous venues and events, gathering admirers and loyal fans wherever her voice has reached. Her performances are known to stir hearts and uplift spirits, leaving a lasting emotional imprint on her audiences.

Currently, she is working on her debut EP, a body of work that promises to showcase her signature fusion of classical integrity, modern expression, and vocal power.`,
    portfolio: [
      "Lead guitarist for The Resonators (2010-2018)",
      "Session musician for over 25 studio albums",
      "Creator of 'Guitar Fundamentals' online course series"
    ],
    instagramVideos: [
      "https://www.instagram.com/p/C8YnT4KJiCr/embed",
      "https://www.instagram.com/p/C7ofCTHoL4R/embed"
    ]
  },
  {
    id: 3,
    name: "Vivek Gogoi",
    instrument: "Songwriting",
    bio: "Vivek Gogoi is an emerging singer-songwriter from Assam, India, known for his soulful voice and heartfelt compositions. He is master in Hindi and Assamese words and has great experience in making lyrics and composition.",
    image: "https://ik.imagekit.io/bxgl5da6x/WhatsApp%20Image%202025-05-22%20at%2013.44.29_aa18de08.jpg?updatedAt=1747901725652",
    experience: "3+ years of experience as a Songwriter. He has collaborated with various artist as a lyricist and composer and has worked in his own originals",
    portfolio: [
      "Concertmaster for the Boston Symphony Orchestra (2015-2019)",
      "Winner of International Violin Competition of Indianapolis",
      "Featured soloist on multiple film soundtracks"
    ],
    instagramVideos: [
      "https://ik.imagekit.io/bxgl5da6x/WhatsApp%20Video%202025-05-22%20at%2014.25.57_7c4efa34.mp4?updatedAt=1747904205457",
      "https://ik.imagekit.io/bxgl5da6x/WhatsApp%20Video%202025-05-22%20at%2014.36.17_fa5392e8.mp4?updatedAt=1747904829481"
    ]
  },
  {
    id: 4,
    name: "Skiddy Dx",
    instrument: "Production and Mixing Engineer",
    bio: "Skiddy Dx is an emerging Production and Mixing Engineer from Assam, India, known for his contributions to the Indian Hip Hop and indie music scenes. He has collaborated with various artists and released several singles that showcase his versatility and musical talent.",
    image: "https://ik.imagekit.io/bxgl5da6x/486103118_18399785776100176_6223413126589279450_n.png?updatedAt=1747905267499",
    experience: "5+ years as a professional Mixing and Mastering Engineer. He has collaborated with various artists like MC Altaf and recently produced music and has done mixing and mastering for Th3 Saint for Nexa Music supervised by A. R. Rahman and released several singles that showcase his versatility and musical talent.",
    portfolio: [
      "Lead roles in major opera productions including La Bohème and Don Giovanni",
      "Vocal coach for Broadway performers and recording artists",
      "Creator of the 'Finding Your Voice' methodology"
    ],
    instagramVideos: [
      "https://www.instagram.com/p/C6EBIuEoXgd/embed",
      "https://www.instagram.com/p/C76BOBlLZdw/embed"
    ]
  }
];

const InstructorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const instructor = instructorDetails.find(i => i.id === parseInt(id || '0'));
  
  if (!instructor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold">Instructor not found</h1>
          <p className="mt-4">The instructor you are looking for does not exist.</p>
          <Button className="mt-6" asChild>
            <Link to="/about">Back to About Us</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-40 h-40 md:w-60 md:h-60 relative">
                <Avatar className="w-full h-full">
                  <AvatarImage src={instructor.image} alt={instructor.name} className="object-cover" />
                  <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">{instructor.name}</h1>
                <p className="text-xl text-primary mb-4">{instructor.instrument} Instructor</p>
                <p className="text-muted-foreground max-w-2xl">{instructor.bio}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Instagram Videos Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Performance Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {instructor.instagramVideos.map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <AspectRatio ratio={1 / 1} className="w-full">
                    <iframe
                      src={video}
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                      title={`${instructor.name} Instagram video ${index + 1}`}
                    ></iframe>
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <p className="mb-8 text-lg">{instructor.experience}</p>
            
            {/* <h2 className="text-3xl font-bold mb-6">Portfolio Highlights</h2>
            <ul className="space-y-2 list-disc pl-5 mb-8">
              {instructor.portfolio.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul> */}
            
            <Button variant="outline" asChild className="mt-4">
              <Link to="/about">Back to All Instructors</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InstructorDetail;
