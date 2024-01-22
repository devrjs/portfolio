'use client'

import { PaperPlaneRight } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import emailjs from '@emailjs/browser'
import { FormEvent, useState } from 'react'
import { Spinner } from './Spinner'

export function EmailForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  function sendEmail(event: FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    if (name === '' || email === '' || message === '') {
      setStatusMessage('Preencha todos os campos.')
      setIsLoading(false)
      return
    }

    const templatesParams = {
      from_name: name,
      message,
      email,
    }

    emailjs
      .send(
        'emailService',
        'template_cfrvb9g',
        templatesParams,
        'LHngrW1Z8rK-sC8q_',
      )
      .then(
        () => {
          setStatusMessage('Email enviado com sucesso!')
          setName('')
          setEmail('')
          setMessage('')
          setIsLoading(false)
        },
        () => {
          setStatusMessage('Erro ao enviar email.')
          setIsLoading(false)
        },
      )
  }

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-2">
      <Input
        placeholder="Nome"
        className="bg-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Input
        placeholder="Email"
        className="bg-input"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Textarea
        placeholder="Mensagem"
        className="min-h-36 resize-none bg-input"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button className="mt-4 h-12 w-48">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            Enviar mensagem <PaperPlaneRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
      <span
        className={`${
          statusMessage === 'Email enviado com sucesso!'
            ? 'text-green-400'
            : 'text-destructive'
        }`}
      >
        {statusMessage}
      </span>
    </form>
  )
}
