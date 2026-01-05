import { Metadata } from "next";

export const metadata: Metadata = {
  title: "License",
  description: "TailAdmin Dashboard",
};
const Page = () => {
  return (
    <div className="blog-details">
      <p>This License ("License") is a legally binding agreement between you ("Licensee") and TailAdmin ("Licensor"). By purchasing the specific License, you agree to abide by the terms and conditions set forth in this License.</p>
      <h3>1. Starter License</h3>
      <ul>
        <li>Features Included:
          <ul>
            <li>Seats: 1</li>
            <li>Projects: 3 Projects</li>
            <li>Email Support: 6 Months</li>
            <li>All Pro Components</li>
            <li>No Figma Design Source</li>
            <li>Lifetime Free Updates</li>
            <li>Not Valid for SaaS End Product</li>
          </ul>
        </li>
      </ul>
      <h3>2. Business License</h3>
      <ul>
        <li>Features Included:
          <ul>
            <li>Seats: 3</li>
            <li>Projects: 10 Projects</li>
            <li>Email Support: 12 Months</li>
            <li>All Pro Components</li>
            <li>Figma Design Source</li>
            <li>Lifetime Free Updates</li>
            <li>Not Valid for SaaS End Product</li>
          </ul>
        </li>
      </ul>
      <h3>3. Extended License</h3>
      <ul>
        <li>Features Included:
          <ul>
            <li>Seats: 10</li>
            <li>Projects: Unlimited</li>
            <li>Email Support: 12 Months</li>
            <li>All Pro Components</li>
            <li>Figma Design Source</li>
            <li>Lifetime Free Updates</li>
            <li>Valid for SaaS End Product with Redistribution License</li>
          </ul>
        </li>
      </ul>
      <p>This set of license is applicable in same way for all TailAdmin versions such as - HTML, React.js, Next.js, and Vue.js</p>
      <p>Please note that this data is better formatted for readability on and understanding on <a href="https://tailadmin.com/pricing">pricing page</a> and you can use it as a reference for your licensing information.</p>
    </div>
  )
}

export default Page