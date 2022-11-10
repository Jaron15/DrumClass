import React from 'react';

const CategoryContext = React.createContext({
    categories: [ {
        catName: 'paradiddles',
        subCats: ['single paradiddle', 'double paradiddle', 'triple paradiddle']
    },
    {
    catName: 'rolls',
    subCats: ['single stroke roll', 'double stroke roll', 'triple stroke roll']
    },
    {
    catName: 'hands',
    subCats: ['hand speed', 'hand independence', 'weak hand']
    },
    {
    catName: 'feet',
    subCats: ['kick speed', 'foot technique', 'left foot', 'double bass']
    },
    {
    catName: 'fills',
    subCats: ['beginner fills', 'intermediate fills', 'Advanced fills', ]
    },

],

questions: [ {
    question: 'have you been through any lessons at all? Online or in person?',
    category: 'Beginner',
    About: "Luckily, there are plenty of videos made by many creators for someone exactly where you're at. Select any beginner level video and it should give you a good place to start."
},
{
    question: 'Have you been taught about basic technique? (how to sit, hold sticks, and make basic movements around the kit)',
    category: 'beginner technique',
    About: "Technique is a crucial part of playing the drums and the sooner you start being aware of it and working on it, the better it will be for you in the long run."
},
{
question: 'Are you familiar with basic rudiments?',
category: 'Rudiments',
About: "Rudiments are considered by some to be the 'vocabulary' that you use to articulate your ideas behind the kit. There are nearly a thousand different drum rudimemnts, but don't worry you dont have to learn every single one. However, pick a rudiment like the paradiddle to spend some time learning and you'll be surprised how much it changes how you play."
},
{
    question: 'Have you worked on independece?',
    category: 'Independence',
    About: "Independence is an important part of being a drummer because to be the best drummer you can be you need to be able to utilize all your tools (limbs). Pick a lesson on hand independence, feet independece, or just limb independence, everyone can benefit from improving this area of their game."
},
{
    question: 'Have you been through any lessons on grooves?',
    category: 'Grooves',  
    About: "Grooves are the thing that most people think about when they think about the sound of drums being played. Having a solid foundation in any kind of grooves, regardless of genre is going to improve the musicality of your drumming."
},
{
    question: 'Have you taken any lessons on fills?',
    category: 'Fills',  
    About: "Fills (some people refer to as chops) are typically a shorter musical phrase that is used to transition from one section of a song to another. As a drummer this is where you get to show off your skills and add some flare to song. Be careful not to be the drummer that abuses fills though. Knowing them is one thing, knowing when to use them is a whole other skill."
},

]
})

export default CategoryContext;