import faker from 'faker';
import { TestimonialCardRoundedProps } from '../testimonial-card-rounded/TestimonialCardRounded';

export const testimonialCardRoundedMock = (
  amount: number,
  color: 'primary' | 'secondary'
): TestimonialCardRoundedProps[] => {
  const outArray: TestimonialCardRoundedProps[] = [];

  for (let i = 0; i < amount; i++) {
    const testimonialCardRoundVariationLocal: TestimonialCardRoundedProps = {
      color: color,
      identification: faker.name.title() + ' ' + faker.company.companyName(),
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      testimonial: faker.lorem.sentences(4),
    };

    outArray.push(testimonialCardRoundVariationLocal);
  }

  return outArray;
};
