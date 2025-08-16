import { z } from "zod";
import { validateForEmptySpaces } from "../utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const AcceptedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'];
export const emojiRegex = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const HomeHeroFormSchema = z.object({
    from: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    to: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    passenger: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    time: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    date: z.date({error: "This field is mandantory "}),
  })

export const LostPropertyFormSchema = z.object({
    location: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    destination: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    time: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    date: z.date({error: "This field is mandantory "}),
    busNumber: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    ticketNumber: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    lostItem: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    brand: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    details: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    file: z
    .any()
    .refine((file) => {
      if (!file) return true;
      return file instanceof File;
    }, { message: "Invalid file input" })
    .refine((file) => {
      if (!file) return true;
      return file.size <= MAX_FILE_SIZE;
    }, { message: "File max size is 5MB" })
    .refine((file) => {
      if (!file) return true;
      return AcceptedFileTypes.includes(file.type);
    }, { message: "Only jpg, png, gif, or pdf files are accepted" }),
    firstName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    lastName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    email: z.email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    town: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    address: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    phone: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),

  })

export const IncidentFormSchema = z.object({
    location: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    destination: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    time: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    date: z.date({error: "This field is mandantory "}),
    busNumber: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    ticketNumber: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    incident: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    details: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    file: z
    .any()
    .refine((file) => {
      if (!file) return true;
      return file instanceof File;
    }, { message: "Invalid file input" })
    .refine((file) => {
      if (!file) return true;
      return file.size <= MAX_FILE_SIZE;
    }, { message: "File max size is 5MB" })
    .refine((file) => {
      if (!file) return true;
      return AcceptedFileTypes.includes(file.type);
    }, { message: "Only jpg, png, gif, or pdf files are accepted" }),
    firstName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    lastName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    email: z.email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    town: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    address: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    phone: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),

  })

export const RefundFormSchema = z.object({
    location: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    destination: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    time: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    date: z.date({error: "This field is mandantory "}),
    ticketType: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    buyFrom: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    paymentMethod: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    refundReason: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    details: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    file: z
    .any()
    .refine((file) => {
      if (!file) return true;
      return file instanceof File;
    }, { message: "Invalid file input" })
    .refine((file) => {
      if (!file) return true;
      return file.size <= MAX_FILE_SIZE;
    }, { message: "File max size is 5MB" })
    .refine((file) => {
      if (!file) return true;
      return AcceptedFileTypes.includes(file.type);
    }, { message: "Only jpg, png, gif, or pdf files are accepted" }),
    firstName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    lastName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    email: z.email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    town: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    address: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    phone: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),

  })

export const FeedbackFormSchema = z.object({
    details: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    file: z
    .any()
    .refine((file) => {
      if (!file) return true;
      return file instanceof File;
    }, { message: "Invalid file input" })
    .refine((file) => {
      if (!file) return true;
      return file.size <= MAX_FILE_SIZE;
    }, { message: "File max size is 5MB" })
    .refine((file) => {
      if (!file) return true;
      return AcceptedFileTypes.includes(file.type);
    }, { message: "Only jpg, png, gif, or pdf files are accepted" }),
    firstName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    lastName: z.string().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    email: z.email().min(1, {message: "This field is mandatory"}).refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    town: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    address: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),
    phone: z.string().optional().refine((value) => !value || validateForEmptySpaces(value), {message: "No empty spaces"}).refine((value) => !value || !value.match(emojiRegex), {message: "No emoji's alllowed."}),

  })