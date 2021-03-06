
const terms = {F:'Fall',W:'Winter',S:'Spring'};
const days = ['M','Tu','W','Th','F'];

const getCourseTerm = course =>(
    terms[course.id.charAt(0)]
  );
  
  const getCourseNumber = course=>(
    course.id.slice(1,4)
  );
  
  // Return True if the course is conflict with the selected courses.
  const hasConflict = (course, selected)=>{
      //console.log(selected)
      return selected.some(selection => courseConflict(course,selection))
    };
  
  // Return True if course1 conflicts with course2
  const courseConflict = (course1, course2) =>(
      course1 !== course2 &&
      getCourseTerm(course1) === getCourseTerm(course2) &&
      timeConflict(course1,course2)
    );
  
  // Return True if course1 conflicts with course2
  const timeConflict = (course1,course2)=>(
      daysOverlap(course1.days,course2.days) && hoursOverlap(course1.hours, course2.hours)
    );
  
  const daysOverlap = (days1, days2) =>{
    return days.some(day => days1.includes(day) && days2.includes(day))
  };
  
  const hoursOverlap = (hours1, hours2)=>{
    if (Math.max(hours1.start, hours2.start) < Math.min(hours1.end, hours2.end)){
      console.log(hours1,hours2)
    }
    return Math.max(hours1.start, hours2.start) < Math.min(hours1.end, hours2.end)
  };

export { getCourseNumber, getCourseTerm, hasConflict };