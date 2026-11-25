import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy — Anahat Aura LLP",
  description: "How Anahat Aura LLP collects, uses and protects personal information.",
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="25 November 2026">
      <section>
        <p>
          This Privacy Policy explains how <strong>Anahat Aura LLP</strong> (LLPIN ACY-2870), a limited liability
          partnership registered in India (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), handles personal
          information when you visit <strong>anahatone.com</strong> or contact us. Each of our products, such as the{" "}
          <strong>Nuove</strong> app, also has its own privacy policy that describes the data that product uses.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <ul>
          <li>Details you send us, such as your name, email address, phone number and message, when you email or call us.</li>
          <li>Booking and stay details when you reserve one of our hospitality properties.</li>
          <li>Basic, anonymous usage data about this website (pages visited, browser and device type) collected through Vercel Analytics, which does not use cookies.</li>
        </ul>
      </section>

      <section>
        <h2>How we use it</h2>
        <ul>
          <li>To reply to your enquiries and provide the services you ask for.</li>
          <li>To manage bookings, partnerships and customer support.</li>
          <li>To keep this website secure and improve how it works.</li>
          <li>To meet our legal and tax obligations.</li>
        </ul>
        <p className="mt-3">We do not sell your personal information.</p>
      </section>

      <section>
        <h2>Sharing</h2>
        <p>
          We share information only with service providers who help us run our business (for example hosting, email
          and booking platforms), under confidentiality obligations, or when the law requires it.
        </p>
      </section>

      <section>
        <h2>Retention and security</h2>
        <p>
          We keep personal information only as long as needed for the purposes above or as required by law, and we use
          reasonable technical and organisational measures to protect it.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Under India&apos;s Digital Personal Data Protection Act, 2023 and other applicable laws, you can ask to
          access, correct or delete your personal information, or withdraw consent. Email{" "}
          <a href="mailto:admin@anahatone.com">admin@anahatone.com</a> and we will respond within 30 days.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>We may update this policy from time to time and will change the date at the top when we do.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          <strong>Anahat Aura LLP</strong>
          <br />
          Bengaluru, Karnataka, India
          <br />
          Email: <a href="mailto:admin@anahatone.com">admin@anahatone.com</a>
          <br />
          Phone: <a href="tel:+918041488280">+91 80414 88280</a>
        </p>
      </section>
    </LegalPage>
  )
}
