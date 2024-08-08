import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignInForm } from "./auth/sign-in-form"
import { SignUpForm } from "./auth/sign-up-form"

export function TabAuth(){
  return (
    <Tabs defaultValue="sign-in" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sign-in">Log in</TabsTrigger>
        <TabsTrigger value="sign-up">Sign up</TabsTrigger>
      </TabsList>

      <TabsContent value="sign-in">
        <SignInForm/>
      </TabsContent>

      <TabsContent value="sign-up">
        <SignUpForm/>
      </TabsContent>
    </Tabs>
  )
}