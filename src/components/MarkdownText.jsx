import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownText({ children }) {
  return (
    <div className="markdown-text">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}