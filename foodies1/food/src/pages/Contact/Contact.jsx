import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section class="py-5 ">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="contact-form p-5 shadow-sm bg-white">
                    <h2 class="text-center mb-4">Get in Touch</h2>
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <input type="text" class="form-control custom-input" placeholder="First Name"/>
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control custom-input" placeholder="Last Name"/>
                            </div>
                            <div class="col-12">
                                <input type="email" class="form-control custom-input" placeholder="Email Address"/>
                            </div>
                            <div class="col-12">
                                <textarea class="form-control custom-input" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact