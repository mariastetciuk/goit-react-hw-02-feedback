// import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(item => {
        return (
          <li key={item}>
            <button type="button" onClick={onLeaveFeedback}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
