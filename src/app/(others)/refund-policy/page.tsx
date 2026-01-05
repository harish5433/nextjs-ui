import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "TailAdmin Dashboard",
};
const Page = () => {
  return (
    <div className="blog-details">
      <h2 id="overview">Overview</h2>
      <p>When you purchase TailAdmin through Paddle, Paddle acts as the <strong>merchant of record</strong>. This means Paddle manages payments, taxes, subscriptions, cancellations, and refunds according to Paddle’s buyer terms.</p>
      <h3>Cancellation Rights</h3>
      <p>If you are a <strong>consumer</strong> (purchasing for personal, non-business use), you may have a legal right to cancel your purchase within <strong>14 days</strong> of the transaction and receive a refund.</p>
      <p>This right may no longer apply once the digital product has been <strong>downloaded or used</strong>, as allowed under applicable consumer laws.</p>
      <h3>Refund Requests</h3>
      <p>All refund requests must be submitted through <strong>Paddle’s support system</strong> (via paddle.net) or using the support link provided in your Paddle receipt email.</p>
      <p>Refunds are reviewed <strong>case by case</strong> by Paddle and may be approved or declined based on eligibility under Paddle’s terms.</p>
      <h3>When Refunds May Be Granted</h3>
      <p>A refund may be considered if:</p>
      <ul>
        <li>The product <strong>does not work as described</strong> and the issue cannot be resolved after reasonable support efforts.</li>
        <li>There is <strong>confirmed fraud</strong> associated with the purchase.</li>
        <li>The request is submitted <strong>within 14 days of purchase</strong> (this aligns with TailAdmin’s internal policy and Paddle’s practical processing window).</li>
      </ul>
      <h3>When Refunds Are Not Granted</h3>
      <p>Refunds are generally not provided if:</p>
      <ul>
        <li>You <strong>changed your mind</strong> after purchasing.</li>
        <li>You <strong>decide not to use</strong> the product.</li>
        <li>The issue is due to <strong>lack of technical skill or incorrect configuration</strong>.</li>
        <li>A <strong>chargeback or payment dispute</strong> was opened before contacting support.</li>
        <li>The product has already been <strong>downloaded or used</strong>, which may void statutory cancellation rights.</li>
      </ul>
      <h3>Refund Processing</h3>
      <p>Approved refunds are issued by Paddle to the <strong>original payment method</strong> and are subject to Paddle’s processing rules, including payment method and transaction age limitations.</p>
      <h3>How to Request a Refund</h3>
      <p>To request a refund:</p>
      <ul>
        <li>Visit the Paddle support portal at <strong>paddle.net</strong>, or</li>
        <li>Contact TailAdmin support within <strong>14 days of purchase</strong> and include your order details.</li>
      </ul>
    </div>
  )
}

export default Page