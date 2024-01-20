'use client'

import { PaperPlaneRight } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { FormEvent, useState } from 'react'

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
      return
    }

    setIsLoading(false)
    return ''
  }

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-2">
      <Input placeholder="Nome" className="bg-input" />
      <Input placeholder="Email" className="bg-input" />
      <Textarea
        placeholder="Mensagem"
        className="min-h-36 resize-none bg-input"
      />
      <Button className="mt-4 h-12 w-fit">
        Enviar mensagem <PaperPlaneRight className="ml-2 h-5 w-5" />
      </Button>
      <span>{statusMessage}</span>
    </form>
  )
}
