import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <h3>{message}</h3>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
