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