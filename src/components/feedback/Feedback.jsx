import PropTypes from 'prop-types';

import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';

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

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
