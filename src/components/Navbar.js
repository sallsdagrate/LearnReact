import React from "react"
import { css, jsx } from "@emotion/core"
/** @jsx jsx */

const style = css`
    background-color: turquoise;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    position: absolute;
    top: 0;
    height: 40px;
    font-size: 20px;
    padding: 10px;
    box-sizing: border-box;
`

export default () => {
    return <div css={style}>
        <div>
            MyApp
        </div>
        <div>
            Login
        </div>
    </div>
}