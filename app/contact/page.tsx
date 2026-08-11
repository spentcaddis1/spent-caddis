export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Spent Caddis</h1>

      <p className="text-lg mb-8">
        Have a question about our fly tying materials or an order? We’d love to hear from you.
      </p>

      <div className="rounded-lg border p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Get in Touch
        </h2>

        <p className="mb-6">
          Send us a message and we’ll get back to you as soon as possible.
        </p>

        <p className="mb-4">
          Email:{" "}
          <a
            href="mailto:info@spentcaddis.com"
            className="font-semibold underline"
          >
            info@spentcaddis.com
          </a>
        </p>

        <a
          href="mailto:info@spentcaddis.com"
          className="inline-block rounded-lg border px-6 py-3 font-semibold hover:bg-gray-100"
        >
          Email Us
        </a>
      </div>
    </main>
  );
}