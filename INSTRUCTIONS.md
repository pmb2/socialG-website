Perfect. Here's a **clear, developer-friendly prompt** you can give to your AI coding assistant to implement your Formspree form (`https://formspree.io/f/mblkzdpo`) directly into your AWS Amplify-connected website:

---

### 🧠 Prompt for Your AI Coding Assistant:

> Implement the following changes to my AWS Amplify-connected web app:
>
> 1. Replace or update the existing contact form so that it submits via POST to this Formspree endpoint:
     >
     >    ```
>    https://formspree.io/f/mblkzdpo
>    ```
> 2. Ensure the form contains these fields (all should be `name=""` attributes to match exactly):
     >
     >    * `full_name`
>    * `email`
>    * `company`
>    * `phone`
>    * `locations`
>    * `message`
> 3. The form should have basic input validation (e.g., `required` on name and email).
> 4. Upon successful submission:
     >
     >    * Show a success message or thank-you alert.
>    * Optionally clear the form.
> 5. Make sure it works without needing a backend (static HTML or JavaScript only).
>
> Use this basic structure as a starting point:
>
> ```html
> <form action="https://formspree.io/f/mblkzdpo" method="POST">
>   <input type="text" name="full_name" placeholder="Full Name" required />
>   <input type="email" name="email" placeholder="Email" required />
>   <input type="text" name="company" placeholder="Company" />
>   <input type="tel" name="phone" placeholder="Phone Number" />
>   <input type="text" name="locations" placeholder="Number of Locations" />
>   <textarea name="message" placeholder="Your message"></textarea>
>   <button type="submit">Submit</button>
> </form>
> ```
>
> Style it to match the existing site design. If the current site uses React, convert this into a React form component with `fetch()` submission instead of default `form` action behavior. Otherwise, keep it simple as HTML.

---

 if you're using **React, Next.js, Vue, or plain HTML**, give the properly tailored code blocks
