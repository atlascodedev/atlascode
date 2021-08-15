import { motion } from 'framer-motion';
import { Box } from '@material-ui/core';

export type MotionBoxProps = ReturnType<typeof MotionBox>

export const MotionBox = motion(Box);

export default MotionBox;
