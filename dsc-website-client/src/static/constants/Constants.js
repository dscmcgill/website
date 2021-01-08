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

// Upcoming Events
import css_events from '../images/upcomingEvents/css_event.jpeg';
import react_events from '../images/upcomingEvents/react_event.png';
import tensor_flow_event from '../images/upcomingEvents/tensor_flow_event.png';

// Past Events
import ComputerIcon from '@material-ui/icons/Computer';
import GroupIcon from '@material-ui/icons/Group';
import TableChartIcon from '@material-ui/icons/TableChart';

export const timeline = [
  {
    time: '2019.12.01',
    image: logo,
    icon: <ComputerIcon />,
    title: 'title1',
    subheader: 'subheader1',
    content: `ey, altKey, metaKey, ge
  rState, button, butjqnwdkjnsacn
  qwdjer a collection of`
  },
  {
    time: '2019.12.02',
    image: logo,
    icon: <GroupIcon />,
    title: 'title2',
    subheader: 'subheader2',
    content: `dqwjdqlwldmlkqmskcmls
  qwdijqoiejdqkckljneiojdfojqoeljcf
  qwoifdjoiqejfclqnejnlcfjqwndlj`
  },
  {
    time: '2019.12.03',
    image: logo,
    icon: <TableChartIcon />,
    title: 'title3',
    subheader: 'subheader3',
    content: `qoifhjcioqejfoicnjqew
  qwudhuqehfchqeoijhfdpiqjwpfijcqew
  qeijfdoiqejlcffiocijfe`
  }
];

export const teams_leads = [
  {
    name: 'Maneth Kalatunge',
    position: 'DSC Lead',
    description: `Maneth is a U3 Computer Science Student
      interested in software development and content
       creation. He talks about college related
        topics in his youtube channel and podcast.`,
    picture: maneth
  },
  {
    name: 'Parsa Yadollahi',
    position: 'Front-End Tech Lead',
    description: `Parsa is a third year Computer Science student
    interested in software engineering and quantitative finance,
    and being the six-quatre waste yute lord…`,
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
    description: `2 bugs fixed, 14 bugs found. First Year SWE student…
    Saba is a first year software engineering student and is interested
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
