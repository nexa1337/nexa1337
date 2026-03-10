export function Terms() {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to NEXA1337. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
          <p className="mb-4">
            NEXA1337 provides digital marketing, web development, and AI automation services. We reserve the right to modify or discontinue any service at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
          <p className="mb-4">
            You agree to use our services only for lawful purposes. You must not use our website or services to transmit any harmful code or interfere with the operation of our systems.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            All content, trademarks, and data on this website are the property of NEXA1337 or its licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            NEXA1337 shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at Support@nexa1337.com.
          </p>
        </div>
      </div>
    </div>
  );
}
