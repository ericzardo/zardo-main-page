import { z } from "zod";

export const contactSchema = (messages: Record<string, string>) =>
  z.object({
    name: z
      .string()
      .min(2, { message: messages['name.tooShort'] })
      .max(50, { message: messages['name.tooLong'] }),
    email: z
      .string()
      .email({ message: messages['email.invalid'] }),
    message: z
      .string()
      .min(10, { message: messages['message.tooShort'] })
      .max(500, { message: messages['message.tooLong'] }),
  })

export type ContactFormData = z.infer<ReturnType<typeof contactSchema>>
