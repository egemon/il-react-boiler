import React from 'react';
import { FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

const Field = ({
  label,
  type,
  value,
  placeholder,
  onChange,
  help,
}) => (
  <div>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    <FormControl.Feedback />
    <HelpBlock>{help}</HelpBlock>
  </div>
);

Field.propTypes = {
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
  help: React.PropTypes.string,
};

Field.defaultProps = {
  label: '',
  type: 'text',
  value: '',
  placeholder: 'Please enter here',
  onChange: () => {},
  help: '',
};

export default Field;
