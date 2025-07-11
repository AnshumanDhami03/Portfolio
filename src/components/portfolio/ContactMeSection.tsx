
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import SectionWrapper from './SectionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { ARTIST_SOCIAL_LINKS } from '@/lib/data';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactMeSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const subject = encodeURIComponent(`Message from ${values.name} via your portfolio`);
    const body = encodeURIComponent(
      `${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`
    );
    const mailtoLink = `mailto:${ARTIST_SOCIAL_LINKS.gmail}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Opening Email Client",
      description: "Please complete sending the message in your email application.",
    });
  };

  return (
    <SectionWrapper id="contact" title="Contact Me">
      <div className="max-w-2xl mx-auto text-left">
        <p className="text-center mb-8 text-muted-foreground">
          Have a question, a project idea, or just want to say hello? Drop me a line using the form below, or connect with me via email.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
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
                    <Input placeholder="your.email@example.com" {...field} />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell me what's on your mind..." className="min-h-[150px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button type="submit" size="lg">Send Message</Button>
            </div>
          </form>
        </Form>
         <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            You can also email me directly at:{" "}
            <a href={`mailto:${ARTIST_SOCIAL_LINKS.gmail}`} className="font-medium text-primary hover:underline">
              {ARTIST_SOCIAL_LINKS.gmail}
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
