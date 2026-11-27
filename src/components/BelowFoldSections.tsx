import React from 'react';
import { domMax, LazyMotion, MotionConfig } from 'motion/react';
import { IntroScene } from './IntroScene';
import { EditorialMarquee } from './EditorialMarquee';
import { GrillScene } from './GrillScene';
import { MenuScene } from './MenuScene';
import { FreshnessScene } from './FreshnessScene';
import { PrinciplesScene } from './PrinciplesScene';
import { GalleryScene } from './GalleryScene';
import { RestaurantScene } from './RestaurantScene';

const BelowFoldSections: React.FC = () => {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">
        <IntroScene />
        <GrillScene />
        <EditorialMarquee />
        <MenuScene />
        <FreshnessScene />
        <PrinciplesScene />
        <RestaurantScene />
        <GalleryScene />
      </MotionConfig>
    </LazyMotion>
  );
};

export default BelowFoldSections;
