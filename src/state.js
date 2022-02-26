import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil"

const onClickState = atom({
    key:"onClickState",
    default:0
})
const scrollChangeState = atom({
    key:"scrollChangeState",
    default:0
})
const focusChangeState = atom({
    key:"focusChangeState",
    default:0
})

export {onClickState,scrollChangeState,focusChangeState}

