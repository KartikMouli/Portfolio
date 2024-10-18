import data from "@/data/socials.json";
import Icon from "./Icon";



export default function Socials() {

    const socials = data.socials

    return (
        <section className="flex gap-6">
            {socials.map((item) => (
                <a
                    href={item.href}
                    key={item.name}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                    rel="noopener noreferrer"
                >
                    <span className="sr-only">{item.name}</span>
                    <Icon name={item.icon} aria-hidden="true" className="size-5" />
                </a>
            ))}
        </section>

    );
}