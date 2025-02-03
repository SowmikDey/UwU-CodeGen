import prisma from "../db/db.config.js";
import Groq from "groq-sdk";
import { languageSpecification } from "../lib/utils/languageSpecification.js"; 

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const postPrompt = async (req, res) => {
  try {

    const { userPrompt } = req.body;

    // Enhanced prompt with PythOwO examples
    const enhancedPrompt = `${languageSpecification}

Generate PythOwO code for: ${userPrompt.trim()}
Follow these rules:
1. Use exact keywords: pwease, IF/THWEN/EWIF/EWSE, WHILE/STWEP
2. Maintain 2-space indentation
3. Include cute error handling where needed
4. Wrap code between markers:

=== Begin UwU Code ===
<your code here>
=== End UwU Code ===`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: enhancedPrompt }],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 512,
      top_p: 0.95,
      stop: ["=== End UwU Code ==="]
    });

    // Extract code between markers
    const fullText = chatCompletion.choices[0]?.message?.content || "";
    const codeBlock = fullText.match(/=== Begin UwU Code ===([\s\S]*?)=== End UwU Code ===/)?.[1]?.trim() || fullText;


    const createRes= await prisma.chatmessage.create({
      data: {
       userId : req.user ? parseInt(req.user.id) : null, 
        input: userPrompt,
        content: codeBlock,
      },
    });

   if(createRes){
    return res.status(200).json(createRes);
   }

    res.json({
      uwuCode: codeBlock,
      remaining: req.user ? 'unlimited' : 2 - (req.session.guestUses || 0)
    });

  } catch (error) {
    console.error("Code generation error:", error);
    res.status(500).json({
      error: "Failed to generate UwU code",
      details: error.message
    });
  }
};

export const fetchPrompt = async (req,res) => {
  try {
    const chatRes = await prisma.chatmessage.findMany({
      where:{
      userId: req.user.id
      },
      select:{
      input: true,
      content: true,
      createdAt: true
      }
    });
   
    if(chatRes.length == 0){
      return res.status(200).json([]);
    }

    res.status(200).json(chatRes);

  } catch (error) {
    console.error("error in fetchprompt:", error);
    res.status(500).json({
      error: "Failed to fetch chat history",
      details: error.message
    });
  }
}