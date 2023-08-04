import { useState } from 'react';

interface Status {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: string | null };
}

interface Inputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState<Inputs>({
    name: '',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: msg },
      });
      // Reset submitted to render the form again
      setTimeout(() => {
        setStatus((prevStatus) => ({
          ...prevStatus,
          submitted: false,
        }));
      }, 7000);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus((prevStatus) => ({
      // submitted: false,
      ...prevStatus,
      submitting: false,
      info: { error: false, msg: null },
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      // Make the POST request to the API route
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      if (response.ok) {
        handleServerResponse(
          true,
          'Thank you for reaching out to us! Your message has been successfully submitted.'
        );
      } else {
        handleServerResponse(
          false,
          'Sorry, there was an issue with submitting your message. Please try again later.'
        );
      }
    } catch (error) {
      handleServerResponse(
        false,
        'Sorry, there was an issue with submitting your message. Please try again later.'
      );
    }
  };

  return (
    <div className='flex h-screen w-full flex-wrap items-center justify-center border-2 border-border lg:mb-12 lg:min-w-[48vw] lg:border-0 lg:border-r'>
      <div className='w-3/4 px-0 py-16'>
        {!status.submitted ? (
          <form
            name='contact-form'
            id='contact-form'
            method='post'
            onSubmit={handleSubmit}
            className='leading-8'
          >
            <h2 className='mb-4 justify-start font-bergen text-4xl font-bold'>{`Let's talk!`}</h2>
            <label htmlFor='name'>NAME</label>
            <input
              type='text'
              id='name'
              value={inputs.name}
              onChange={handleChange}
              required
              disabled={status.submitting}
              className='mb-2 block w-full border-2 border-border px-3 py-1 outline-none hover:border-border-hover focus:border-border-selected'
            />
            <label htmlFor='email'>EMAIL</label>
            <input
              type='email'
              id='email'
              value={inputs.email}
              onChange={handleChange}
              required
              disabled={status.submitting}
              className='mb-2 block w-full border-2 border-border px-3 py-1 outline-none hover:border-border-hover focus:border-border-selected'
            />
            <label htmlFor='message'>MESSAGE</label>
            <textarea
              placeholder=''
              name='message'
              className='mb-4 block h-[30vh] max-h-[40vh] w-full overflow-y-auto border-2 border-border px-3 py-1 outline-none hover:border-border-hover focus:border-border-selected lg:max-w-[45vw]'
              id='message'
              value={inputs.message}
              onChange={handleChange}
              rows={8}
              maxLength={4000}
              disabled={status.submitting}
              required
            ></textarea>
            <button
              className="block h-10 w-24 border-2 border-border bg-btn-primary text-base text-btn-primary-active 
                            disabled:animate-submit disabled:bg-bg-primary disabled:bg-[url('/icons/button-loading.svg')] disabled:text-primary"
              id='submit'
              value='SUBMIT'
              disabled={status.submitting}
            >
              SUBMIT
            </button>
          </form>
        ) : (
          <div className='flex min-h-[50vh] items-center justify-center text-lg'>
            {!status.info.error ? (
              <p className='p-12'>
                Thank you for reaching out! Your message have been submitted
                successfully. I will get back to you shortly.
              </p>
            ) : (
              <p className='p-12'>
                Oops! An error occurred while submitting the form. Please try
                again later.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
