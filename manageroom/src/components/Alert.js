import React, { useState } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

function Alert(props) {
  const [show, setShow] = useState(true);

  const {
    variant,
    dismissible,
    children,
    ...otherProps
  } = props;

  return (
    show && (
      <BootstrapAlert
        variant={variant}
        dismissible={dismissible}
        onClose={() => setShow(false)}
        {...otherProps}
      >
        {children}
      </BootstrapAlert>
    )
  )
}

export default Alert;