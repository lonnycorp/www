import { node } from "@lonnycorp/htmlforge"

export class Divider implements node.Buildable {

    private readonly root : node.Element

    constructor() {
        this.root = new node.Element("div")
            .style("border-bottom", "dashed black 1px")
    }

    build() {
        return this.root.build()
    }

}
