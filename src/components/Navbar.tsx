
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToFeaturedCourses = () => {
    const featuredCoursesSection = document.getElementById('featured-courses');
    if (featuredCoursesSection) {
      featuredCoursesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu when clicking an item
  };

  return (
    <nav className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">राग ALAY</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" onClick={scrollToFeaturedCourses}>
            Courses
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about">About Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <div className="flex flex-col space-y-4 mt-6">
              <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost" onClick={scrollToFeaturedCourses}>
                Courses
              </Button>
              <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
