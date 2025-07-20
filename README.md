
# ArtFolio

This is a Next.js project for an artist portfolio, created in Firebase Studio.

To get started, take a look at `src/app/page.tsx`.

## Environment Variables

This project can be run without any environment variables.

However, to enable optional AI features using Genkit and the Gemini API in the future, you will need to set up a `.env.local` file.

### Gemini API Key (Optional)

If you decide to implement AI functionality, you will need an API key.

1.  Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to get your API key.
2.  Create a `.env.local` file in the root of your project and add the key:

```env
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

After setting up the `.env.local` file, restart your Next.js development server for the changes to take effect.
