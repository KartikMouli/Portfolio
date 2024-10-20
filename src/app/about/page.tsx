import Education from '@/components/Education'
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {}

function About({ }: Props) {
    return (
        <>
            <section className='mt-8 pb-2'>
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <div className="bg-black text-white p-6 mb-16 mt-8 rounded-lg shadow-md">
                    <p className="mb-2">
                        Hey there! I’m <span className="font-semibold">Kartik</span>, a proud graduate from <span className="italic">IIT Patna</span> (CSE 2024 Batch).
                        When I'm not coding, you’ll probably find me on the football field or shooting hoops.
                        I'm a firm believer that great ideas come from brainstorming while running (or maybe just running out of breath!).
                    </p>
                    <p className="mb-2">
                        I’m also a movie buff—whether it’s action-packed blockbusters or thought-provoking dramas,
                        I love diving into different worlds. Currently, I’m exploring the fascinating realms of
                        <span className="font-semibold"> Web3</span> and <span className="font-semibold">open source</span>,
                        all while keeping my competitive programming skills sharp.
                    </p>
                    <p className='mb-2'>
                        Originally hailing from <span className="italic">Nashik</span>, I’m ready to take on the tech world one line of code at a time!
                    </p>
                    <p className="mt-4">
                        <Link href="/contact" className='font-semibold'>Feel free to connect!</Link > I'm always open to chatting about tech, sports, or the latest movies.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-16">
                <h3 className="text-3xl font-bold mb-4 text-gray-100">Skills</h3>
                <p className="text-gray-300 mb-4">
                    Curious about the tools and technologies I work with? Click below to explore my skillset!
                </p>
                <Link href="/skills">
                    <button className="px-4 py-2 flex items-center gap-2 hover:bg-white text-white hover:text-[#111111] rounded transition duration-300  border border-white">
                        Explore Skills
                        <ArrowRightIcon className="size-5" />
                    </button>
                </Link>
            </section>

            {/* Education Section */}

            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">
                    Learning Journey
                </h2>
                <Education />
            </section>


            {/* Stats Overview Section */}
            <section className='mb-16'>
                <h3 className="text-3xl font-bold mt-6 mb-6">Data Playground</h3>
                <div className="flex gap-4">
                    <div className="flex-1 rounded overflow-hidden">
                        <Image
                            src="https://github-readme-streak-stats.herokuapp.com/?user=kartikmouli&theme=dark"
                            alt="GitHub Streak"
                            width={400}
                            height={300}

                        />
                    </div>
                    <div className="flex-1 rounded overflow-hidden">
                        <Image
                            src="https://leetcard.jacoblin.cool/monchi02?ext=heatmap"
                            alt="LeetCode Stats"
                            width={400}
                            height={300}

                        />
                    </div>
                </div>
            </section>


        </>

    )
}

export default About