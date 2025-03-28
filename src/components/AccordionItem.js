import React from 'react'

const AccordionItem = ({title, body, isOpen, setIsOpen}) => {
  return (
    <div className='border border-slate-300 rounded-md'>
        <div 
            className='font-bold p-2 bg-slate-200 flex justify-between cursor-pointer' 
            onClick={()=>{
                setIsOpen(isOpen => !isOpen);
            }}
        >
            <span>{title}</span>
            <span>{isOpen? '⬆️': '⬇️'}</span>
        </div>
        {isOpen && <div className='p-2'>{body}</div>}
    </div>
  )
}

export default AccordionItem;