import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCourse.css';

const SingleCourse = () => {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: 'Web Development',
      content: 'Course content for Web Development',
      tableOfContents: [
        { heading: 'HTML', videoId: 'byTOONVJn-k' },
        { heading: 'CSS', videoId: 'hkQv0NIxKQY' },
        { heading: 'JavaScript', videoId: 'KGkiIBTq0y0' },  
        { heading: 'Bootstrap', videoId: 'Qb8DLdSYBAo' },
        { heading: 'React Js', videoId: 'EHTWMpD6S_0' },
      ],
    },
    {
      id: 2,
      title: 'Machine Learning',
      content: 'Course content for Machine Learning',
      tableOfContents: [
        { heading: 'PART-1', videoId: 'LcWFedjaR4Q' },
        { heading: 'PART-2', videoId: 'tVHMuFi3584' },
        { heading: 'PART-3', videoId: 'mAf9QYZVH6s' },
        { heading: 'PART-4', videoId: 'YRkN5k47NSY' },
        { heading: 'PART-5', videoId: 'VaF-M4F3B78'},
      ],
    },
    {
      id: 3,
      title: 'Cloud Computing',
      content: 'Course content for Cloud Computing',
      tableOfContents: [
        { heading: 'PART-1', videoId: 'WxO3Hp9NUVU' },
        { heading: 'PART-2', videoId: 'C200uLJupsQ' },
        { heading: 'PART-3', videoId: 'I3BecV0T1X8' },
        { heading: 'PART-4', videoId: 'ImW-JDaPz3c' },
        { heading: 'PART-5', videoId: 'LyBLCAIUNtE'},
      ],
    },
  ];

  const selectedCourse = courses.find((course) => course.id === Number(id));

  const [activeHeading, setActiveHeading] = useState(
    selectedCourse?.tableOfContents[0]?.heading || ''
  );

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  const activeContent = selectedCourse.tableOfContents.find(
    (content) => content.heading === activeHeading
  );

  return (
    <div className="single-course">
      <div className="sidebar">
        <ul className="content-list">
          {selectedCourse.tableOfContents.map((content, index) => (
            <li
              key={index}
              className={content.heading === activeHeading ? 'active' : ''}
              onClick={() => handleHeadingClick(content.heading)}
            >
              {content.heading}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h2 className="content-title">{selectedCourse.title}</h2>
        <div className="video-container">
          {activeContent ? (
            <iframe
              title="Embedded Video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${activeContent.videoId}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
