import { test, expect } from '@playwright/test';

import { CALENDAR, TASKBAR } from '../src/testIds';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/', { waitUntil: 'load' });
});

test.use({ viewport: { width: 1500, height: 1000 } });

test('should create event and add it to the localStorage', async ({ page }) => {
  await page.getByTestId(TASKBAR.TIME_AND_DATE).click();
  await page.getByTestId(CALENDAR.ARROWS.DOWN).click();
  await page.getByRole('button', { name: /16/ }).click();
  await page.getByTestId(CALENDAR.EVENTS.TITLE).type('example event');
  await page.getByTestId(CALENDAR.EVENTS.TIME_PICKER_FROM).type('12:35');
  await page.getByTestId(CALENDAR.EVENTS.TIME_PICKER_TO).type('18:55');
  await page.getByTestId(CALENDAR.EVENTS.LOCATION).type('My house in London');
  await page.getByTestId(CALENDAR.EVENTS.CREATE_EVENT).click();

  const localStorage = await page.evaluate(() => window.localStorage.getItem('events'));

  const parsedEvents = await JSON.parse(localStorage as string);

  expect(parsedEvents).toContainEqual(
    expect.objectContaining({
      id: expect.any(String),
      title: 'example event',
      timeFrom: '12:35',
      timeTo: '18:55',
      location: 'My house in London',
      date: '16-4-2023',
    }),
  );
});
