import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function TabAuth(){
  return (
    <Tabs defaultValue="sign-in" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sign-in">Log in</TabsTrigger>
        <TabsTrigger value="sign-up">Sign up</TabsTrigger>
      </TabsList>

      <TabsContent value="sign-in">
        <div className="mt-8">
          <div className="space-y-5 mb-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </div>

          <Button className="w-full">Sign in</Button>
        </div>
      </TabsContent>

      <TabsContent value="sign-up">
        <div className="mt-8">
          <div className="space-y-5 mb-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="name" id="name" placeholder="John Doe" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bio">Bio</Label>
              <Input type="bio" id="bio" placeholder="Full Stack Developer" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="jon.doe@email.com" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="••••••••" />
            </div>
          </div>

          <Button className="w-full">Create account</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}