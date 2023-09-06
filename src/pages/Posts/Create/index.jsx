import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import parse from "html-react-parser";

const CreatePost = () => {
  const [data, setData] = useState("");
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setData(editorRef.current.getContent());
    }
  };
  return (
    <div className="container">
      <input
        id="input"
        type="text"
        className="focus:ring-0 mt-5"
        placeholder="Post title"
      />
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "a11ychecker",
            "advlist",
            "advcode",
            "advtable",
            "autolink",
            "checklist",
            "export",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "powerpaste",
            "fullscreen",
            "formatpainter",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | casechange blocks | bold italic backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />

      <button onClick={log}>Create post</button>

      {parse(data)}
    </div>
  );
};

export default CreatePost;
