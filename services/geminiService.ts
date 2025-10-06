import { GoogleGenAI, Type } from "@google/genai";
import type { Review } from '../types';

// FIX: Initialize the GoogleGenAI client according to the documentation.
// The API key must be obtained exclusively from the environment variable `process.env.API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Generates a one-sentence summary of a customer review.
 * @param reviewText The text of the review.
 * @returns A promise that resolves to the summary string.
 */
export const generateReviewSummary = async (reviewText: string): Promise<string> => {
  try {
    // FIX: Use ai.models.generateContent to query the GenAI model.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Summarize the key sentiment of this customer review in one short sentence: "${reviewText}"`,
    });
    // FIX: Extract text directly from the response object.
    return response.text.trim();
  } catch (error) {
    console.error('Error generating review summary:', error);
    throw new Error('Failed to generate summary from AI.');
  }
};

/**
 * Generates three suggested responses for a customer review.
 * @param review The review object.
 * @returns A promise that resolves to an array of three response strings.
 */
export const generateResponses = async (review: Review): Promise<string[]> => {
  const prompt = `A customer left a ${review.rating}-star review.
Review text: "${review.reviewText}"

Based on the review, generate 3 distinct, professional, and empathetic responses.
The tone should be appropriate for the rating. For positive reviews, be thankful. For negative reviews, be apologetic and offer to help.
Each response should be a maximum of 3 sentences.
`;

  try {
    // FIX: Use ai.models.generateContent with a JSON response schema.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            responses: {
              type: Type.ARRAY,
              description: "Array of 3 suggested responses.",
              items: {
                type: Type.STRING
              }
            }
          },
          required: ['responses']
        },
      }
    });

    // FIX: Extract and parse the JSON text from the response.
    const jsonText = response.text.trim();
    const parsed = JSON.parse(jsonText);
    if (parsed && Array.isArray(parsed.responses)) {
      return parsed.responses.slice(0, 3);
    }
    throw new Error("AI did not return responses in the expected format.");
  } catch (error) {
    console.error('Error generating responses:', error);
    if (error instanceof Error && error.message.includes('JSON')) {
        throw new Error('Failed to generate valid responses from AI. Please try again.');
    }
    throw new Error('Failed to generate responses from AI.');
  }
};
