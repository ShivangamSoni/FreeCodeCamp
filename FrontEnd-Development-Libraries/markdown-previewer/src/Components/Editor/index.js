const Editor = ({ markdown, handleChange }) => {
  return (
    <div className="editor">
      <h2 className="sectionTitle">Markdown (.md)</h2>
      <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
    </div>
  );
};

export default Editor;
