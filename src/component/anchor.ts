import { node } from "@lonnycorp/htmlforge"

export type AnchorParams = {
    href: string,
    text: string,
}

export class Anchor implements node.Buildable {

    private readonly root : node.Element

    constructor(params: AnchorParams) {
        this.root = new node.Element("a")
            .attribute("href", params.href)
            .style("color", "blue")
            .style("background", "blue", { pseudoSelector: ":hover" })
            .style("color", "white", { pseudoSelector: ":hover" })
            .child(new node.Text(params.text))
    }

    build() {
        return this.root.build()
    }

}
