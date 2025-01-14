function FAQSection() {
  const faqs = [
    {
      question: "How can I make a donation?",
      answer:
        "You can donate through our secure online portal using a credit or debit card.",
    },
    {
      question: "Can I choose where my donation goes?",
      answer: "Yes, you can choose specific causes or cases to support.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, donations are tax-deductible to the extent permitted by law.",
    },
    {
      question: "How do I know my donation is being used properly?",
      answer:
        "We provide regular updates and reports on how donations are being used.",
    },
    {
      question: "Can I make a recurring donation?",
      answer: "Yes, you can set up recurring donations on a monthly basis.",
    },
  ];
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQSection;
