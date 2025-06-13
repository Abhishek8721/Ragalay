
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { courses } from '../data/courses';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === parseInt(id || '0'));
  
  const handleEnrollNow = () => {
    // Replace with your actual WhatsApp number and message
    const phoneNumber = "916900726549"; // Replace with your WhatsApp number
    const message = `Hi, I'm interested in enrolling for the ${course?.title} course!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold">Course not found</h1>
          <p className="mt-4">The course you are looking for does not exist.</p>
          <Button className="mt-6" asChild>
            <a href="/">Back to Courses</a>
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
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Details (Left Side) */}
            <div className="lg:col-span-2">
              <Badge className="mb-4">{course.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-muted-foreground mb-6">
                Instructor: <span className="font-medium text-foreground">{course.instructor}</span>
              </p>
              
              <div className="aspect-video mb-8 rounded-lg overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-muted-foreground">{course.description}</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <ul className="space-y-3">
                  {course.learnings.map((learning, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Purchase Card (Right Side) */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold">Rs {course.price}</span>
                  </div>
                  
                  <Button 
                    className="w-full mb-6 text-lg py-6" 
                    onClick={handleEnrollNow}
                  >
                    Enroll Now
                  </Button>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Class Type:</span>
                      <span className="font-medium">Live Classes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Doubt Sessions:</span>
                      <span className="font-medium">Included</span>
                    </div>
                  </div>
                  
                
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
