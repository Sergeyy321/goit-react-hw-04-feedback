import { Statistics } from './statistics/Statistics';
import { Section } from './Section/Section';
import {  useState } from 'react';
import {StatisticTitleError} from './statistics/Statistics.styled'
import React from 'react';
import {Feedback} from './feedback/Feedback'
export const App = ()=> {
 
  const[good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
let feedbacks = { good, neutral, bad };
 const onClick = (el) => {
    if (el === good) {
      setGood(good + 1);
    } else if (el === neutral) {
      setNeutral(neutral + 1);
    } else if (el === bad) {
      setBad(bad + 1);
    }
  };
 const  countTotalFeedback = () => {
    const total = Object.values(feedbacks).reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    return total;
  };
 const countPositiveFeedbackPercentage = () => {
  return good !== 0
    ? Math.round((good / countTotalFeedback()) * 100)
    : 0;
 };

  console.log(countPositiveFeedbackPercentage());
    const totalFeedback = countTotalFeedback();
  const options = Object.keys({ good, neutral, bad });
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <Feedback
            onFeedback={onClick}
            options={options}
          />
        </Section>

        <Section title={'Statistics'}>
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <StatisticTitleError>There is no feedback</StatisticTitleError>
          )}
        </Section>
      </div>
    );
  }

