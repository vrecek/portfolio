import React from 'react'
import AppendResult from '../../../functions/AppendText'
import Button from '../../Common/Button'
import InputDiv from './InputDiv'
import TextArea from './TextArea'

const Form = () => {
   const isMailCorrect = (mail: string): boolean => {
      const regex: RegExp = /^\S+@\S+\.\S+/i
      
      return regex.test(mail)
   }

   const incorrectHandle = (msg: string, append: HTMLElement): void => {
      const at: AppendResult = new AppendResult('h6', 'error')
      at.setMessage = msg
      at.appendTo(append, 2)
   }

   const submitMail = (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement

      const values: string[] = []
      const errMsgs: string[] = ['Please enter your name', 'Please enter your mail address', 'Please specify subject', 'Message textarea cannot be empty']
      const elements: HTMLInputElement[] = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)

      for(let i = 0; i < elements.length - 1; i++) {
         const { value } = elements[i]

         if(!value) {
            incorrectHandle(errMsgs[i], elements[i].parentElement!)
            return
         }

         if(i === 1 && !isMailCorrect(value)) {
            incorrectHandle('Mail address is incorrect', elements[i].parentElement!)
            return
         }

         values.push(value)
      }

      console.log(values)
   }

   return (
      <form onSubmit={ submitMail } className="mail-form">

         <div className="div-wrap">

            <InputDiv text='Name' />
            <InputDiv text='Mail' />

         </div>

         <InputDiv text='Subject' />

         <TextArea />

         <Button text='Send a message' />

      </form>
   )
}

export default Form