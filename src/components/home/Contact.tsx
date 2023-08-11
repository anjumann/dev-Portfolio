import React from 'react'
import ContactForm from '../elements/ContactForm'

const Contact = () => {
    return (
        <div className='screen-width grid grid-cols-1 md:grid-cols-5 mt-20  ' >
            <div className="relative">
                <div className="section-heading">
                    Contact Me
                </div>
            </div>
            <div className=" py-2 px-6 col-span-4 font-rem  space-y-2 ">

                <div className="md:w-1/2 ">
                    <ContactForm />
                </div>

            </div>
        </div>
    )
}

export default Contact