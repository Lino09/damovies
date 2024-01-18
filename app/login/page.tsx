'use client'
import Input from "@/components/Input";
import { FormEvent, useState } from "react";
import Button from "@/components/Button"
import { everyArg } from "@/utils/helpers";
import { authService } from "@/services/authService";
import { useRouter } from 'next/navigation'


export default function Login() {

  const router = useRouter()

  const [formData, setFormData] = useState({mail:'', password:'',termsAndConditions: false})

  const onChangeFormData = (name:string, value:string | boolean) => setFormData({...formData, [name]: value})

  const submit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const data = await authService.login()
      const {guest_session_id} = data
      document.cookie = `userSession=${guest_session_id}; max-age=3600`
      router.push('/')

  
    }catch(err){
      console.log(err)
    }
  }

  return (
    <main className="bg-dacolors-bgc text-white px-4 lg:px-36 pt-20 pb-24">
      <h1 className="text-3xl font-semibold">Login</h1>
      <span>Bienvenido!</span>
      <form className="max-w-2xl w-full flex flex-col gap-12 mt-20" onSubmit={submit}>
        <Input type="mail" label="Correo electrónico de DaCodes" name="mail" onChange={onChangeFormData} value={formData.mail} />
        <Input type="password" label="Contraseña" name="password" onChange={onChangeFormData} value={formData.password} />
        <Input type="checkbox" label="He leido y acepto los términos y condiciones" name="termsAndConditions" onChange={onChangeFormData} checked={formData.termsAndConditions} />
        <Button type="submit" variant="primary" disabled={!everyArg(...Object.values(formData))} >Crear cuenta</Button>
      </form>
    </main>
  )
}