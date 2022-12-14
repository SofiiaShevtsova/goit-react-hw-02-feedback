import { css } from '@emotion/css';

const Section = props => {
  const { title, children } = props;
  return (
    <div>
      <h2
        className={css`
          font-size: 32px;
          margin-bottom: 20px;
          color: rgb(150, 50, 50);
        `}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Section;
