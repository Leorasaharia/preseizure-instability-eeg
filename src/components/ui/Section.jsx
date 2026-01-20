import { cn } from "../../lib/utils";

export function Section({ className, id, children, ...props }) {
    return (
        <section id={id} className={cn("py-20 px-6 md:px-12 max-w-7xl mx-auto", className)} {...props}>
            {children}
        </section>
    );
}
