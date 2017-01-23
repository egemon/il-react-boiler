const Contact = ({ location }) => (
  <div>
    <h1>Contact</h1>
    {location.query.subject}
  </div>
);

Contact.propTypes = {
  location: React.PropTypes.shape({
    query: React.PropTypes.shape({
      subject: React.PropTypes.string,
    }),
  }).isRequired,
};

export default Contact;
