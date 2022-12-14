import { css } from '@emotion/css';
import { stylesList } from './styles';

const { Component } = require('react');

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getFeedback = event => {
    const elem = event.target.textContent.toLowerCase();
    this.setState(prevState => ({ [elem]: prevState[elem] + 1 }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return ((good / (good + neutral + bad)) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.getFeedback} />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(good, neutral, bad)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              good,
              neutral,
              bad
            )}
          />
        </Section>
      </>
    );
  }
}

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return !!good || !!neutral || !!bad ? (
    <ul
      className={css`
        ${stylesList.statisticsList}
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
        ${stylesList.message}
      `}
    >
      "There is no feedback"
    </p>
  );
};

const FeedbackOptions = props => {
  const { onLeaveFeedback } = props;
  return (
    <div
      className={css`
        ${stylesList.btnBox}
      `}
    >
      <button
        className={css`
          ${stylesList.btn}
        `}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={css`
          ${stylesList.btn}
        `}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={css`
          ${stylesList.btn}
        `}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

const Section = props => {
  const { title, children } = props;
  return (
    <div>
      <h2
        className={css`
          ${stylesList.titleStyle}
        `}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};
