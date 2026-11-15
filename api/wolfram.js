module.exports = async (req, res) => {
    const q = req.query.q;
    if (!q) return res.status(400).send('Missing ?q=');
  
    const url = 'https://www.wolframalpha.com/api/v1/llm-api'
      + '?input=' + encodeURIComponent(q)
      + '&maxchars=800'
      + '&appid=' + process.env.WOLFRAM_APP_ID;
  
    const r = await fetch(url);
    const text = await r.text();
    res.status(r.status).send(text);
  };