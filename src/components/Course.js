import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';
import WebDevImage from '../assets/undraw_web_developer_re_h7ie.svg';
import MLImage from '../assets/cloud-computing.svg';
import CloudImage from '../assets/undraw_cloud_hosting_7xb1.svg';

const Course = () => {
  const courses = [
    {
      id: 1,
      title: 'Front End Development',
      description: 'Front-end Development: This focuses on the visual and interactive aspects of a website. Front-end developers use languages like HTML, CSS, and JavaScript to create the layout, design, and user interface of a website. They ensure that the website is responsive, accessible, and compatible with different devices and browsers.',
      image: WebDevImage,
    },
    {
      id: 2,
      title: 'Machine Learning',
      description: 'Machine learning is a subfield of artificial intelligence that focuses on the development of algorithms and models that enable computers to learn and make predictions or decisions without explicit programming. It involves designing systems that can automatically learn and improve from experience or data, allowing computers to recognize patterns, make informed predictions, and solve complex problems.',
      image: MLImage,
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Cloud computing refers to the delivery of computing services, such as storage, processing power, and software applications, over the internet on a pay-as-you-go basis. It eliminates the need for organizations and individuals to invest in and manage their own physical infrastructure, allowing them to access resources and services remotely through a network of servers hosted by a cloud service provider.',
      image: CloudImage,
    },
  ];

  return (
    <div className="course-section">
      <div className="course-container">
        {courses.map((course, index) => (
          <div className={`course-card ${index % 2 === 0 ? 'course-section-even' : 'course-section-odd'}`} key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Go To Course
              </Link>
            </div>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
