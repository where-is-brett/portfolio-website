import { useState } from "react"

interface Status {
    submitted: boolean
    submitting: boolean
    info: { error: boolean; msg: string | null }
}

interface Inputs {
    name: string
    email: string
    message: string
}

const ContactForm = () => {
    const [status, setStatus] = useState<Status>({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    })
    const [inputs, setInputs] = useState<Inputs>({
        name: '',
        email: '',
        message: '',
    })
    const handleServerResponse = (ok: boolean, msg: string) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                email: '',
                message: '',
            })
        } else {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: true, msg: msg },
            })
            // Reset submitted to render the form again 
            setTimeout(() => {
                setStatus((prevStatus) => ({
                    ...prevStatus,
                    submitted: false
                }))
            }, 7000);

        }
    }
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        e.persist()
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
        setStatus((prevStatus) => ({
            // submitted: false,
            ...prevStatus,
            submitting: false,
            info: { error: false, msg: null },
        }))
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

        try {
            // Make the POST request to the API route
            const response = await fetch("/api/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(inputs),
            });
            if (response.ok) {
                handleServerResponse(
                    true,
                    'Thank you for reaching out to us! Your message has been successfully submitted.'
                )
            } else {
                handleServerResponse(
                    false,
                    'Sorry, there was an issue with submitting your message. Please try again later.'
                )
            }
        } catch (error) {
            handleServerResponse(
                false,
                'Sorry, there was an issue with submitting your message. Please try again later.'
            )
        }
    }


    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center border-border border-2 lg:min-w-[48vw] lg:mb-12 lg:border-0 lg:border-r">
            <div className="w-3/4 px-0 py-16">
                {!status.submitted
                    ?
                    <form name="contact-form" id="contact-form" method="post" onSubmit={handleSubmit} className="leading-8">
                        <h2 className="mb-4 justify-start text-4xl font-bold font-bergen">{`Let's talk!`}</h2>
                        <label htmlFor="name">NAME</label>
                        <input
                            type="text"
                            id="name"
                            value={inputs.name}
                            onChange={handleChange}
                            required
                            disabled={status.submitting}
                            className="block w-full py-1 px-3 border-2 border-border mb-2 hover:border-border-hover focus:border-border-selected outline-none"
                        />
                        <label htmlFor="email">EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            value={inputs.email}
                            onChange={handleChange}
                            required
                            disabled={status.submitting}
                            className="block w-full py-1 px-3 border-2 border-border mb-2 hover:border-border-hover focus:border-border-selected outline-none"
                        />
                        <label htmlFor="message">MESSAGE</label>
                        <textarea
                            placeholder=""
                            name="message"
                            className="block w-full py-1 px-3 border-2 border-border max-h-[40vh] h-[30vh] overflow-y-auto mb-4 lg:max-w-[45vw] hover:border-border-hover focus:border-border-selected outline-none"
                            id="message"
                            value={inputs.message}
                            onChange={handleChange}
                            rows={8}
                            maxLength={4000}
                            disabled={status.submitting}
                            required
                        >
                        </textarea>
                        <button
                            className="block w-24 h-10 text-btn-primary-active bg-btn-primary border-border border-2 text-base 
                            disabled:bg-bg-primary disabled:text-primary disabled:bg-[url('/icons/button-loading.svg')] disabled:animate-submit"
                            id="submit"
                            value="SUBMIT"
                            disabled={status.submitting}
                        >
                            SUBMIT
                        </button>
                    </form>
                    :
                    <div className="min-h-[50vh] flex justify-center items-center text-lg">
                        {!status.info.error
                            ? <p className="p-12">Thank you for reaching out! Your message have been submitted successfully. I will get back to you shortly.</p>
                            : <p className="p-12">Oops! An error occurred while submitting the form. Please try again later.</p>
                        }
                    </div>
                }
            </div>

        </div>
    );
}

export default ContactForm;