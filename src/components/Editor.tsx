import "react-quill/dist/quill.snow.css";

import { As, chakra } from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/system";
import { useMemo } from "react";
import ReactQuill from "react-quill";
type ComponentProps = ReactQuill["props"];

const InnerEditor = chakra<As, ComponentProps>(
  (props: ComponentProps & ChakraProps) => {
    const modules = useMemo(() => {
      return {
        toolbar: [
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }], // superscript/subscript
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ direction: "rtl" }], // text direction

          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ["clean"], // remove formatting button
        ],
      };
    }, []);

    return <ReactQuill modules={modules} {...props} />;
  },
  {
    baseStyle: {},
  }
);
const Editor = (props: ComponentProps & ChakraProps) => (
  <InnerEditor
    sx={{
      "& .ql-toolbar .ql-stroke": {
        stroke: "mainText !important",
      },
      "& .ql-toolbar .ql-fill": {
        fill: "mainText !important",
      },
      "& .ql-toolbar .ql-picker": {
        color: "mainText !important",
      },
    }}
    {...props}
  />
);

export default Editor;
