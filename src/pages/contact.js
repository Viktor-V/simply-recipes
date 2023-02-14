import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get InTouch</h3>
            <p>
              Sus copper mug austin ugh vibecession messenger bag plaid. Bitters
              lomo readymade tilde lumbersexual echo park kogi blue bottle.
              Jianbing locavore vinyl subway tile, gentrify ugh glossier pork
              belly jean shorts shaman post-ironic portland humblebrag.
            </p>
            <p>
              90's woke you probably haven't heard of them flannel jean shorts
              kogi knausgaard pickled. 3 wolf moon four loko PBR&B trust fund
              edison bulb coloring book.
            </p>
            <p>
              Kitsch put a bird on it hell of slow-carb. Raclette occupy banh mi
              retro ascot before they sold out mustache same migas +1 kinfolk
              knausgaard kombucha readymade VHS.
            </p>
          </article>
          <article>
            <form action="https://formspree.io/f/xlekjvzv" method="POST" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
