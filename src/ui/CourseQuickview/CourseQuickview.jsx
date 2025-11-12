import React from 'react';
import './CourseQuickview.css';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseQuickview = ({ course, onClose }) => {
  if (!course) {
    return null;
  }

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quickview-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="quickview-content">
          <div className="quickview-image">
            <img src={course.imageSrc} alt={course.imageAlt} />
          </div>
          <div className="quickview-details">
            <h2 className="text-4xl font-extrabold text-neutral-700">
              {course.title}
            </h2>
            <p className="mt-2 font-extralight">{course.description}</p>
            <div className="quickview-tags ">
              {course.tags &&
                course.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="font-regular bg-neutral-100 px-2 py-1 mr-2 border-1 border-neutral-300 text-neutral-500 uppercase"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <div className="quickview-highlights font-extralight ">
              <h3 className="-mt-2 font-semibold">Highlights:</h3>
              <ul>
                {course.highlights &&
                  course.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
              </ul>
            </div>

            {/* <button className="enroll-now-btn w-full">Go to course </button> */}
            <Link
              to={`/courses/professional/${course.title
                .toLowerCase()
                .replace(/\s+/g, '-')}/?category=${encodeURIComponent(
                course.name
              )}`}
              className="enroll-now-btn w-full text-center"
            >
              Go to course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseQuickview;
