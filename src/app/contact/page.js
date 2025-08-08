"use client";
import Image from "next/image";
import { submitForm } from "./action";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import { useActionState } from "react";
import ContactImage from "../../../public/images/pulmo-bg-2.jpg";

const initialState = { status: null };

export default function MainComponent() {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  return (
    <div className="min-h-screen font-roboto bg-white">
      <div className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src={ContactImage}
            alt="contact us"
            fill
            objectFit="cover"
            placeholder="blur"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">Get in touch with our team</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactDetails />
          <ContactForm
            formAction={formAction}
            state={state}
            isPending={isPending}
          />
        </div>
      </div>
    </div>
  );
}
