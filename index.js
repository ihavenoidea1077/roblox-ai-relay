app.post("/generate", async (req, res) => {
  const prompt = req.body.prompt;
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    const text = response.choices[0].message.content;
    res.json({ code: text });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});
