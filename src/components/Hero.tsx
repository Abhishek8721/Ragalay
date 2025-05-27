
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToFeaturedCourses = () => {
    const featuredCoursesSection = document.getElementById('featured-courses');
    if (featuredCoursesSection) {
      featuredCoursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Master Music at Your Own Pace
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Learn from professional musicians and take your skills to the next level with our structured courses
          </p>
          <div className="flex justify-center">
            <Button size="lg" onClick={scrollToFeaturedCourses}>
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
