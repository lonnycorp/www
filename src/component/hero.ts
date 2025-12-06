import { node } from "@lonnycorp/htmlforge"

export class Hero implements node.Buildable {

    private readonly root : node.Element

    constructor(imageURL: string) {
        this.root = new node.Element("div")
            .style("display", "flex")
            .style("justify-content", "center")
            .child(
                new node.Element("img")
                    .attribute("src", imageURL)
                    .style("height", "auto")
                    .style("max-width", "100%")
            )
    }

    build() {
        return this.root.build()
    }

}
