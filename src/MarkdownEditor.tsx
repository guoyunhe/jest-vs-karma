import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export function MarkdownEditor() {
  const [markdownText, setMarkdownText] = useState("");

  return (
    <div>
      <textarea
        className="editor"
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
      />
      <ReactMarkdown className="previewer">{markdownText}</ReactMarkdown>
    </div>
  );
}
