import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <article className="flex flex-col gap-8 mt-2">
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-3xl mx-auto text-center sm:text-left">
                    <section className="flex flex-col sm:flex-row items-center sm:items-start">
                        <p className="text-6xl sm:text-8xl font-bold text-muted-foreground mb-4 sm:mb-0">
                            404
                        </p>
                        <div className="sm:ml-6 sm:border-l sm:border-gray-200 sm:pl-6">
                            <h1 className="text-3xl sm:text-5xl font-semibold mb-4">
                                Oops! We Can&apos;t Find That Page!
                            </h1>
                            <div className="w-full flex justify-center sm:justify-start">
                                <object
                                    type="image/svg+xml"
                                    data="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg"
                                    title="Kitty Yarn Play 404 page animation - Made by SVGator"
                                    className="w-3/4 max-w-sm sm:max-w-md mb-4 rounded-xl"
                                >
                                    {/* Fallback for browsers that do not support object tags */}
                                    <Image
                                        src="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg"
                                        alt="Kitty Yarn Play 404 page animation - Made by SVGator"
                                        width={400}
                                        height={250}
                                        className="w-full h-auto"
                                    />
                                </object>
                            </div>
                            <p className="mt-2 text-base text-muted-foreground sm:text-lg">
                                Looks like this page decided to take a little break. Don&apos;t stress; we all need a moment sometimes!
                            </p>

                            <p className="mt-4 dark:text-gray-400 text-sm sm:text-base">
                                Thanks for your patience! The rest of the site is actually pretty chill, I promise.
                            </p>
                        </div>
                    </section>
                    <div className="mt-8 sm:mt-10 flex justify-center sm:justify-start space-x-3">
                        <Link href="/" className="inline-flex items-center text-blue-500 underline hover:text-blue-300 text-sm sm:text-base">
                            <ArrowLeftIcon className="w-4 h-4 mr-1" /> Back to reality, aka the homepage
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
