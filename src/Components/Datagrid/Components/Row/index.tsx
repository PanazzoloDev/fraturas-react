import { get } from "lodash"
import { CellContainer, RowContainer } from "./style"

type rowProps = {
    accessors: string[]
    object: unknown
}

const Row = (props: rowProps) => {
    const { accessors, object } = props
    return (
        <RowContainer>
            {accessors.map(accessor =>
                <CellContainer key={get(object, accessor)}>
                    {get(object, accessor)}
                </CellContainer>
            )}
        </RowContainer>
    )
}

export default Row