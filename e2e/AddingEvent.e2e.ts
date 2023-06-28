import { test, expect } from '@playwright/test';

import { CALENDAR, TASKBAR } from '../src/testIds';

const EVENT_DATA = {
  title: 'example event',
  timeFrom: '12:35',
  timeTo: '18:55',
  location: 'My house in London',
};

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/', { waitUntil: 'load' });
});

test.use({ viewport: { width: 1500, height: 1000 } });

test('should create event and add it to the localStorage', async ({ page }) => {
  await page.getByTestId(TASKBAR.TIME_AND_DATE).click();
  await page.getByTestId(CALENDAR.ARROWS.DOWN).click();
  await page.getByRole('button', { name: /16/ }).click();
  await page.getByTestId(CALENDAR.EVENTS.TITLE).type(EVENT_DATA.title);
  await page.getByTestId(CALENDAR.EVENTS.TIME_PICKER_FROM).type(EVENT_DATA.timeFrom);
  await page.getByTestId(CALENDAR.EVENTS.TIME_PICKER_TO).type(EVENT_DATA.timeTo);
  await page.getByTestId(CALENDAR.EVENTS.LOCATION).type(EVENT_DATA.location);
  await page.getByTestId(CALENDAR.EVENTS.CREATE_EVENT).click();

  const localStorage = await page.evaluate(() => window.localStorage.getItem('events'));

  const parsedEvents = await JSON.parse(localStorage as string);

  expect(parsedEvents).toContainEqual(
    expect.objectContaining({
      id: expect.any(String),
      title: EVENT_DATA.title,
      timeFrom: EVENT_DATA.timeFrom,
      timeTo: EVENT_DATA.timeTo,
      location: EVENT_DATA.location,
      date: `16-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
    }),
  );
});
