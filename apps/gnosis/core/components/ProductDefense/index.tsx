import {
  DefenseCardSection,
  DefenseCardSectionProps,
} from '@atlascode/react-core';
import React from 'react';
import { GiDiploma } from 'react-icons/gi';
import { FaChalkboardTeacher, FaClock, FaGraduationCap } from 'react-icons/fa';
import { IoNewspaperSharp } from 'react-icons/io5';
import { AiOutlineWechat } from 'react-icons/ai';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductDefenseProps {}

const itemList: Pick<DefenseCardSectionProps, 'itemList'>['itemList'] = [
  { icon: GiDiploma, text: 'Cursos reconhecidos pelo MEC' },
  { icon: FaGraduationCap, text: 'Cursos 100% EAD' },
  { icon: FaClock, text: 'Cursos intensivos e extensivos' },
  { icon: FaChalkboardTeacher, text: 'Ambiente de aprendizado online' },
  { icon: IoNewspaperSharp, text: 'TCC opcional' },
  { icon: AiOutlineWechat, text: 'Suporte personalizado' },
];

const ProductDefense = (props: ProductDefenseProps) => {
  return (
    <DefenseCardSection
      bgColor={'#F6F9FB'}
      sx={{ py: '10rem' }}
      itemList={itemList}
      observerProps={{ triggerOnce: false, threshold: 0.4 }}
      animateIn
    />
  );
};

export default ProductDefense;
