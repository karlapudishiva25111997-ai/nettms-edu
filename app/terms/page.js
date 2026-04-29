export const metadata = {
  title: 'Terms & Conditions — Nettms Education',
  description: 'Terms and Conditions of Nettms Education. Please read these terms carefully before enrolling in any of our courses.',
}

export default function TermsPage() {
  return (
    <section style={{ background: '#f8faf7', padding: '80px 40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ background: '#1C2213', borderRadius: '16px', padding: '40px', marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 42px)', color: '#fff', fontWeight: '700', marginBottom: '12px' }}>
            Terms & Conditions
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
            Last updated: April 2025 &nbsp;|&nbsp; Nettms Education
          </p>
        </div>

        {/* Content */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #eef0ec', lineHeight: '1.8', color: '#444' }}>

          <p style={{ marginBottom: '24px', fontSize: '15px' }}>
            Welcome to Nettms Education. By enrolling in our courses or using our website <strong>nettmsedu.in</strong>, you agree to be bound by the following Terms and Conditions. Please read them carefully before proceeding.
          </p>

          {/* Section 1 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '15px' }}>
            By accessing our website or enrolling in any course offered by Nettms Education, you confirm that you have read, understood and agreed to these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
          </p>

          {/* Section 2 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            2. Course Enrollment
          </h2>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', fontSize: '15px' }}>
            <li style={{ marginBottom: '8px' }}>Enrollment is confirmed only upon receipt of the course fee or first EMI installment.</li>
            <li style={{ marginBottom: '8px' }}>Nettms Education reserves the right to accept or reject any enrollment application.</li>
            <li style={{ marginBottom: '8px' }}>Batch schedules and timings are subject to change. We will notify enrolled students of any changes with reasonable advance notice.</li>
            <li style={{ marginBottom: '8px' }}>Course content and curriculum may be updated to reflect current industry standards without prior notice.</li>
            <li style={{ marginBottom: '8px' }}>Students must attend a minimum of 75% of classes to be eligible for the completion certificate and placement support.</li>
          </ul>

          {/* Section 3 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            3. Fee Payment & EMI
          </h2>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', fontSize: '15px' }}>
            <li style={{ marginBottom: '8px' }}>Course fees must be paid as per the agreed payment schedule at the time of enrollment.</li>
            <li style={{ marginBottom: '8px' }}>EMI payments must be made on time. Delayed payments may result in suspension from the course until dues are cleared.</li>
            <li style={{ marginBottom: '8px' }}>All fees are quoted in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</li>
            <li style={{ marginBottom: '8px' }}>Nettms Education reserves the right to revise course fees for new batches. Enrolled students will not be affected by fee revisions during their ongoing course.</li>
          </ul>

          {/* Section 4 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            4. Refund Policy
          </h2>
          <div style={{ background: '#fff8f0', border: '1px solid #F97316', borderRadius: '10px', padding: '20px', marginBottom: '16px' }}>
            <p style={{ margin: '0', fontSize: '15px', color: '#1C2213' }}>
              <strong>⚠️ Please read our refund policy carefully before enrolling.</strong>
            </p>
          </div>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', fontSize: '15px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Before Course Start (7+ days):</strong> A partial refund of 50% of the course fee will be issued if cancellation is requested at least 7 days before the batch start date.</li>
            <li style={{ marginBottom: '8px' }}><strong>Before Course Start (Less than 7 days):</strong> No refund will be issued for cancellations made within 7 days of the batch start date.</li>
            <li style={{ marginBottom: '8px' }}><strong>After Course Start:</strong> No refund will be issued once the course has commenced, regardless of attendance.</li>
            <li style={{ marginBottom: '8px' }}><strong>Demo Class:</strong> The free demo class is fully refundable if you choose not to enroll after attending.</li>
            <li style={{ marginBottom: '8px' }}>Refund requests must be submitted in writing to <strong>info@nettmsedu.in</strong></li>
            <li style={{ marginBottom: '8px' }}>Approved refunds will be processed within 7-10 business days to the original payment method.</li>
          </ul>

          {/* Section 5 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            5. Placement Support
          </h2>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', fontSize: '15px' }}>
            <li style={{ marginBottom: '8px' }}>Nettms Education provides placement assistance but does not guarantee job placement.</li>
            <li style={{ marginBottom: '8px' }}>Placement support includes resume building, mock interviews, LinkedIn profile optimization and referrals to hiring partners.</li>
            <li style={{ marginBottom: '8px' }}>Students must maintain a minimum attendance of 75% and complete all assignments and projects to be eligible for placement support.</li>
            <li style={{ marginBottom: '8px' }}>The salary packages mentioned on our website are indicative ranges based on past student placements and are not guaranteed.</li>
          </ul>

          {/* Section 6 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            6. Certificate
          </h2>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', fontSize: '15px' }}>
            <li style={{ marginBottom: '8px' }}>A completion certificate will be issued by Nettms Education upon successful completion of the course.</li>
            <li style={{ marginBottom: '8px' }}>The certificate is subject to minimum attendance requirements and completion of the capstone project.</li>
            <li style={{ marginBottom: '8px' }}>Students with outstanding fees will not receive their certificate until full payment is made.</li>
          </ul>

          {/* Section 7 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            7. Student Conduct
          </h2>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', fontSize: '15px' }}>
            <li style={{ marginBottom: '8px' }}>Students are expected to maintain respectful conduct towards trainers, staff and fellow students.</li>
            <li style={{ marginBottom: '8px' }}>Any form of harassment, discrimination or disruptive behavior will result in immediate termination from the course without refund.</li>
            <li style={{ marginBottom: '8px' }}>Recording of classes without prior permission from the trainer is strictly prohibited.</li>
            <li style={{ marginBottom: '8px' }}>Sharing of course materials with non-enrolled individuals is not permitted.</li>
          </ul>

          {/* Section 8 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            8. Intellectual Property
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '15px' }}>
            All course materials, content, presentations, videos and resources provided by Nettms Education are the intellectual property of Nettms Education / Nettms Urban Habitat. Students are granted a limited, non-transferable license to use these materials for personal learning purposes only. Any reproduction, distribution or commercial use of our materials is strictly prohibited.
          </p>

          {/* Section 9 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            9. Limitation of Liability
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '15px' }}>
            Nettms Education shall not be liable for any indirect, incidental, special or consequential damages arising from your use of our services or inability to use our services. Our total liability shall not exceed the course fee paid by the student.
          </p>

          {/* Section 10 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            10. Modifications to Terms
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '15px' }}>
            Nettms Education reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted on this page with a revised date. Continued use of our services after any changes constitutes your acceptance of the new terms.
          </p>

          {/* Section 11 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            11. Governing Law
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '15px' }}>
            These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
          </p>

          {/* Section 12 */}
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#1C2213', fontWeight: '700', marginBottom: '12px', marginTop: '32px' }}>
            12. Contact Us
          </h2>
          <p style={{ marginBottom: '12px', fontSize: '15px' }}>For any questions about these Terms and Conditions, please contact us:</p>
          <div style={{ background: '#f8faf7', borderRadius: '10px', padding: '20px', marginTop: '12px', fontSize: '15px' }}>
            <p style={{ margin: '0 0 6px' }}><strong>Nettms Education</strong></p>
            <p style={{ margin: '0 0 6px' }}>504, Vamshi Estates, Opp. Value Zone Mall,</p>
            <p style={{ margin: '0 0 6px' }}>Punjagutta Officers Colony, Ameerpet,</p>
            <p style={{ margin: '0 0 6px' }}>Hyderabad, Telangana — 500082</p>
            <p style={{ margin: '0 0 6px' }}>📞 +91 9963384555</p>
            <p style={{ margin: '0' }}>✉️ info@nettmsedu.in</p>
          </div>

        </div>
      </div>
    </section>
  )
}