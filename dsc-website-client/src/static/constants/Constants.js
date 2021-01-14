import React from 'react';
import logo from '../images/dsc_logo.svg';

import saba_fathi from './../images/members/saba_fathi.jpg';
import pulasthi_peiris from './../images/members/pulasthi_peiris.JPG';
import parsa_yadollahi from './../images/members/parsa_yadollahi.jpeg';
import mohamed_beydoun from './../images/members/mohamed_beydoun.jpg';
import julie_tian from './../images/members/julie_tian.jpg';
import maneth from './../images/members/Maneth.jpg';
import james_ting from './../images/members/james_ting.jpeg';
import simon_berens from './../images/members/simon_berens.jpg';
import jenna_latiok from './../images/members/jenna_latiok.jpg';
import changjun_zhou from './../images/members/changjun_zhou.jpg';
import ridwan_kumarlly from './../images/members/ridwan_kumarlly.jpg';
import michael_li from './../images/members/michael_li.jpg';
import cole_killian from './../images/members/cole_killian.png';
import massy_mahamli from './../images/members/massy_mahamli.JPG';
import kareem_sayed from './../images/members/kareem_sayed.jpg';

// Past events images
import event1 from './../images/pastEvents/event1_tech_talk.png';
import event2 from './../images/pastEvents/event2_Info_Session.jpg';
import event3 from './../images/pastEvents/event3_cloud_study.jpeg';
import event4 from './../images/pastEvents/event4_tech_talk.jpeg';
import event5 from './../images/pastEvents/event5_tech_talk.png';
import event6 from './../images/pastEvents/event6_tech_talk.png';
import event7 from './../images/pastEvents/event7_kubernetes.png';

// Upcoming Events
import css_events from '../images/upcomingEvents/css_event.jpeg';
import react_events from '../images/upcomingEvents/react_event.png';
import tensor_flow_event from '../images/upcomingEvents/tensor_flow_event.png';

// Past Events Icons
import ComputerIcon from '@material-ui/icons/Computer';
import GroupIcon from '@material-ui/icons/Group';
import TableChartIcon from '@material-ui/icons/TableChart';
import Chat from '@material-ui/icons/Chat';
import GroupWork from '@material-ui/icons/GroupWork';
import MenuBook from '@material-ui/icons/MenuBook';

export const pastEvents = [
  {
    time: 'SEP 10, 2020',
    image: event1,
    icon: <GroupIcon />,
    title: 'Speaker Session / Tech Talk',
    subheader: 'Get Noticed & Launch Your Career with LinkedIn',
    content: `In this session, we learned how to use LinkedIn to boost your connections and your profile outreach. We also talked about how to use LinkedIn Learning.
    Mehmet Sever guided us through this workshop, he is the current Google DSC Lead and LinkedIn Learning Student Ambassador.`
  },
  {
    time: 'SEP 30, 2020',
    image: event2,
    icon: <ComputerIcon />,
    title: 'Info Session - Virtual',
    subheader: 'Info Session - McGill University ',
    content: `Welcome to the Developer Student Club
              at McGill University! Join us for our kickoff info session!
              Come learn all about the Developer
              Student Club! We'll be going over what DSC
              at McGill is all about and what our plans are for the year!
              Come meet the team and other members of DSC! Everyone is welcome!`
  },
  {
    time: 'OCT 10, 2020',
    image: event3,
    icon: <GroupWork />,
    title: 'Hands-On Workshop - Virtual',
    subheader: 'Google Cloud Study Jam - Google Cloud Essentials',
    content: `Join a community of like-minded developers and explore
              the latest Google Cloud technologies as a team.
              Join us for our upcoming Cloud Study Jam and get
              hands-on experience with Google Cloud Platform.`
  },
  {
    time: 'OCT 14, 2020',
    image: event4,
    icon: <Chat />,
    title: 'Speaker Session / Tech Talk - Virtual',
    subheader: 'Fireside Chat with Dr. John Hennessy - Chairman Alphabet Inc.',
    content: `Join us for a one-hour session with Alphabet Chairman John Hennessy
              on October 14th, 2020 at 7:00 PM EST. We’ll discuss his journey from technology
              entrepreneur to Stanford President, as well as his leadership of Google. Dr. Hennessy
              is also an alumnus of Villanova University and will share his experience as a student
              and advise current students.`
  },
  {
    time: 'OCT 15, 2020',
    image: event5,
    icon: <TableChartIcon />,
    title: 'Speaker Session / Taech Talk - Virtual',
    subheader: 'Peer-to-Peer Internship Panel',
    content: `At this event, we heard about internship and work experiences,
              accomplishments, and advice for students breaking into the tech industry.
              Our panellists included previous interns from many different large tech
              companies including, Amazon, IBM, Microsoft, Facebook, and more!`
  },
  {
    time: 'NOV 18, 2020',
    image: event7,
    icon: <MenuBook />,
    title: 'Hands-On Workshop - Virtual',
    subheader: 'Intro to Kubernetes',
    content: `Our speaker, Omkar Joshi, is a Certified Kubernetes Application Developer,
              currently working as an Online Programmer at Ubisoft Montreal, with more than 5 years
              of software product R&D experience in building RESTful web services on distributed
              cloud based systems and cloud native applications`
  }
];

export const teams_leads = [
  {
    name: 'Maneth Kalatunge',
    position: 'DSC Lead',
    description: `Maneth is a U3 Computer Science Student
      interested in software development and content
       creation. He talks about college re1lated
        topics in his youtube channel and podcast.`,
    picture: maneth
  },
  {
    name: 'Parsa Yadollahi',
    position: 'Front-End Tech Lead',
    description: `Parsa is a third year Computer Science student
    interested in quantitative finance. 
    He was last seen roaming Trottier's 3rd floor, while being the six-quatre waste lord…`,
    picture: parsa_yadollahi
  },
  {
    name: 'Mohamed Beydoun',
    position: 'Back-End Dev Lead',
    description: `U3 Computer Science student with interest in Cloud and Web development,
    as well as robotics. I spend most of my time rock climbing,
    gaming, and building weird robots`,
    picture: mohamed_beydoun
  },
  {
    name: 'Jenna Latiok',
    position: 'Communications Lead',
    description: `Fourth year comp and neuroscience student.
    Low key music critic and meme enthusiast.`,
    picture: jenna_latiok
  },
  {
    name: 'Simon Berens',
    position: 'Back-End Lead',
    description: `Simon is a second year computer science student interested in compilers,
    distributed systems and competitive programming.
    He spends his time reading, playing ping pong,
    and typing on his dactyl manuform`,
    picture: simon_berens
  }
];

export const team_members = [
  {
    name: 'Saba Fathi',
    position: 'Front-End Dev',
    description: `2 bugs fixed, 14 bugs found.
    Saba is a first year Software Engineering student and is interested
    in the gaming industry, cursed memes and is the embodiment of 🗿.
    Rumor has it, he lives off steak.`,
    picture: saba_fathi
  },
  {
    name: 'Pulasthi Peiris',
    position: 'Front-End Developer',
    description: `Pulasthi is a second year Electrical Engineering
    student with interests in embedded systems design and full stack
    development. He loves cheesecake, speaks at 40 Hz sometimes,
    and enjoys automating things to make life easier.`,
    picture: pulasthi_peiris
  },
  {
    name: 'Julie Tian',
    position: 'Back-End Developer',
    description: 'U3 Pharmacology and Computer Science. I build keyboards',
    picture: julie_tian
  },
  {
    name: 'Michael Li',
    position: 'Back-End Developer',
    description: `U3 SWE student, enjoy watching and playing fútbol, hala madrid ⚽`,
    picture: michael_li
  },
  {
    name: 'Cole Killian',
    position: 'Back-End Developer',
    description: `Fellow Math and Comp Sci Student.
    Enjoys hiking, guitar, building full stack apps, and competitive programming.
    Aspiring blogger, ask me about org mode :).`,
    picture: cole_killian
  },
  {
    name: 'Changjun Zhou',
    position: 'Front-End Developer',
    description: `U2 SWE student, a secret guy who is trying to find how to use docker.`,
    picture: changjun_zhou
  },
  {
    name: 'Massy Mahamli',
    position: 'Design Lead & Frontend Developer',
    description: `U3 Software engineering student , love creative tech and filmmaking`,
    picture: massy_mahamli
  },
  {
    name: 'James Ting',
    position: 'Back-End Developer',
    description: `U3 Computer Science student from Vancouver,
    who enjoys solving problems, coding programs and flying planes`,
    picture: james_ting
  },
  {
    name: 'Ridwan Kurmally',
    position: 'Back-End Developer',
    description: `U3 Honours CS student, love gaming, football and programming challenges`,
    picture: ridwan_kumarlly
  },
  {
    name: 'Kareem Sayed',
    position: 'Back-End Developer',
    description: `U3 Finance and CS student from Vancouver and Cairo,
    fascinated with Fintech, algorithmic trading,
    as well as building the future of the financial and technical world`,
    picture: kareem_sayed
  }
];

export const upcoming_event_one = {
  date: 'DATE',
  title: 'Title',
  descriprion: 'description',
  image: tensor_flow_event
};

export const next_two_coming_events = [
  {
    date: 'date1',
    title: 'Title1',
    descriprion: 'description1',
    image: css_events
  },
  {
    date: 'date2',
    title: 'Title2',
    descriprion: 'description2',
    image: react_events
  }
];
