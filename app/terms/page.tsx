import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Use — Anahat Aura LLP",
  description: "Terms that apply to using the Anahat Aura LLP website.",
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="25 November 2026">
      <section>
        <p>
          These terms apply to your use of <strong>anahatone.com</strong>, the website of{" "}
          <strong>Anahat Aura LLP</strong> (LLPIN ACY-2870), a limited liability partnership registered in India. By
          using this website you agree to them. Our products, such as the <strong>Nuove</strong> app, have their own
          terms of service.
        </p>
      </section>

      <section>
        <h2>Use of the website</h2>
        <p>
          You may browse this website for personal and business information. Please do not misuse it, try to gain
          unauthorised access to it, or interfere with how it works.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The names Anahat Aura, Nuove and Anahata, together with the logos, text, images and design on this website,
          belong to Anahat Aura LLP or its licensors. You may not copy or reuse them without our written permission.
        </p>
      </section>

      <section>
        <h2>Information on this site</h2>
        <p>
          We try to keep the information here accurate and up to date, but it is provided &quot;as is&quot; and may
          change without notice. Bookings and product purchases are governed by the terms shown at the time you make
          them.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, Anahat Aura LLP is not liable for any indirect or consequential loss arising
          from your use of this website.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India, and the courts of Bengaluru, Karnataka have jurisdiction.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          <strong>Anahat Aura LLP</strong> · Bengaluru, Karnataka, India ·{" "}
          <a href="mailto:admin@anahatone.com">admin@anahatone.com</a> ·{" "}
          <a href="tel:+918041488280">+91 80414 88280</a>
        </p>
      </section>
    </LegalPage>
  )
}
