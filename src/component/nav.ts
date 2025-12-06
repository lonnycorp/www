import { node } from "@lonnycorp/htmlforge"

export class Nav implements node.Buildable {

    private readonly root : node.Element

    constructor(title: string) {
        this.root = new node.Element("div")
            .style("display", "flex")
            .style("gap", "10px")
            .style("justify-content", "center")
            .child(
                new node.Element("div")
                    .style("background", "black")
                    .style("color", "white")
                    .child(new node.Text(title))
            )
    }

    build() {
        return this.root.build()
    }

}
