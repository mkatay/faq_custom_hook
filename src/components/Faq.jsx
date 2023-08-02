import React,{useState} from 'react'
import { questions } from '../data_faq'
import { Question } from './Question'
import { ListGroup } from 'reactstrap'


export const Faq = () => {
    const [faq,setFaq]=useState(questions)
    
  return (
    <div className='questions'>
      <ListGroup>
         {faq.map(obj=>
          <Question key={obj.id} {...obj} />
          )}
      </ListGroup>
      
    </div>
  )
}

