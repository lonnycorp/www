import { node } from "@lonnycorp/htmlforge"

export class Head implements node.Buildable {

    private readonly root : node.Fragment

    constructor(title: string) {
        this.root = new node.Fragment()
            .child(
                new node.Element("title")
                    .child(new node.Text(title))
            )
            .child(
                new node.Element("meta")
                    .attribute("charset", "UTF-8")
            )
            .child(
                new node.Element("meta")
                    .attribute("name", "viewport")
                    .attribute("content", "width=device-width, initial-scale=1.0")
            )
            .child(
                new node.Element("link")
                    .attribute("rel", "icon")
                    .attribute("type", "image/png")
                    .attribute("sizes", "64x64")
                    .attribute("href", "/asset/favicon.png")
            )
    }

    build() {
        return this.root.build()
    }

}
