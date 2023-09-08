import { Statistics } from './statistics/Statistics';
import { Section } from './Section/Section';
import {StatisticTitleError} from './statistics/Statistics.styled'
import React, { Component } from 'react';
import {Feedback} from './feedback/Feedback'
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = el => {
    this.setState(prevState => {
      return {
        [el.target.textContent.toLowerCase()]:
           prevState[el.target.textContent.toLowerCase()] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
   const options = Object.keys(this.state);
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <Feedback
            onFeedback={this.onClick}
            options={options}
          />
        </Section>

        <Section title={'Statistics'}>
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <StatisticTitleError>There is no feedback</StatisticTitleError>
          )}
        </Section>
      </div>
    );
  }
};
export default App;
