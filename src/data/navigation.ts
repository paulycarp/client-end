import { IBusinesses, Item } from "@/types/navigation";

const businessDescriptions = {
    bootcamp: {
        topHead: "courses",
        topDesc: `Fast-Track Coding Education For Tech Careers. Hands-On, Projects,
        Expert Instructors, Career Support`,
        secondHead: "bootcamp",
        secondDesc: `Intensive Coding Education to Jumpstart Careers, 
        Offering Hands-On Experience and Practical Skills for Aspiring 
        Developers and Tech Professionals.
        `,
        summary1: `From novice to coder extraordinaire, bootcamp training is the
        transformative journey.`,
        summary2: `Apply, enroll, learn coding skills through projects, assessments.
        Get career support. Graduate with practical experience.
        `,
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946409/taacodeep/website/images/bootcamp.jpg",
        imageAlt: "Coding Bootcamp"
    },
    kids: {
        topHead: "Elementary School (Ages 8-10)",
        topDesc: `Fun coding for young Learners. Problem-Solving, 
        Creativity, Collaboration, and Computational Thinking.`,
        secondHead: "Middle School (Ages 11-13)",
        secondDesc: `Advanced coding for middle schoolers. Problem-solving, logic, 
        algorithms, and real-world applications.
        `,
        thirdHead: `High School (Ages 14-18)`,
        thirdDesc: `Advanced coding skills for high school students. Algorithms, 
        data structures, application development, and career readiness.
        `,
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946218/taacodeep/website/images/kids.jpg",
        imageAlt: "Kids Coding Class"
    },
    network: {
        topHead: "Telecommunication",
        topDesc: `Strategic Planning and Optimization for Robust Telecom 
        Networks Ensuring Reliable Connectivity and Smooth Communication 
        Operations.`,
        secondHead: "networking",
        secondDesc: `Expert Networking Design for Efficient and Secure 
        Data Transmission,Seamless Connectivity, and Optimal Network 
        Performance.
        `,
        summary1: `Connecting worlds, one network at a time.`,
        summary2: `Designing, implementing, and securing computer networks 
        for optimal performance and reliable connectivity. Troubleshooting 
        and maintaining network infrastructure.
        `,
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946218/taacodeep/website/images/telecom.jpg",
        imageAlt: "Telecommunications and computer networking"
    },

    commerce: {
        topHead: "laptops and accessories",
        topDesc: `Upgrade your tech arsenal with laptops and accessories 
        for enhanced productivity and convenience. Don't miss out on 
        exclusive sales!`,
        secondHead: "networking equipments",
        secondDesc: `Boost your network performance with high-quality 
        networking equipment. Discover reliable products at great prices 
        in our exclusive sales!
        `,
        summary2: `Upgrade your tech with networking equipment and computers. 
        Don't miss out on our exclusive sales for reliable products that 
        enhance productivity and connectivity.
        `,
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946218/taacodeep/website/images/sales.jpg",
        imageAlt: "equipments sales"
    },

    software: {
        topHead: "SaaS: Simplify your software.",
        topDesc: `Streamline operations, boost productivity, and
         scale your business with our innovative cloud-based solutions.`,
        secondHead: "Custom Software development",
        secondDesc: `Tailored Solutions for your Business. Experience the 
        Power of Custom Software Development to Optimize Processes and 
        Drive Growth.
        `,
        summary1: `Discover our cutting-edge SaaS services for seamless 
        collaboration, enhanced productivity, and simplified management. 
        Revolutionize your business operations with our scalable solutions.
        `,
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946219/taacodeep/website/images/web-dev.jpg",
        imageAlt: "software development"
    },

    schoolProjects: {
        topHead: "school projects",
        topDesc: `Get expert assistance for your school tech projects. 
        From planning to implementation, we provide guidance and support 
        to ensure successful outcomes.`,
        
        summary1: `Unlock the potential of technology in education. 
        Our dedicated team is here to support your school tech projects 
        and empower students for a brighter future.
        `,
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946217/taacodeep/website/images/skl-project.jpg",
        imageAlt: "project assistance"
    },

    adverts: {
        topHead: "advertisements",
        topDesc: `Discover the Power of Cutting-Edge Technology! Experience 
        Seamless Connectivity, Unparalleled Performance, and Endless 
        Possibilities. Upgrade your World with Our Innovative Solutions.`,
        
        summary1: `Ignite your imagination and explore the limitless 
        possibilities of technology. Embrace innovation and shape 
        the future with us.
        `,
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946218/taacodeep/website/images/adverts.jpg",
        imageAlt: "advertisements"
    },

    hardware: {
        topHead: "embedded systems",
        topDesc: `Powerful, Compact, and Intelligent: Embedded Systems 
        that Redefine Connectivity and Automation.`,
        secondHead: "General Repairs",
        secondDesc: `Efficient Computer and Hardware Repairs by Skilled 
        Technicians. Prompt Diagnosis and Reliable Solutions to keep your 
        Systems Running Smoothly.
        `,
        summary1: `When technology throws a tantrum, we're here to bring 
        peace and harmony back to your systems with our expert computer 
        and hardware repair services.
        Don't let computer glitches hold you back. Our repair wizards 
        will work their magic and get your devices back in tip-top shape 
        in no time.
        `,
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946217/taacodeep/website/images/hardware.jpg",
        imageAlt: "software development"
    },

    sanitation: {
        topHead: "sanitation",
        topDesc: `Top-tier Sanitation Solutions for Clean and Hygienic 
        Spaces, Specializing in Waste Management, Sanitization, 
        and Environmental Cleanliness. 
        Creating Clean, Healthy Spaces with Expert Sanitation 
        Services. Transforming Environments for a Safer Tomorrow.`,
        
        summary1: `Where cleanliness meets excellence, we redefine 
        sanitation standards to ensure a healthier, safer world for all.
        `,
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946217/taacodeep/website/images/sanitation.jpg",
        imageAlt: "sanitation"
    },

    food: {
        topHead: "restaurant",
        topDesc: `Culinary Excellence Awaits at our Restaurant - a 
        Symphony of Flavors and a Feast for the Senses.`,
        secondHead: "local dishes",
        secondDesc: `Taste the Essence of our Region with Locally 
        Sourced Ingredients, Bursting with Flavors that Capture the 
        Spirit of our Community.
        `,
        
        image: "https://res.cloudinary.com/dahddvlgy/image/upload/v1683946217/taacodeep/website/images/food.jpg",
        imageAlt: "restaurant and foods"
    },

}

export const businesses:IBusinesses[] = [
    {
        name: "Education",
        subItem: [
            { 
                name: "Bootcamp/Trainings",
                href: "/#",
                intro: "Taacocamp",
                content: `Taacodeep's Taacocamp will take you from novice
                          to expert. We teach you how to use softwares to 
                          solve pressing solutions`,
                cta: "Let's Chat",
                subDetail: businessDescriptions.bootcamp

            },
            { 
                name: "Kids Coding",
                href: "/#",
                intro: "Taacokids",
                content: `Kids is essential to the development of a 
                          child's cognitive abilities. Taacodeep's Taacokids
                          makes sure that the kids become good at problem
                          solving. Kids are quick to adapt to programming and
                          they make up 60% of our highly successful students.
                          Invest in your child's future. Make them Taacokids.`,
                cta: "Get Started",
                subDetail: businessDescriptions.kids
            },
        ]
    },
    { 
        name: "TeleCom/Networking",
        href: "/#",
        subDetail: businessDescriptions.network
    },
    { 
        name: "Commerce",
        href: "/#",
        subDetail: businessDescriptions.commerce
    },
    { 
        name: "Software Development",
        href: "/#",
        subDetail: businessDescriptions.software
    },
    { 
        name: "Internet of Things",
        subItem: [
            { 
                name: "School Projects Assistance",
                href: "/#",
                subDetail: businessDescriptions.schoolProjects
            },
            { 
                name: "Advertisements",
                href: "/#",
                subDetail: businessDescriptions.adverts
            },
            { 
                name: "Hardwares",
                href: "/#",
                subDetail: businessDescriptions.hardware
            },
        ]
    },
    { 
        name: "Sanitation",
        href: "/#",
        subDetail: businessDescriptions.sanitation
    },
    { 
        name: "Foods",
        href: "/#",
        subDetail: businessDescriptions.food
    },
];

export const menu:Item[] = [
    { 
        name: "home",
        href: "/#",
    },
    { 
        name: "about",
        href: "/#",
    },
    { 
        name: "contact",
        href: "/#",
    },
    { 
        name: "careers",
        href: "/#"
    }
];

