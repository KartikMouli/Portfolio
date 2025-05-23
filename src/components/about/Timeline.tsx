import React, { useState } from 'react';
import Image from 'next/image';
import data from '@/data/education.json'
import Link from 'next/link';
import {EducationDataSchema} from '@/lib/schemas';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';


// Validate the education data
const educationData = EducationDataSchema.parse(data.educationData);

const Timeline: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

    const tabs = [
        {
            id: 'education',
            label: 'Education',
            icon: <GraduationCap className="w-4 h-4" />,
            content: (
                <motion.ul 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    {educationData.map((edu, index) => (
                        <motion.li 
                            key={index} 
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-start group">
                                <div className="rounded-lg p-3 w-full bg-card border border-border hover:border-primary/50 transition-colors duration-300">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full p-1 w-10 h-10 shrink-0 flex items-center justify-center overflow-hidden border border-border group-hover:border-primary/50 transition-colors duration-300">
                                            <Image
                                                src={edu.image}
                                                alt={`${edu.university} logo`}
                                                width={40}
                                                height={40}
                                                className="object-cover w-full h-full rounded-full"
                                            />
                                        </div>
                                        <div className="grow">
                                            <Link 
                                                href={edu.web} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group-hover:text-primary transition-colors duration-300"
                                            >
                                                <h2 className="font-medium text-base text-foreground">{edu.university}</h2>
                                            </Link>
                                            <p className="text-sm text-muted-foreground mt-0.5">{edu.degree}</p>
                                            <p className="text-xs text-muted-foreground/70 mt-0.5">{edu.period}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            )
        },
        {
            id: 'experience',
            label: 'Experience',
            icon: <Briefcase className="w-4 h-4" />,
            content: (
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-start group">
                            <div className="rounded-lg p-3 w-full bg-card border border-border hover:border-primary/50 transition-colors duration-300">
                                <div className="flex items-start gap-3">
                                    <div className="rounded-full p-1 w-10 h-10 shrink-0 flex items-center justify-center overflow-hidden border border-border group-hover:border-primary/50 transition-colors duration-300">
                                        <Image
                                            src="https://avatars.githubusercontent.com/u/142896542?s=200&v=4"
                                            alt="Unizoy logo"
                                            width={40}
                                            height={40}
                                            className="object-cover w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div className="grow">
                                        <Link 
                                            href="https://unizoy.com" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group-hover:text-primary transition-colors duration-300"
                                        >
                                            <h2 className="font-medium text-base text-foreground">Unizoy</h2>
                                        </Link>
                                        <p className="text-sm text-muted-foreground mt-0.5">Full Stack Developer Intern</p>
                                        <p className="text-xs text-muted-foreground/70 mt-0.5">2024 - Present</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )
        }
    ];

    return (
        <div className="w-full">
            <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as 'education' | 'experience')}
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                            activeTab === tab.id
                                ? 'bg-background text-foreground shadow-sm'
                                : 'hover:text-foreground'
                        }`}
                    >
                        {tab.icon}
                        <span className="ml-2">{tab.label}</span>
                    </button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                {tabs.map((tab) => (
                    activeTab === tab.id && (
                        <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            {tab.content}
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Timeline;