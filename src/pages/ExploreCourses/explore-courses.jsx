import React from 'react'
import CoursesCard from '../../ui/CoursesCard/courses-card'

const ExploreCourses = () => {
    return (
        <CoursesCard
            title="Explore Courses"
            description="A wide range of courses across technology, leadership, and professional skills."
            backgroundLabel="COURSES"
            backgroundPosition="left"
            className="mb-16"
            posts={[
                {
                    id: 1,
                    title: "Job Ready Skills for Modern Professionals",
                    category: "Professional Courses",
                    imageUrl:
                        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
                    views: 2180,
                    totalTopics: 10,
                    rating: 5,
                    href: "/professional"
                },
                {
                    id: 2,
                    title: "Startup & Business Foundations",
                    category: "Entrepreneurship Courses",
                    imageUrl:
                        "https://plus.unsplash.com/premium_photo-1726812066000-aa623e05e48f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN0YXJ0dXBzfGVufDB8fDB8fHww",
                    views: 1456,
                    totalTopics: 10,
                    rating: 4,
                    href: "/entrepreneuship"
                },
                {
                    id: 3,
                    title: "Nation Building Skills 2047",
                    category: "Viksit Bharat 2047",
                    imageUrl:
                        "https://images.unsplash.com/photo-1691328024236-55b85f698fe4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhbiUyMGZsYWd8ZW58MHx8MHx8fDA%3D",
                    views: 987,
                    totalTopics: 6,
                    rating: 4,
                    href: "/viksitbharat2047"
                },
            ]}
        />
    )
}

export default ExploreCourses
