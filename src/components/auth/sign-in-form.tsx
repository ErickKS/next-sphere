"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const signInFormSchema = z.object({
  email: z.string().email({ message: "The email must be a valid email address." }),
  password: z.string().min(8, { message: "The password must be at least 8 characters long." }),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export function SignInForm(){
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  function handleRegister(data: SignInFormData){
    console.log(data)

    alert("created")
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="mt-8">
      <div className="space-y-5 mb-6">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="john.doe@email.com" {...register("email")} />
          {errors.email && <span className="text-sm text-destructive font-medium">{errors.email.message}</span>}
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="••••••••" {...register("password")} />
          {errors.password && <span className="text-sm text-destructive font-medium">{errors.password.message}</span>}
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>Sign in</Button>
    </form>
  )
}