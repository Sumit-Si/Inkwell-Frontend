import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "@/store/useAuthStore";
import { LoaderCircleIcon } from "lucide-react";
// import GoogleIcon from "lucide-react";

// Login form Schema
const formSchema = z.object({
  email: z
    .email("Invalid email address")
    .nonempty("Email is required")
    .max(50, "Email must be less than 50 characters"),

  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const LoginPage = () => {
  const {login,isLoggingIn,authUser} = useAuthStore();
  const navigate = useNavigate();

  // react hook form initial
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values",values);
    try {
      await login(values);
      if(authUser) navigate("/");
    } catch (error) {
      console.log("Error on login:",error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-lg border rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold tracking-tight">
            Welcome Back
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Login to continue to your account
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="••••••••" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-1.5">
                  <Button type="submit" className="w-full" disabled={isLoggingIn}>
                    {isLoggingIn && <LoaderCircleIcon className="animate-spin" />}
                    <span>Login</span>
                  </Button>
                </div>

                <div className="relative">
                  <Separator />
                  <span className="absolute inset-0 flex items-center justify-center text-xs bg-background px-2 text-muted-foreground">
                    OR
                  </span>
                </div>

                <Button variant="outline" className="w-full" type="button">
                  Login with Google
                </Button>
              </div>

              <p className="text-center text-sm pt-1.5 text-muted-foreground">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  viewTransition
                  className="text-primary hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
