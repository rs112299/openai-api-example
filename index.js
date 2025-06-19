import OpenAI from "openai";

const openai = new OpenAI({
    dangerouslyAllowBrowser: true, // Use with caution, only for browser environment
    apiKey:process.env.OPENAI_API_KEY, // Ensure you have set your OpenAI API key in .env file    
});

const messages = [
    {   role:"system", 
        content: "You are a helpful assistant." 
    },
    {
        role: "user", 
        content: "What is the capital of Canada?"        
    }
];

const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: messages
}) 

console.log(response.choices[0].message.content);