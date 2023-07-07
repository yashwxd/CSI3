import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './About.css'
import aboutimg from '../assets/aboutus.jpg';import './Service.css';

const services = [
  {
    title: 'Online Courses and Classes',
    description: 'Avail the best of the online classes and courses for a headstart in the field you desire. Packed and loaded with nothing less than the best.',
    imageUrl: 'https://source.unsplash.com/400x300/?courses',
  },
  {
    title: 'Live Webinars and Workshops',
    description: 'Fuse in with the best of the best in their fileds with our live sessions and webinars. Also register yourself for a trial to avail one to one mentorship. ',
    imageUrl: 'https://source.unsplash.com/400x300/?webinars',
  },
  {
    title: 'Personalized Learning Experience',
    description: 'No need to hurry! Complete the courses at your own pace with the self-paced learning resources available 24*7 over the protal after successful registration.',
    imageUrl: 'https://source.unsplash.com/400x300/?personalized',
  },
];



const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to E-Learning App platform! </h1>
      <center><h3><b>Welcome to our e-learning platform, where knowledge meets convenience. At our website, we are dedicated to empowering learners of all ages and backgrounds to unlock their full potential through accessible and engaging online education <br></br>Whether you are seeking to acquire new skills, enhance existing ones, or embark on a transformative educational journey, our e-learning platform is here to support your growth and inspire a lifelong love for learning.</b></h3></center>  <br></br>
      <button className="button">
        <Link to="/course" className="link">
          Start Learning
        </Link>
      </button><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>


      <div className="About-section"><br></br>
            <div className="About-container">
                <div className="About-text">
                    <h1 className="title">About Me</h1>
                    
                    <p>
                    We are dedicated to providing a transformative learning experience for individuals around the globe. Our platform brings together a vast array of courses, expert instructors, and cutting-edge technology to empower learners of all ages and backgrounds.
                    </p>
                    <p>
                    Whether you're seeking to enhance your skills, explore new interests, or embark on a new career path, we are here to guide and inspire you every step of the way. Join our dynamic community and unlock your full potential with our engaging, accessible, and personalized online learning solutions.
                    </p></div>
                <div className="About-image">
                    <img src={aboutimg}
                        alt="About Us" />
                </div><br></br><br></br>
            </div>
        </div><br></br><br></br><br></br>

        <div>
      {services.map((service, index) => (
        <div className={`Service-section-${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
          <div className="Service-container">
            <div className="Service-image">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <div className="Service-text">
              <h1 className="title">{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
