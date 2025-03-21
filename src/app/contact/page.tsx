import ContactForm from "@/components/ContactForm";



const Contact: React.FC = () => (
    <div className="mt-8 flex flex-col gap-8 pb-16 rounded-lg mx-auto">
        <h1 className="text-3xl font-bold dark:text-gray-100 mb-4">Contact me</h1>
        <p className="dark:text-gray-300 mb-4">I&apos;d love to hear from you! Please fill out the form below.</p>
        <ContactForm />
    </div>
);

export default Contact;
