import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const feedback = event.target.innerText.toLowerCase();
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
    console.log(this.state);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((100 / this.countTotalFeedback()) * this.state.good).toFixed();
  };

  render() {
    return (
      <div className={css.container}>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          }
        />
        <Section
          title="Statistics"
          children={
            <>
              {this.countTotalFeedback() === 0 ? (
                <Notification message="There is no feedback" />
              ) : (
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.countTotalFeedback}
                  positivePercentage={this.countPositiveFeedbackPercentage}
                />
              )}
            </>
          }
        />
      </div>
    );
  }
}
