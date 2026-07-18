import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const contributionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  contributionType: z.string().min(1, "Please select how you'd like to contribute"),
  details: z.string().min(10, "Please share a few more details (min 10 characters)"),
});

export type ContributionFormData = z.infer<typeof contributionSchema>;

export const volunteerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().optional(),
});

export type VolunteerFormData = z.infer<typeof volunteerSchema>;
