// FIX: Provide a basic express server implementation to resolve file content errors.
import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('ReviewFlow Server is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
