"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,

} from "@/components/ui/form"
import CustomFormField from "./CustomFormField";
import CustomSubmitBtn from "../ui/CustomSubmitBtn";
import { useState } from "react";
import UserFormSchema from "@/lib/validation";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-number-input/input";
export enum FormFieldType {
  INPUT = "input",
  TEXTAREA= 'textarea',
  PHONE_INPUT='phoneInput',
  CHECKBOX='checkbox',
  DATE_PICKER='datePicker',
  SELECT='select',
  SKELETON='skeleton',
}


const PatientForm = () => {
  const router=useRouter;
  const [isLoading, setIsLoading]=useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormSchema>>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      name:"",
      email:"",
      phone:"",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({name, email,phone}: z.infer<typeof UserFormSchema>) {
  //   const userData={name,email,phone}
  //   const user=await createUser(userData)
  // if(user) router.push(`/patients/${user.$id}/register`)
  setIsLoading(true);
try {
  const user ={
    name:name,
    email:email,
    phone:phone,
  }
} catch (error) {
  console.log(error)
}
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
<h1 className="header">Hi there 👋</h1>
<p className="text-dark-700">Scheduled your first appointment</p>
        </section>
    <CustomFormField fieldType={FormFieldType.INPUT} control={form.control} name="name" label="Full Name" placeholder="John Doe" iconSrc="/assets/icons/user.svg" iconAlt="user"/>
    <CustomFormField fieldType={FormFieldType.INPUT} control={form.control} name="email" label="Email" placeholder="JohnDoe@js.com" iconSrc="/assets/icons/email.svg" iconAlt="user"/>
    <Controller
          control={form.control}
          name="phone" // This should match your validation schema
          render={({ field }) => (
            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="Phone Number"
              placeholder="+359 123 456 899"
              iconSrc="/assets/icons/phone.svg"
              iconAlt="phone"
            >
              <PhoneInput
                international
                withCountryCallingCode
                defaultCountry="BG"
                value={field.value}
                onChange={field.onChange}
                placeholder="Enter your phone number"
                className="input-phone"
              />
            </CustomFormField>
          )}
        />
   <CustomSubmitBtn isLoading={isLoading}>Get Started</CustomSubmitBtn>
      </form>
    </Form>
  )
}
export default PatientForm;
