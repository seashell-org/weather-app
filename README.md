# Weather App Challenge

Be sure to read all of this document carefully, and follow the guidelines within.

# Tasks

Create a basic weather application with the following features:

- You can search for a city name to display the current weather at that location.

## Acceptance Criteria

- Use the `weather` API located in `pages/api/weather/[city].ts` to query for the weather at a particular city.

  - Use the `weather` component located in `components/weather`. It includes a `getCurrentWeatherByCity` method to query for the weather at a particular city.

- An input field to search for a city
- The city weather should display:
  - Location (city and country)
  - Weather status (cloudy, sunny, etc)
  - Temperature (current, high, and low in any units)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
