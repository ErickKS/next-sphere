"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const signUpFormSchema = z.object({
  name: z.string().min(3, { message: "The name must be at least 3 characters long." }),
  bio: z.string().min(3, { message: "The bio must be at least 3 characters long." }),
  email: z.string().email({ message: "The email must be a valid email address." }),
  password: z.string().min(8, { message: "The password must be at least 8 characters long." }),
});

type SignUpFormData = z.infer<typeof signUpFormSchema>;

export function SignUpForm(){
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  function handleRegister(data: SignUpFormData){
    console.log(data)

    alert("created")
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="mt-8">
      <div className="space-y-5 mb-6">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" {...register("name")} />
          {errors.name && <span className="text-sm text-destructive font-medium">{errors.name.message}</span>}
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Input id="bio" placeholder="Full Stack Developer" {...register("bio")} />
          {errors.bio && <span className="text-sm text-destructive font-medium">{errors.bio.message}</span>}
        </div>

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

      <Button type="submit" className="w-full" disabled={isSubmitting}>Create account</Button>
    </form>
  )
}