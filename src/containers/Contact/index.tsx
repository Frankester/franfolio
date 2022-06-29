import { useState } from 'react'
import { Section } from '../../Globalstyles'
import { DetailsContact } from './styles'
import { useLanguage } from '@contexts/LanguageContext'
import { VITE_SERVICE_ID, VITE_SERVICE_PUBLIC_KEY, VITE_SERVICE_TEMPLATE_ID } from '../../data/env'
import { english, spanish } from '../../data/languages'

import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface fieldsType {
  fromEmail: string, title: string, message: string
}

function Contact(){
  const { language } = useLanguage()
  const defaultState: fieldsType = { fromEmail: '', title: '', message: '' }
  const [fields, setFileds] = useState<fieldsType>(defaultState)


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault()

    const templateParams = {
      fromEmail: fields.fromEmail,
      message: fields.message,
      title: fields.title
    }

    emailjs.send(VITE_SERVICE_ID, VITE_SERVICE_TEMPLATE_ID, templateParams, VITE_SERVICE_PUBLIC_KEY)
      .then(() => {
        toast.success(language ? english.toast.success : spanish.toast.success,{
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }).catch(err => {
        console.error(err)
        toast.error(language ? english.toast.error : spanish.toast.error,{
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })


    setFileds(defaultState)
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileds(currentFields => ({ ...currentFields,fromEmail: e.target.value }))
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileds(currentFields => ({ ...currentFields, title: e.target.value }))
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFileds(currentFields => ({ ...currentFields, message: e.target.value }))
  }

  return(
    <Section id='contact'>
      <h2>{language ? english.sections[1] : spanish.sections[1]}</h2>

      <DetailsContact onSubmit={handleSubmit}>
        <label>
          <p>
            {language ? english.fromSection.emailFiled.name : spanish.fromSection.emailFiled.name}
          </p>
          <input
            type='email'
            name='fromEmail'
            placeholder={language ? english.fromSection.emailFiled.example : spanish.fromSection.emailFiled.example}
            value={fields.fromEmail}
            onChange={handleChangeEmail}
            autoComplete='email'
            required
          />
        </label>

        <label>
          <p>
            {language ? english.fromSection.titleFiled.name : spanish.fromSection.titleFiled.name}
          </p>
          <input
            type='text'
            name='title'
            placeholder={
              language ? english.fromSection.titleFiled.example : spanish.fromSection.titleFiled.example
            }
            value={fields.title}
            onChange={handleChangeTitle}
            required
          />
        </label>

        <textarea
          name='message'
          placeholder={
            language ? english.fromSection.messageFiled.example : spanish.fromSection.messageFiled.example
          }
          value={fields.message}
          onChange={handleChangeMessage}
          required
        ></textarea>

        <button>
          {language ? english.fromSection.buttonSend : spanish.fromSection.buttonSend}
        </button>
      </DetailsContact>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Section>
  )
}

export default Contact