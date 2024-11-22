import React, { useState } from "react";
import { Container, TextArea, Toolbar } from "./style";
import ToolbarButton from "./ToolbarButton";
import ColorPicker from "./ColorPicker";

interface TextEditorProps{

}

const TextEditor: React.FC<TextEditorProps> = (props) => {
    const [font, setFont] = useState("Inter");
    const [color, setColor] = useState("#000");
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);

    return (
        <Container>
            <Toolbar>
                <ToolbarButton
                    label="B"
                    active={bold}
                    onClick={() => setBold(!bold)}
                    style={{ fontWeight: "bold" }}
                />
                <ToolbarButton
                    label="I"
                    active={italic}
                    onClick={() => setItalic(!italic)}
                    style={{ fontStyle: "italic" }}
                />
                <ToolbarButton
                    label="U"
                    active={underline}
                    onClick={() => setUnderline(!underline)}
                    style={{ textDecoration: "underline" }}
                />
                <ColorPicker
                    colors={["#000", "#f00", "#00f"]}
                    onSelectColor={(color) => setColor(color)}
                />
            </Toolbar>
            <TextArea
                font={font}
                fontSize="16px"
                color={color}
                style={{
                    fontWeight: bold ? "bold" : "normal",
                    fontStyle: italic ? "italic" : "normal",
                    textDecoration: underline ? "underline" : "none",
                }}
                placeholder="Digite aqui..."
            />
        </Container>
    );
};

export default TextEditor;