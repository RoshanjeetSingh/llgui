import React from 'react'
import '../ContentSection/content.css';

const Content2 = ({ title, content, imageUrl, reverse }) => {
  return (
    <div className='Content'>

    <section className={`content-section ${reverse ? 'reverse' : ''}`}>
      {imageUrl && (
        <div className="content-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="content-text">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
      </div>
  );
};
export default Content2
