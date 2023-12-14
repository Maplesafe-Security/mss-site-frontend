import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ onChange }) => {
    return (
        <ReCAPTCHA
          sitekey="6Ld2vTApAAAAAL5Pc_l_41loK6gQqueHKxLYBLok"  // Use "siteKey" instead of "sitekey"
          onChange={onChange}
        />
  );
};

export default Recaptcha;