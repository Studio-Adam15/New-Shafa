import React from 'react';
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react';
import { LocationFooter } from './LocationFooter';

export const DeferredFooter: React.FC = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <LocationFooter />
      </MotionConfig>
    </LazyMotion>
  );
};
