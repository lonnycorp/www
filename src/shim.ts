import { node } from "@lonnycorp/htmlforge"

export const shim = (body : node.Element) => {
    body
        .style("color", "black")
        .style("font-family", "monospace")
        .style("display", "flex")
        .style("flex-direction", "column")
        .style("margin", "0px")
        .style("height", "100vh")
        .style("padding", "0px")
        .style("font-size", "12px")
        .style("box-sizing", "border-box")
}
