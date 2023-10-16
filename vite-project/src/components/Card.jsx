import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Card = ({ username = 'John', post = 'Frontend engineer', myArr }) => {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I&#39;ve seen scale on
              large teams. It&#39;s easy to customize, adapts to any design, and
              the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username || myArr}
            </div>
            <div className="text-slate-700 dark:text-slate-500">{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

Card.propTypes = {
  username: PropTypes.string,
  post: PropTypes.string,
  myArr: PropTypes.object,
};

export default Card;
