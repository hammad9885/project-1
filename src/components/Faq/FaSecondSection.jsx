import React, { useState } from 'react';

function FaSecondSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How do roofing work plans?',
      answer: 'Roofing work plans define steps, materials, timing, and safety to complete roofing properly and on time.',
    },
    {
      question: 'What are the main types of roofing systems?',
      answer:
        'Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.',
    },
    {
      question: 'Taking Seamless Key Performance Indicators?',
      answer: 'Seamless Key Performance Indicators track smooth business performance, ensuring goals are met efficiently and effectively.',
    },
    {
      question: 'Missing Construction Project Program',
      answer: 'Missing Construction Project Program causes delays, budget issues, miscommunication, and disrupts overall project workflow.',
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="my-9">
            <img src="/ei4.jpg" alt="Roofing" className="w-full h-96 object-cover" />
          </div>

          {/* FAQ Section */}
          <div class="bg-white p-8 rounded shadow">
    <h2 class="text-green-500 text-lg font-semibold mb-4">
     QUESTIONS FOR US
    </h2>
    <h3 class="text-2xl font-bold mb-6">
     Some Faq Question?
    </h3>
          <div className="font-sans">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <div
                  className="font-bold cursor-pointer text-lg"
                  onClick={() => toggleAnswer(index)}
                >
                  {item.question}
                </div>
                {activeIndex === index && (
                  <div className="pt-2 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaSecondSection;
