import React from 'react'; 
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsLetter from '../newsletter/NewsLetter';

const MailChimpForm = () => {

    const postUrlMailChimp: string = `${process.env.REACT_APP_MAILCHIMP_HOST}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
    <MailchimpSubscribe
        url={postUrlMailChimp}
        render={({ subscribe, status, message }) => (
          <NewsLetter
            status={status}
            message={message}
            onValidated={(formData:any) => subscribe(formData)}
            />
        )}
        />
    </>
  )
}

export default MailChimpForm