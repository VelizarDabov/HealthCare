import { z } from "zod";

const UserFormSchema = z.object({
  name: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(50, "Username must be at most 50 characters."),
  email: z.string().email("Invalid email address."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+?[0-9\s\-()]{10,20}$/.test(phone),
      "Invalid phone number. Please provide a valid international phone number."
    ),
});
export default UserFormSchema;