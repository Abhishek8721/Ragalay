
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <section id="featured-courses" className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our most popular music courses and start your journey today
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Why Choose राग ALAY?</h2>
              <p className="text-muted-foreground mb-10">
                We provide high-quality music education that fits your schedule and learning style
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">Expert Instructors</h3>
                  <p className="text-muted-foreground">Learn from professional musicians with years of experience</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">Flexible Learning</h3>
                  <p className="text-muted-foreground">Study at your own pace, anytime and anywhere</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">Structured Curriculum</h3>
                  <p className="text-muted-foreground">Follow a clear path from basics to advanced techniques</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
