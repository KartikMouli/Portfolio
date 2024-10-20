import Projects from '@/components/Projects'
import React from 'react'


type Props = {}

function page({ }: Props) {
    return (
        <>
            <div className="mt-8 flex flex-col gap-8 pb-16">
                <h1 className="text-3xl font-bold">My Projects</h1>
                <Projects />
            </div>
        </>
    )
}

export default page