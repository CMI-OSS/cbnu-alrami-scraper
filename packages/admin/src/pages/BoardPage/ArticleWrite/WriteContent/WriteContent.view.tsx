/* eslint-disable @typescript-eslint/ban-ts-comment */
import { memo, useMemo } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

import $ from "./WriteContent.module.scss";

export interface Props {
  content: string;
  onChangeContent: (content: string) => void;
}

function WriteContentView({ content, onChangeContent }: Props) {
  const editorModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [ { size: [ "small", false, "large", "huge" ] }, { color: [] } ],
          [ "bold", "italic", "underline", "strike" ],
        ],
      },
    }),
    [],
  );

  // const imageHandler = () => {} // Todo: 이미지 핸들러 함수

  return (
    // @ts-ignore
    <ReactQuill
      className={$.editor}
      value={content}
      onChange={(v: string) => {
        onChangeContent(v);
      }}
      modules={editorModules}
      theme="snow"
      placeholder="내용을 입력해주세요."
    />
  );
}

export default memo(WriteContentView);
