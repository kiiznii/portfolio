const data = {
    contact: {
        email: "429jin@gmail.com",
        linkedin: "https://www.linkedin.com/in/kiiznii/",
        linkedinLabel: "linkedin.com/in/kiiznii",
        github: "https://github.com/kiiznii",
        githubLabel: "github.com/kiiznii"
    },

    careerStatement: `Automotive engineer specializing in Software-Defined Vehicles, Embedded systems, and Autonomous Driving. Experienced in CAN communication, Python, C++, and Qt/QML for real-time vehicle data acquisition and HMI development. Prototyped SDV applications using CARLA, Zenoh, and KUKSA at the Eclipse SDV Hackathon. Completed SEA:ME @ 42 Wolfsburg and an R&D internship at AUMOVIO focused on automotive requirements engineering with IBM DOORS and Jira.`,

    experience: [
        {
            title: "Requirements Management Intern",
            company: "Aumovio Electronics",
            date: "June 2026 – Dec 2026",
            location: "Sejong, South Korea",
            bullets: [
                "Managed and distributed Hyundai/Kia Motors requirements in IBM DOORS and Jira, maintaining change control and Traceability management.",
                "Tracked end-to-end status and coordinated stakeholders from scoping to release."
            ]
        },
        {
            title: "Republic of Korea Marine Corps Sergeant",
            company: "ROKMC",
            date: "Oct 2019 – May 2021",
            location: "Pohang, South Korea",
            bullets: [
                "Squad Leader during compulsory service.",
                "Completed ROK Marine Corps Ranger Course."
            ]
        }
    ],

    education: [
        {
            title: "Bachelor of Automotive Engineering",
            school: "Kookmin University",
            date: "Feb 2019 – Aug 2027",
            location: "Seoul, South Korea",
            detail: "GPA: 3.35 / 4.5<br>; Minor: Future Automotive Engineering"
        },
        {
            title: "Volkswagen SEA:ME Program",
            school: "42 Wolfsburg",
            date: "Jul 2025 – Jun 2026",
            location: "Wolfsburg, Germany",
            desc: "Master's-level mobility software program by 42 Wolfsburg in partnership with Volkswagen, CARIAD, Microsoft, and Bosch; specialized in distributed embedded systems, autonomous driving, and mobility cybersecurity."
        }
    ],

    projects: [
        {
            title: "Driver Monitoring System (DMS)",
            desc: "Developed real-time edge AI driver monitoring system on NVIDIA Jetson Orin Nano. Deployed SmolVLM-500M for offline inference to detect drowsiness, phone usage, and loss of consciousness with multimodal AI processing on embedded hardware.",
            tech: "NVIDIA Jetson Orin Nano, SmolVLM-500M, MediaPipe, YOLO, Python"
        },
        {
            title: "Road Surface Condition Estimation",
            desc: "Built camera-based road surface estimation system for autonomous vehicles during hackathon. Utilized CARLA simulator and Eclipse KUKSA/Zenoh framework for vehicle data integration and real-time road condition classification.",
            tech: "CARLA, Eclipse KUKSA, Zenoh, Computer Vision, Python"
        },
        {
            title: "ACC Controller Design & Validation",
            desc: "Designed and validated Euro NCAP-compliant Adaptive Cruise Control (ACC) controller for capstone project. Developed control logic in MATLAB/Simulink and performed comprehensive validation testing in IPG CarMaker simulation environment.",
            tech: "MATLAB/Simulink, IPG CarMaker, Euro NCAP, Control Systems"
        }
    ],

    skills: [
        { category: "Programming Languages", list: "Python, C/C++, Qt/QML, MATLAB/Simulink" },
        { category: "AI & Computer Vision", list: "YOLO, MediaPipe, SmolVLM, OpenCV, Deep Learning, Edge AI Deployment" },
        { category: "Automotive Platforms", list: "CARLA Simulator, IPG CarMaker, Eclipse KUKSA, Zenoh, VSS" },
        { category: "Embedded Systems", list: "NVIDIA Jetson Orin Nano, Raspberry Pi, CAN Communication, Real-time Processing" },
        { category: "SDV Technologies", list: "Vehicle Data Acquisition, HMI Visualization, Sensor Integration" },
        { category: "Requirements Engineering", list: "IBM DOORS, Jira" }
    ]
}
