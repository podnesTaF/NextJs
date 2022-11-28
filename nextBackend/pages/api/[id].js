/** @format */

import { buildFeedbackPath, extractFeedback } from './feedback';

function handler(req, res) {
  const { id } = req.query;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selected = feedbackData.find((item) => item.id === id);
  res.status(200).json({ feedback: selected });
}

export default handler;
