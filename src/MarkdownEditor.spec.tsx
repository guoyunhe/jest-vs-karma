import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { MarkdownEditor } from "./MarkdownEditor";
import ReactMarkdown from "react-markdown";

describe("<MarkdownEditor/>", () => {
  it("renders empty result", () => {
    const wrapper = mount(<MarkdownEditor />);

    expect(wrapper.find(".editor").prop("value")).to.equal("");
    expect(wrapper.find(ReactMarkdown).text()).to.equal("");
  });

  it("renders paragraphs", () => {
    const wrapper = mount(<MarkdownEditor />);

    const text =
      "Hello, this is a paragraph.\n\nOMG, this is a new paragraph, you guys.";

    // Simulate typing...
    for (let i = 0; i < text.length; i++) {
      const value = text.substr(0, i + 1);
      wrapper.find(".editor").simulate("change", { target: { value } });
      expect(wrapper.find(".previewer p").length).to.equal(i > 28 ? 2 : 1);
    }

    expect(wrapper.find(ReactMarkdown).html()).to.equal(
      '<div class="previewer"><p>Hello, this is a paragraph.</p><p>OMG, this is a new paragraph, you guys.</p></div>'
    );
    expect(wrapper.find(".previewer p").first().text()).to.equal(
      "Hello, this is a paragraph."
    );
    expect(wrapper.find(".previewer p").last().text()).to.equal(
      "OMG, this is a new paragraph, you guys."
    );
  });

  it("renders different blocks", () => {
    const wrapper = mount(<MarkdownEditor />);

    wrapper.find(".editor").simulate("change", {
      target: {
        value: `# Markdown syntax guide

      ## Headers

      # This is a Heading h1
      ## This is a Heading h2
      ###### This is a Heading h6

      ## Emphasis

      *This text will be italic*
      _This will also be italic_

      **This text will be bold**
      __This will also be bold__

      _You **can** combine them_

      ## Lists

      ### Unordered

      * Item 1
      * Item 2
      * Item 2a
      * Item 2b

      ### Ordered

      1. Item 1
      1. Item 2
      1. Item 3
        1. Item 3a
        1. Item 3b

      ## Images

      ![This is a alt text.](/image/sample.png "This is a sample image.")

      ## Links

      You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

      ## Blockquotes

      > Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
      >
      >> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

      ## Tables

      | Left columns  | Right columns |
      | ------------- |:-------------:|
      | left foo      | right foo     |
      | left bar      | right bar     |
      | left baz      | right baz     |

      ## Blocks of code

      \`\`\`
      let message = 'Hello world';
      alert(message);
      \`\`\`

      ## Inline code

      This web site is using \`markedjs/marked\`.`,
      },
    });

    expect(wrapper.find(ReactMarkdown).find("script").exists()).to.equal(false);
  });

  it("does not allow <script>", () => {
    const wrapper = mount(<MarkdownEditor />);

    wrapper.find(".editor").simulate("change", {
      target: { value: '<script>alert("hacked!")</script>' },
    });

    expect(wrapper.find(ReactMarkdown).find("script").exists()).to.equal(false);
  });
});
