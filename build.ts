import { mkdirSync, rmSync, cpSync, writeFileSync } from "fs"
import { join } from "path"
import { ROOT_DIRECTORY } from "@src/root"
import { toString as pageToString } from "@src/page"

const ASSET_PREFIX = "asset"
const DIST_PATH = join(ROOT_DIRECTORY, "dist")

const clean = () => {
    rmSync(DIST_PATH, { recursive: true, force: true })
    mkdirSync(DIST_PATH)
    cpSync(
        join(ROOT_DIRECTORY, ASSET_PREFIX),
        join(DIST_PATH, ASSET_PREFIX),
        { recursive: true }
    )
}

const pageWrite = () => {
    writeFileSync(join(DIST_PATH, "index.html"), pageToString())
}

clean()
pageWrite()
