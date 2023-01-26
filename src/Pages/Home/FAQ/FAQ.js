import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQ = () => {

    const faqs = [
        {
            question: 'How can i Register?',
            answer: 'Please Click bellow link to register your organization.Register'
        },
        {
            question: 'How can i pay my monthly subscription?',
            answer: 'You can pay through MFS(Bkash,Nagad) and also can pay by debit and cradit card.'
        },
        {
            question: 'Can i get free subscription?',
            answer: 'Yes, You can enjoy one month free subscription.click the below link to enjoy free subscription. Register'
        },
    ]

    return (
        <section className='my-[100px] container mx-auto'>
            <div className='text-center mb-[60px]'>
                <h2 className='text-[28px] font-semibold mb-2'>Frequently Asked Questions</h2>
            </div>
            <div className='max-w-[1000px] mx-auto px-5'>
                <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                    {
                        faqs.map((faq, i) => (
                            <AccordionItem key={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        {faq.question}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        {faq.answer}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;