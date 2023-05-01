import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const listOfButtons = "bold,italic,underline,ul,ol,indent,outdent,left,link,source";

const joditConfig = {
    readonly: false,
    buttons: listOfButtons,
    buttonsSM: listOfButtons,
    buttonsMD: listOfButtons,
    buttonsXS: listOfButtons,
    textAlign: "left",
    width: "100%",
};

export const RichTextField: React.FC<{ value: string; setValue: Function }> = ({ value, setValue }) => {
    const editor = useRef(null);

    const config = {
        ...joditConfig,
        height: `${500}px`,
    };

    return (
        <div className="RichTextField">
            <JoditEditor ref={editor} value={value} config={config} onBlur={(newContent) => setValue(newContent)} />
        </div>
    );
};
