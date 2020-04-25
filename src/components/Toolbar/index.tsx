import React from "react";
import "./styles.css";
import { ButtonProps, Button } from "../Button";
import { SizeUpdater } from "../SizeUpdater";

export interface ToolbarProps {
    buttons?: ButtonProps[];
    gridSize: [number, number];
    enableResize?: boolean;
    onUpdateGridSize: (newSize: [number, number]) => void;
}

export function Toolbar({
    buttons = [],
    onUpdateGridSize,
    gridSize,
    enableResize,
}: ToolbarProps) {
    return (
        <div className="toolbar rounded-container">
            {buttons.map((props: ButtonProps, idx: number) => (
                <Button {...props} key={"toolbar_button_" + idx} />
            ))}
            {enableResize && (
                <SizeUpdater
                    key="size_updater"
                    onUpdateGridSize={onUpdateGridSize}
                    gridSize={gridSize}
                />
            )}
            {<div>Foo</div>}
        </div>
    );
}
