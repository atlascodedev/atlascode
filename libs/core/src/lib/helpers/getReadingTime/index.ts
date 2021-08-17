const WORDS_PER_MIN = 275; // wpm

const IMAGE_READ_TIME = 10; // in seconds

// const CHINESE_KOREAN_READ_TIME = 500; // cpm

const IMAGE_TAGS = ['img', 'Image'];

function imageCount(imageTags: unknown[], string: string) {
  const combinedImageTags = imageTags.join('|');
  const pattern = `<(${combinedImageTags})([\\w\\W]+?)[\\/]?>`;
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

function imageReadTime(
  customImageTime = IMAGE_READ_TIME,
  tags = IMAGE_TAGS,
  string: string
) {
  let seconds = 0;
  const count = imageCount(tags, string);

  if (count > 10) {
    seconds = (count / 2) * (customImageTime + 3) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
  } else {
    seconds = (count / 2) * (2 * customImageTime + (1 - count)); // n/2[2a+(n-1)d]
  }
  return {
    time: seconds / 60,
    count,
  };
}

function stripTags(string: string) {
  const pattern = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>';
  const reg = new RegExp(pattern, 'gi');
  return string.replace(reg, '');
}

function stripWhitespace(string: string) {
  return string.replace(/^\s+/, '').replace(/\s+$/, '');
}

function wordsCount(string: string) {
  const pattern = '\\w+';
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

export const readingTime = (
  HTMLString: string
): { readTime: number; readTimeWithImages: number } => {
  const { count, time } = imageReadTime(
    IMAGE_READ_TIME,
    IMAGE_TAGS,
    HTMLString
  );

  const noTagString: string = stripTags(HTMLString);

  const noSpaceNoTagString: string = stripWhitespace(noTagString);

  const wordCountNum: number = wordsCount(noSpaceNoTagString);

  const wordTime: number = wordCountNum / WORDS_PER_MIN;

  const wordTimeWithImageTime: number = wordTime + time;

  return {
    readTime: wordTime,
    readTimeWithImages: wordTimeWithImageTime,
  };
};

export default readingTime;
