"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Redo,
  RemoveFormatting,
  Sparkles,
  Type,
  Underline,
  Undo,
} from "lucide-react";

interface RichTextEditorProps {
  name: string;
  defaultValue?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  category?: string | null;
}

export function RichTextEditor({
  name,
  defaultValue = "",
  value,
  onChange,
  placeholder = "Write description here...",
  category,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>(value ?? defaultValue);
  const [isHtmlMode, setIsHtmlMode] = useState<boolean>(false);

  // Sync internal state when external value changes
  useEffect(() => {
    if (value !== undefined && value !== content) {
      setContent(value);
      if (editorRef.current && editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value;
      }
    }
  }, [value]);

  // Initialize editor content once mounted
  useEffect(() => {
    if (editorRef.current && !editorRef.current.innerHTML && content) {
      // If content is plain text with newlines and no HTML tags, convert newlines to <p>
      if (!/<[a-z][\s\S]*>/i.test(content)) {
        const formatted = content
          .split(/\n\n+/)
          .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
          .join("");
        editorRef.current.innerHTML = formatted;
        setContent(formatted);
      } else {
        editorRef.current.innerHTML = content;
      }
    }
  }, []);

  const handleInput = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    setContent(html);
    onChange?.(html);
  };

  const exec = (command: string, arg?: string) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, arg);
    handleInput();
  };

  const insertTemplate = (type: "idea" | "feels" | "both") => {
    if (!editorRef.current) return;
    editorRef.current.focus();

    let snippet = "";
    if (type === "both") {
      snippet = `<p><strong>The Idea:</strong> Often, it’s not the event itself that causes our distress, but the story we tell ourselves about it.</p><p><strong>What it feels like:</strong> Imagine your mind is a filter that sometimes gets clogged with negative assumptions. In our sessions, we explore automatic thoughts, test their accuracy, and experiment with new ways of viewing situations.</p>`;
    } else if (type === "idea") {
      snippet = `<p><strong>The Idea:</strong> </p>`;
    } else {
      snippet = `<p><strong>What it feels like:</strong> </p>`;
    }

    document.execCommand("insertHTML", false, snippet);
    handleInput();
  };

  return (
    <div className="border border-[#dce6e0] rounded-xl overflow-hidden bg-white shadow-xs">
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-[#f8f6f0] border-b border-[#e2ece6] text-[#0f4a3a]">
        <button
          type="button"
          onClick={() => exec("bold")}
          title="Bold (Ctrl+B)"
          className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors"
        >
          <Bold size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("italic")}
          title="Italic (Ctrl+I)"
          className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors"
        >
          <Italic size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("underline")}
          title="Underline (Ctrl+U)"
          className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors"
        >
          <Underline size={15} />
        </button>

        <span className="h-4 w-px bg-[#d2e4da] mx-1" />

        <button
          type="button"
          onClick={() => exec("formatBlock", "<h2>")}
          title="Heading 2"
          className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors text-xs font-bold"
        >
          <Heading2 size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("formatBlock", "<h3>")}
          title="Heading 3"
          className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors text-xs font-bold"
        >
          <Heading3 size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("formatBlock", "<p>")}
          title="Normal Text"
          className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors text-xs"
        >
          <Type size={15} />
        </button>

        <span className="h-4 w-px bg-[#d2e4da] mx-1" />

        <button
          type="button"
          onClick={() => exec("insertUnorderedList")}
          title="Bullet List"
          className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors"
        >
          <List size={15} />
        </button>
        <button
          type="button"
          onClick={() => exec("insertOrderedList")}
          title="Numbered List"
          className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors"
        >
          <ListOrdered size={15} />
        </button>

        <span className="h-4 w-px bg-[#d2e4da] mx-1" />

        {/* Quick Insert Template for The Idea & What it feels like */}
        <button
          type="button"
          onClick={() => insertTemplate("both")}
          title="Insert 'The Idea' & 'What it feels like' layout"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[#0f4a3a] bg-[#eaf4ef] border border-[#d2e4da] rounded-md hover:bg-[#d5ebe0] transition-colors"
        >
          <Sparkles size={13} className="text-[#E9B12B]" />
          <span>+ &quot;The Idea&quot; &amp; &quot;What it feels like&quot;</span>
        </button>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={() => exec("removeFormat")}
            title="Clear Formatting"
            className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors text-[#888]"
          >
            <RemoveFormatting size={15} />
          </button>
          <button
            type="button"
            onClick={() => exec("undo")}
            title="Undo"
            className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors text-[#666]"
          >
            <Undo size={15} />
          </button>
          <button
            type="button"
            onClick={() => exec("redo")}
            title="Redo"
            className="p-1.5 rounded hover:bg-[#eaf4ef] transition-colors text-[#666]"
          >
            <Redo size={15} />
          </button>
          <button
            type="button"
            onClick={() => {
              if (!isHtmlMode && editorRef.current) {
                setContent(editorRef.current.innerHTML);
              }
              setIsHtmlMode(!isHtmlMode);
            }}
            title={isHtmlMode ? "Switch to Visual Editor" : "View HTML Code"}
            className={`p-1.5 rounded transition-colors ${
              isHtmlMode
                ? "bg-[#0f4a3a] text-white"
                : "hover:bg-[#eaf4ef] text-[#666]"
            }`}
          >
            <Code size={15} />
          </button>
        </div>
      </div>

      {/* Editor Surface */}
      {isHtmlMode ? (
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            onChange?.(e.target.value);
            if (editorRef.current) {
              editorRef.current.innerHTML = e.target.value;
            }
          }}
          rows={9}
          className="w-full p-4 font-mono text-xs border-0 focus:outline-none bg-[#fafafa] text-[#333]"
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onBlur={handleInput}
          className="p-4 min-h-[180px] max-h-[420px] overflow-y-auto focus:outline-none text-sm text-[#2E2E2A] leading-relaxed prose-editor"
          data-placeholder={placeholder}
          style={{ outline: "none" }}
        />
      )}

      {/* Hidden real input for form submission */}
      <input type="hidden" name={name} value={content} />
    </div>
  );
}
