import { node } from "@lonnycorp/htmlforge"
import { Anchor } from "./anchor"

export type ProjectParams = {
    path: string,
    name: string,
    description: string,
}

export class Project implements node.Buildable {

    private readonly root : node.Element

    constructor(params: ProjectParams) {
        this.root = new node.Element("div")
            .child(new Anchor({
                href: params.path,
                text: params.name,
            }))
            .child(new node.Text(" - "))
            .child(new node.Text(params.description))
    }

    build() {
        return this.root.build()
    }

}
