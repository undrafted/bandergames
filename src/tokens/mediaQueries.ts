const screenSizes = {
  xxs: 0,
  xs: 480,
  sm: 720,
  md: 1024,
  lg: 1280
};

const customMediaMaxQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const customMediaMinQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth}px)`;

const createMediaMap = (createMediaFn: (n: number) => string) =>
  (Object.keys(screenSizes) as (keyof typeof screenSizes)[]).reduce(
    (acc, label) => ({
      ...acc,
      [label]: createMediaFn(screenSizes[label])
    }),
    {} as { [key in keyof typeof screenSizes]: string }
  );

export const mediaMaxWidth = createMediaMap(customMediaMaxQuery);

export const mediaMinWidth = createMediaMap(customMediaMinQuery);
