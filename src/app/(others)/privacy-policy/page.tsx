import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TailAdmin Dashboard",
};
const Page = () => {
  return (
    <div className="blog-details"><h2 id="general-information">General Information</h2>
      <p>All of our registered users information ( Name, Email, Phone Number &amp; Address ) are secure to us. We are committed to taking care of all information and we are promised to our customers that we are never going to share their information with anyone.</p>
      <p>Also, We do not store any credit card information in server, all payments are processed by world leading payment gateway PayPal and Paddle and our site is secured by SSL encryption.</p>
      <h2 id="what-rights-you-have-over-your-data">What rights you have over your data</h2>
      <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
    </div>
  )
}

export default Page