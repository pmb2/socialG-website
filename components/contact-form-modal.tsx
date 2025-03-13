"use client"

import type React from "react"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Label} from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {CheckCircle2, X} from "lucide-react"

interface ContactFormModalProps {
    isOpen: boolean
    onClose: () => void
    type?: "sales" | "consultation"
}

export function ContactFormModal({isOpen, onClose, type = "sales"}: ContactFormModalProps) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        locations: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormState((prev) => ({...prev, [name]: value}))
    }

    const handleSelectChange = (value: string) => {
        setFormState((prev) => ({...prev, locations: value}))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Make sure the path is correct
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSubmitting(false);
                setIsSubmitted(true);

                // Reset form after 3 seconds and close modal
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormState({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        locations: "",
                        message: "",
                    });
                    onClose();
                }, 3000);
            } else {
                console.error('Error response:', data);
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            setIsSubmitting(false);
            // Handle error state here - maybe show an error message to the user
        }
    };


    const title = type === "sales" ? "Contact Sales" : "Schedule a Consultation"
    const description =
        type === "sales"
            ? "Fill out the form below and our sales team will get back to you within 24 hours."
            : "Tell us about your agency needs and we'll schedule a personalized consultation."

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="w-[95%] max-w-[95%] sm:max-w-[500px] rounded-xl max-h-[90vh] overflow-y-auto p-4 sm:p-6"
                closeButton={false}>
                {/* Mobile Close Button */}
                <div className="absolute right-4 top-4 z-10">
                    <DialogClose asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 p-0 rounded-full">
                            <X className="h-5 w-5"/>
                            <span className="sr-only">Close</span>
                        </Button>
                    </DialogClose>
                </div>

                {isSubmitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-8 h-8 text-green-600"/>
                        </div>
                        <DialogTitle className="text-2xl mb-2">Thank You!</DialogTitle>
                        <DialogDescription className="text-center max-w-sm mx-auto">
                            Your message has been received. Our team will contact you shortly to discuss how we can help
                            your agency.
                        </DialogDescription>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-2xl pt-4">{title}</DialogTitle>
                            <DialogDescription>{description}</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 py-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="John Smith"
                                        required
                                        className="h-10"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="h-10"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        value={formState.company}
                                        onChange={handleChange}
                                        placeholder="Your Agency"
                                        required
                                        className="h-10"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        placeholder="(123) 456-7890"
                                        className="h-10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="locations">Number of Locations</Label>
                                <Select onValueChange={handleSelectChange} value={formState.locations}>
                                    <SelectTrigger className="h-10">
                                        <SelectValue placeholder="Select number of locations"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1-10">1-10 locations</SelectItem>
                                        <SelectItem value="11-50">11-50 locations</SelectItem>
                                        <SelectItem value="51-250">51-250 locations</SelectItem>
                                        <SelectItem value="251+">251+ locations</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your needs..."
                                    className="min-h-[80px] py-2"
                                    required
                                />
                            </div>
                            <DialogFooter className="pt-4 pb-2">
                                <Button
                                    type="submit"
                                    className="w-full rounded-full bg-black hover:bg-black/80 h-12"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}

