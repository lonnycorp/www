import { node } from "@lonnycorp/htmlforge"

export class Container implements node.Buildable {

    private readonly root : node.Element

    constructor() {
        this.root = new node.Element("main")
            .style("max-width", "640px")
            .style("padding", "10px")
            .style("display", "flex")
            .style("flex-direction", "column")
            .style("flex-grow", "1")
            .style("gap", "12px")
            .style("margin", "0 auto")
    }

    child(child : node.Buildable) {
        this.root.child(child)
        return this
    }

    build() {
        return this.root.build()
    }

}
