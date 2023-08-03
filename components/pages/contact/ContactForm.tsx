import { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [afterSubmit, setAfterSubmit] = useState('');

    const handleSubmit = async (event: any) => {

        event.preventDefault();

        setSubmitting(true);

        try {
            const response = await fetch("/api/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                event.target.reset();
                setAfterSubmit('success');
            } else {
                setAfterSubmit('fail');
                throw new Error("Form submission failed");
            }

        } catch (error) {
            setAfterSubmit('fail');
            console.log(error); // Failure message
        }

        // If request failed, display an error message for set amount of time
        afterSubmit === 'fail' && setTimeout(() => {
            setAfterSubmit('');
        }, 7000);
        // Re-enable form
        setSubmitting(false);
    };


    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center border-border border-2 lg:min-w-[48vw] lg:mb-12 lg:border-0 lg:border-r">
            <div className="min-w-[60vw] max-w-[80vw] px-0 py-16 lg:min-w-[30vw] lg:p-0 ">
                {afterSubmit === ''
                    ?
                    <form name="contact-form" id="contact-form" method="post" onSubmit={handleSubmit} className="leading-8">
                        <h2 className="mb-4 p-0 justify-start text-4xl font-bold font-bergen">{`Let's talk!`}</h2>
                        <label htmlFor="name">NAME</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            disabled={submitting}
                            className="block w-full py-1 px-3 border-2 border-border mb-2 hover:border-border-hover focus:border-border-selected outline-none"
                        />
                        <label htmlFor="email">EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            disabled={submitting}
                            className="block w-full py-1 px-3 border-2 border-border mb-2 hover:border-border-hover focus:border-border-selected outline-none"
                        />
                        <label htmlFor="message">MESSAGE</label>
                        <textarea
                            placeholder=""
                            name="message"
                            className="block w-full py-1 px-3 border-2 border-border max-h-[40vh] h-[30vh] overflow-y-auto mb-4 lg:max-w-[45vw] hover:border-border-hover focus:border-border-selected outline-none"
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={8}
                            maxLength={4000}
                            disabled={submitting}
                            required
                        >
                        </textarea>
                        <button
                            className="block w-24 h-10 text-btn-primary-active bg-btn-primary border-border border-2 text-base 
                            disabled:bg-bg-primary disabled:text-primary disabled:bg-[url('/icons/button-loading.svg')] disabled:animate-submit"
                            id="submit"
                            type="submit"
                            value="SUBMIT"
                            disabled={submitting}
                        >
                            SUBMIT
                        </button>
                    </form>
                    :
                    <div className="min-h-[50vh] flex items-center" role={afterSubmit}>
                        {afterSubmit === 'success'
                            ? <p className="p-16 items-center">Thank you for reaching out! Your message have been submitted successfully. I will get back to you shortly.</p>
                            : <p className="p-16">Oops! An error occurred while submitting the form. Please try again later.</p>
                        }
                    </div>
                }
            </div>

        </div>
    );
}

export default ContactForm;