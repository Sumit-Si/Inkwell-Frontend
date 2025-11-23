import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AvailableUserRoles, UserRoleEnum } from "@/utils/constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(50, { message: "Username must be less than 50 characters." })
    .regex(/^[a-z0-9._]+$/, {
      message:
        "Username can only contain lowercase letters, numbers, dots, and underscores.",
    })
    .transform((val) => val.toLowerCase()),

  email: z
    .email("Invalid email address")
    .nonempty("Email is required")
    .max(50, "Email must be less than 50 characters")
    .lowercase("Email must be lowercase")
    .trim(),

  fullName: z
    .string()
    .min(5, { message: "Full name must be at least 5 characters." })
    .max(50, { message: "Full name must be less than 50 characters." })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Full name can only contain letters and spaces.",
    })
    .optional(),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(20, { message: "Password must be less than 20 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/,
      "Password must include 1 uppercase, lowercase, 1 number, and 1 special character."
    )
    .trim(),

  role: z.enum(AvailableUserRoles),
});

const Signup = () => {
  const [loading, setLoading] = useState(false);

  // react hook form initial
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: UserRoleEnum.USER,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // handle register logic
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-lg shadow-lg border rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold tracking-tight">
            Create an Account
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Join our platform and start your journey
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>Register as</FormLabel>

                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="grid grid-cols-2 gap-0 border border-input rounded-md p-0.5"
                        >
                          <Label className="h-[34px] w-full grid place-items-center rounded-s-sm text-muted-foreground hover:text-foreground has-checked:bg-secondary has-checked:text-secondary-foreground">
                            <RadioGroupItem value="USER" className="sr-only" />
                            User
                          </Label>
                          <Label className="h-[34px] w-full grid place-items-center rounded-e-sm text-muted-foreground hover:text-foreground has-checked:bg-secondary has-checked:text-secondary-foreground">
                            <RadioGroupItem value="ADMIN" className="sr-only" />
                            Admin
                          </Label>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="johndoe123" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="you@example.com" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="••••••••" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-1.5">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing up..." : "Register"}
                  </Button>
                </div>
              </div>

              <p className="text-center text-sm pt-2 text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  viewTransition
                  className="text-primary hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
