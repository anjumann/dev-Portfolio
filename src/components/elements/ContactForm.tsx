"use client"

import React, { useRef, useState } from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { FiLoader } from 'react-icons/fi'
import { ToastAction } from '../ui/toast'
import Link from 'next/link'


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    message: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email.",
    })
})


const ContactForm = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const formRef = useRef<HTMLFormElement | null>(null)
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        if (formRef.current) {
            await emailjs.sendForm('service_l2g3d0t', 'template_wwmqhx2', formRef.current, 'mIGuVwqvm9LV7HQ9s').then(
                (res) => {
                    toast({
                        title: "🚀 Success! Your Message Has Been Sent!",
                        description: "🌐 Stay tuned for our reply, and in the spirit of code, let's keep the conversation binary - 0s and 1s. Your message is important to us, and we can't wait to connect with you ! - anjuman",
                    })
                }
            ).catch((error) => {
                console.log(error)
                toast({
                    title: "😵 Error! Your Message Not Has Been Sent!",
                    description: "🌐 Please Try again if Problem persist contact me through email or other social media! - anjuman",
                    action: <Link href='mailto:anjumanraj2@gmail.com' > <ToastAction altText="Email">Send Email</ToastAction>,</Link>
                })
            })
            formRef.current.reset()
            form.reset()

        }
        setLoading(false)
    }
    return (
        <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <FormLabel>Your Spotlight Alias</FormLabel>
                                <FormControl>
                                    <Input placeholder="How shall we address you? 🌟" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Tech Persona
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email (so I can get back to you) 🌌" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Your Enchanted Email Address 🗝️
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Craft Your Message Canvas 🎨" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Share Your Tech Thoughts and Queries 💬
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                />
                <Button variant="outline" disabled={loading} className={`${loading ? 'cursor-wait ' : ''}`} type="submit">
                    {
                        loading ? (<> <FiLoader className='animate-spin text-lg mr-2' /> Submitting... </>) : 'Submit'
                    }
                </Button>
            </form>
        </Form>
    )
}

export default ContactForm