
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface CourseProps {
  id: number;
  title: string;
  instructor: string;
  level: string;
  price: number;
  image: string;
  category: string;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/course/${course.id}`}>
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <Badge className="absolute top-2 right-2">{course.category}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-1">{course.title}</h3>
          <p className="text-muted-foreground text-sm">{course.instructor}</p>
          <div className="flex items-center mt-2">
            <Badge variant="outline">{course.level}</Badge>
          </div>
        </CardContent>
        <CardFooter className="pt-0 px-4 pb-4 flex justify-between items-center">
          <span className="font-bold text-lg">Rs {course.price}</span>
          <Badge variant="secondary">View Course</Badge>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default CourseCard;
