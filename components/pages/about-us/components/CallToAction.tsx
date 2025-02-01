import React from 'react';
import Card from './Card';
import { IconForHire, IconForTalents, IconForSales, IconForContributors, IconForHireWhite, IconForTalentsWhite, IconForSalesWhite, IconForContributorsWhite } from '@/public/assets/icons';

const pageData = {
    title: "Want to Join?",
    cards: [
        {
            title: "For Hire",
            text: "You can hire a dedicated developer to meet your individual needs, available for various types of work arrangements—including hourly or full-time commitments. Choose the option that suits you best and enjoy flexible collaboration tailored to your project's requirements.",
            btnText: "Form for Hire",
            icon: IconForHire,
            iconWhite: IconForHireWhite
        },
        {
            title: "For Talents",
            text: "If you are currently looking for new career opportunities, we'd love to help you realize your potential. Join us in an environment where you can develop exciting projects and expand your professional skills. Fill in the application form, and our managers will be able to consult you.",
            btnText: "Form for Talents",
            icon: IconForTalents,
            iconWhite: IconForTalentsWhite
        },
        {
            title: "For Contributors",
            text: "We are building a freelance platform where our main goal is to help IT professionals unlock their potential and receive fair compensation for their work. We're here to make sure IT professionals get the best of themselves and their salaries. We would love to have you on board as one of our contributors. Please fill out the form, and we’ll be thrilled to welcome you to our team as we embark on this exciting journey together!",
            btnText: "Form for Contributors",
            icon: IconForContributors,
            iconWhite: IconForContributorsWhite
        },
        {
            title: "For Sales",
            text: "We offer Sales Managers a $2000 reward for every successful project referral and are open to discussing custom terms.<br/><br/> We’re interested in long-term partnerships and open to dialogue. If you have ideas or proposals, reach out through the form.",
            btnText: "Form for Sales",
            icon: IconForSales,
            iconWhite: IconForSalesWhite
        }
    ]
};

const CallToAction = () => {
    return (
        <div className="flex flex-col w-full pb-10 lg:pb-25">
            <h2 className="text-textprimary text-2xl lg:text-50 px-2 pt-10 pb-8 lg:px-10 lg:pt-25 lg:pb-15">{pageData.title}</h2>
            <div className="flex w-full flex-wrap">
                {pageData.cards.map((card, index) => (
                    <Card key={index} title={card.title} text={card.text} btnText={card.btnText} icon={card.icon} iconWhite={card.iconWhite} />
                ))}
            </div>
        </div>
    );
};

export default CallToAction;