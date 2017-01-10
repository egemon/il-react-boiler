const Contact = ({location}) => (
  <div>
    <h1>Contact</h1>
    {location.query.subject}
  </div>
);

export default Contact;
