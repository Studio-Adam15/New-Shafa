import React from 'react';
import { domMax, LazyMotion, MotionConfig } from 'motion/react';
import { TactileCursor } from './TactileCursor';
import { IntroScene } from './IntroScene';
import { GrillScene } from './GrillScene';
import { EditorialMarquee } from './EditorialMarquee';
import { MenuScene } from './MenuScene';
import { FreshnessScene } from './FreshnessScene';
import { PrinciplesScene } from './PrinciplesScene';
import { GalleryScene } from './GalleryScene';
import { RestaurantScene } from './RestaurantScene';

const BelowFoldSections: React.FC = () => {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">
        <TactileCursor />
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
