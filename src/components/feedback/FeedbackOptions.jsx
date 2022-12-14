import { css } from '@emotion/css';

const btn = `padding: 10px;
width: 25%;
font-size: 20px;
font-weight: 600;
border: 2px solid brown;
border-radius: 10px;
&:hover{
background-color: rgb(150, 50, 50);
color: rgb(255, 255, 255)`;
const FeedbackOptions = props => {
  const { onLeaveFeedback } = props;
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <button
        className={css`
          ${btn}
        `}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={css`
          ${btn}
        `}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={css`
          ${btn}
        `}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
