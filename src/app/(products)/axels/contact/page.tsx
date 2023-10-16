"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/UI/Form"
import { Input } from "@/app/components/UI/Input"
import { useForm } from 'react-hook-form';
import { Button } from '@/app/components/UI/Button';
import { Textarea } from '@/app/components/UI/Textarea';


const page = () => {
    return (
        <div>
            <div className='flex  bg-axelsBackground sm:p-32 p-4 flex-col sm:flex-row gap-10'>
                <div className='flex-1 space-y-4 sm:space-y-8'>
                    <p className='sm:text-center text-start text-axels'>CONTACT US</p>
                    <p className='text-4xl'>Get in Touch</p>
                    <p className=''>At Axels, we value your feedback, inquiries, and any assistance you may need. Our dedicated team is ready to provide you with the support you require.</p>
                    <p>Whether you have questions about our jewelry collections, need assistance with an order, or simply want to share your thoughts, please don not hesitate to reach out to us.</p>
                </div>
                <div className='flex-1'>
                    <FormContact />
                </div>
            </div>
            <div className='sm:p-32 space-y-10 p-4'>
                <p className='text-4xl text-center'>Contact Information:</p>
                <div className='flex flex-col sm:flex-row sm:gap-20 gap-10'>
                    <div className='flex-1 space-y-5'>
                        <p className='font-semibold'>Customer Support</p>
                        <p>If you have any questions, concerns, or need assistance with your order, our customer support team is here to help.</p>
                        <p>You can reach us via email at support@axelsjewelry.com or by phone at 1-800-123-4567.</p>
                        <p>Our team is available during our regular business hours, Monday through Friday from 9:00 AM to 6:00 PM (EST).</p>
                    </div>
                    <div className='flex-1 space-y-5'>
                        <p className='font-semibold'>Visit Our Showroom</p>
                        <p>If you are in the area, we invite you to visit our showroom located at [123 Main Street, City, State, ZIP]. Our knowledgeable staff will be delighted to assist you in person, showcase our collections, and provide personalized recommendations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(2, {
        message: "message must be at least 2 characters.",
    }),
})
const FormContact = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="px-4 py-8 bg-white placeholder:text-gray-400 rounded-md space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className='bg-axelsBackground' placeholder="Name" {...field} />
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
                            <FormControl>
                                <Input className='bg-axelsBackground' placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea className='bg-axelsBackground w-full'  placeholder="Message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='w-full' type="submit">Submit</Button>
            </form>
        </Form>
    )


}

