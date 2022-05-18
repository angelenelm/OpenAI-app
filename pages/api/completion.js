import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.prompt),
    temperature: 0.6,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

const generatePrompt = (prompt) => {
  return `Question: How do I concatenate arrays in Javascript?
  
  Answer: You can use the spread operator.
  
  Question: ${prompt}
  Answer:`;
};
