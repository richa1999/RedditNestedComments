import React, {useState} from 'react'
import AccordionItem from './AccordionItem'

const data = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework, created by Facebook in 2013 and is used for building user interfaces (UI) and single-page applications. It is a favorite among developers and engineers because it is fast and efficient.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers and developers because it is easy to learn and use. It is also very fast and efficient. It is used for developing single-page applications (SPAs) and mobile applications.'
    },
    {
        title: 'Anything else?',
        content: 'React is awesome and you should learn it! It is a great way to build user interfaces and single-page applications. It is also very fast and efficient. It is used for developing single-page applications (SPAs) and mobile applications.'
    }
]

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className='w-[50%] m-auto mt-3'>
        {data.map((item, index) => {
            return <AccordionItem 
                key={index}
                title={item.title} 
                body={item.content}
                isOpen={index === openIndex}
                setIsOpen={() => index === openIndex ? setOpenIndex(null) : setOpenIndex(index)}
            />
        })}
    </div>
  )
}

export default Accordion;