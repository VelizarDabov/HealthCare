'use client'
import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Input } from '../ui/input'
import { Control } from 'react-hook-form';
import { FormFieldType } from './PatientForm';
interface CustomProps{
    control:Control<any>,
    fieldType:FormFieldType
}
const CFormField = ({control, fieldType, name}:CustomProps) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
   <FormItem className="flex-1 ">
{!fieldType !== FormFieldType.CHECKBOX && label ()}
   </FormItem>
    )}
  />
  )
}

export default CFormField