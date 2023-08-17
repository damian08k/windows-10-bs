const textToggleMap: Record<string, string> = {
  'Show below Ribbon': 'Show above Ribbon',
  'Show above Ribbon': 'Show below Ribbon',
};

export const toggleText = (text: string): string => {
  return textToggleMap[text] || text;
};
