import { css } from '@emotion/css';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return !!good || !!neutral || !!bad ? (
    <ul
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        list-style: none;
        align-items: flex-start;
        font-size: 20px;
        color: brown;
      `}
    >
      <li className="stat__item">
        Good: <span>{good}</span>
      </li>
      <li className="stat__item">
        Neutral: <span>{neutral}</span>
      </li>
      <li className="stat__item">
        Bad: <span>{bad}</span>
      </li>
      <li className="stat__item">
        Total: <span>{total}</span>
      </li>
      <li className="stat__item">
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  ) : (
    <p
      className={css`
        font-size: 24px;
        color: rgb(150, 50, 50);
      `}
    >
      "There is no feedback"
    </p>
  );
};

export default Statistics;
