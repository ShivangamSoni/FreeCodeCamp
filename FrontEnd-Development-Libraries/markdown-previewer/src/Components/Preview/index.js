import getHTML from "../../utils/getHTML";
import "prismjs/themes/prism-coy.css";

const Preview = ({ markdown }) => {
  return (
    <div className="preview">
      <h2 className="sectionTitle">Markdown Preview</h2>
      <div id="preview" dangerouslySetInnerHTML={{ __html: getHTML(markdown) }} />
    </div>
  );
};

export default Preview;
