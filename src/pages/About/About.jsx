import React from 'react';
import MainAboutUs from './MainAboutUs';
import VisionandMission from './VisionandMission';
import OurTeam from './OurTeam';

const About = () => {
  return (
    <section>
      <div className="fixed inset-0 -z-10 bg-white">
        {/* Dots layer */}
        <div
          className={[
            'pointer-events-none absolute inset-0',
            'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]',
            '[background-size:16px_16px]',
            // Mask the edges so the dots fade out toward the sides
            '[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]',
            '[-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]',
            '[mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]',
          ].join(' ')}
        />
      </div>
      <MainAboutUs />
      <OurTeam />
      <VisionandMission />
    </section>
  );
};

export default About;
