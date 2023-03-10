import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Quais são os principais benefícios de ter um site e aplicativo para meu negócio?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Quanto tempo leva para desenvolver um site e aplicativo?",
    answer: "Yes, this you can.",
  },
  {
    question: "Quais são os principais recursos necessários para desenvolver um site ou aplicativo?",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Como escolher a melhor plataforma para desenvolver meu projeto?",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
  {
    question: "Como garantir que meu site ou aplicativo seja seguro e protegido contra ameaças?",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
  {
    question: "Como obter suporte técnico para meu site ou aplicativo?",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
  {
    question: "Como garantir que meu site ou aplicativo seja acessível para usuários com necessidades especiais?",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];
