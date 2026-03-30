import PropTypes from 'prop-types';

export default function Notification({ message, visible }) {
  return (
    <div
      id="notification"
      className="notification"
      style={{ display: visible ? 'block' : 'none' }}
    >
      {message}
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};
