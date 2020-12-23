import React from 'react';
import logo from '../images/dsc_logo.svg';

import AdbIcon from '@material-ui/icons/Adb';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import saba_fathi from './../images/saba_fathi.jpg';
import pulasthi_peiris from './../images/pulasthi_peiris.JPG';
import parsa_yadollahi from './../images/parsa_yadollahi.jpeg';
import mohamed_beydoun from './../images/mohamed_beydoun.jpg';
import julie_tian from './../images/julie_tian.jpg';
import profile_picture from '../images/profile_picture.jpg';

export const timeline = [
  {
    time: '2019.12.01',
    image: logo,
    icon: <FastfoodIcon />,
    title: 'title1',
    subheader: 'subheader1',
    content: `ey, altKey, metaKey, ge
  rState, button, butjqnwdkjnsacn
  qwdjer a collection of`
  },
  {
    time: '2019.12.02',
    image: logo,
    icon: <AdbIcon />,
    title: 'title2',
    subheader: 'subheader2',
    content: `dqwjdqlwldmlkqmskcmls
  qwdijqoiejdqkckljneiojdfojqoeljcf
  qwoifdjoiqejfclqnejnlcfjqwndlj`
  },
  {
    time: '2019.12.03',
    image: logo,
    icon: <AdbIcon color="secondary" />,
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
    description: 'Basic Youtuber, Aspiring Podcaster',
    picture: profile_picture
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
    picture: profile_picture
  },
  {
    name: 'Simon Berens',
    position: 'Back-End Lead',
    description: `Simon is a second year computer science student interested in compilers,
    distributed systems and competitive programming.
    He spends his time reading, playing ping pong,
    and typing on his dactyl manuform`,
    picture: profile_picture
  },
  {
    name: 'Cole Killian',
    position: 'Back-End Developer',
    description: `Fellow Math and Comp Sci Student.
    Enjoys hiking, guitar, building full stack apps, and competitive programming.
    Aspiring blogger, ask me about org mode :).`,
    picture: profile_picture
  }
];

export const team_members = [
  // 1
  {
    name: 'Saba Fathi',
    position: 'Front-End Dev',
    description: `2 bugs fixed, 14 bugs found. First Year SWE student…
    Saba is a first year software engineering student and is interested
    in the gaming industry, cursed memes and is the embodiment of 🗿.
    Rumor has it, he lives off steak.`,
    picture: saba_fathi
  },
  // 4
  {
    name: 'Pulasthi Peiris',
    position: 'Front-End Developer',
    description: `Pulasthi is a second year Electrical Engineering
    student with interests in embedded systems design and full stack
    development. He loves cheesecake, speaks at 40 Hz sometimes,
    and enjoys automating things to make life easier.`,
    picture: pulasthi_peiris
  },
  // 5
  {
    name: 'Julie Tian',
    position: 'Back-End Developer',
    description: 'U3 Pharmacology and Computer Science. I build keyboards',
    picture: julie_tian
  },
  // 9
  {
    name: 'Michael Li',
    position: 'Back-End Developer',
    description: `U3 SWE student, enjoy watching and playing fútbol, hala madrid ⚽`,
    picture: profile_picture
  },
  // 10
  {
    name: 'Changjun Zhou',
    position: 'Front-End Developer',
    description: `U2 SWE student, a secret guy who is trying to find how to use docker.`,
    picture: profile_picture
  },
  // 11
  {
    name: 'Massy Mahamli',
    position: 'Design Lead & Frontend Developer',
    description: `U3 Software engineering student , love creative tech and filmmaking`,
    picture: profile_picture
  },
  // 12
  {
    name: 'James Ting',
    position: 'Back-End Developer',
    description: `U3 Computer Science student from Vancouver,
    who enjoys solving problems, coding programs and flying planes`,
    picture: profile_picture
  },
  // 13
  {
    name: 'Ridwan Kurmally',
    position: 'Back-End Developer',
    description: `U3 Honours CS student, love gaming, football and programming challenges`,
    picture: profile_picture
  },
  // 14
  {
    name: 'Kareem Sayed',
    position: 'Back-End Developer',
    description: `U3 Finance and CS student from Vancouver and Cairo,
    fascinated with Fintech, algorithmic trading,
    as well as building the future of the financial and technical world`,
    picture: profile_picture
  }
];
